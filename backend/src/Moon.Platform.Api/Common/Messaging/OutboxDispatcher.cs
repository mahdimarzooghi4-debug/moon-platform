using MassTransit;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Common.Messaging;

public sealed class OutboxDispatcher(
    IServiceScopeFactory scopeFactory,
    IOptions<MessagingOptions> options,
    ILogger<OutboxDispatcher> logger) : BackgroundService
{
    private readonly MessagingOptions _options = options.Value;
    private readonly string _workerId = $"{Environment.MachineName}:{Guid.NewGuid():N}";

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        if (!_options.OutboxDispatchEnabled)
        {
            logger.LogInformation("Transactional outbox dispatch is disabled; messages will remain durable and pending.");
            return;
        }

        var delay = TimeSpan.FromMilliseconds(Math.Max(250, _options.PollIntervalMilliseconds));
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                var dispatched = await DispatchOneAsync(stoppingToken);
                if (!dispatched)
                {
                    await Task.Delay(delay, stoppingToken);
                }
            }
            catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested)
            {
                break;
            }
            catch (Exception exception)
            {
                logger.LogError(exception, "Unexpected outbox dispatcher failure.");
                await Task.Delay(delay, stoppingToken);
            }
        }
    }

    private async Task<bool> DispatchOneAsync(CancellationToken cancellationToken)
    {
        await using var scope = scopeFactory.CreateAsyncScope();
        var db = scope.ServiceProvider.GetRequiredService<MoonDbContext>();
        var publisher = scope.ServiceProvider.GetRequiredService<IPublishEndpoint>();
        var now = DateTimeOffset.UtcNow;

        OutboxMessage? claimed;
        await using (var transaction = await db.Database.BeginTransactionAsync(cancellationToken))
        {
            claimed = await db.Set<OutboxMessage>()
                .FromSqlInterpolated($"""
                    SELECT * FROM moon.outbox_messages
                    WHERE "PublishedAtUtc" IS NULL
                      AND "DeadLetteredAtUtc" IS NULL
                      AND "NextAttemptAtUtc" <= {now}
                      AND ("LockedUntilUtc" IS NULL OR "LockedUntilUtc" < {now})
                    ORDER BY "OccurredAtUtc", "Id"
                    FOR UPDATE SKIP LOCKED
                    LIMIT 1
                    """)
                .SingleOrDefaultAsync(cancellationToken);

            if (claimed is null)
            {
                await transaction.RollbackAsync(cancellationToken);
                return false;
            }

            claimed.LockedBy = _workerId;
            claimed.LockedUntilUtc = now.AddSeconds(Math.Max(10, _options.LockSeconds));
            claimed.PublishAttempts += 1;
            await db.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);
        }

        try
        {
            var envelope = new IntegrationEventEnvelope(
                claimed.Id,
                claimed.EventType,
                claimed.AggregateType,
                claimed.AggregateId,
                claimed.PayloadJson,
                claimed.OccurredAtUtc,
                claimed.CorrelationId);

            await publisher.Publish(envelope, context =>
            {
                context.MessageId = claimed.Id;
                context.Headers.Set("X-Integration-Event-Type", claimed.EventType);
                context.Headers.Set("X-Correlation-Id", claimed.CorrelationId);
            }, cancellationToken);

            claimed.PublishedAtUtc = DateTimeOffset.UtcNow;
            claimed.LockedBy = null;
            claimed.LockedUntilUtc = null;
            claimed.LastError = null;
            await db.SaveChangesAsync(cancellationToken);
            return true;
        }
        catch (Exception exception)
        {
            var failedAt = DateTimeOffset.UtcNow;
            claimed.LastError = exception.Message.Length <= 2000
                ? exception.Message
                : exception.Message[..2000];
            claimed.LockedBy = null;
            claimed.LockedUntilUtc = null;

            if (claimed.PublishAttempts >= Math.Max(1, _options.MaxAttempts))
            {
                claimed.DeadLetteredAtUtc = failedAt;
                logger.LogError(exception, "Outbox message {MessageId} dead-lettered after {Attempts} attempts.", claimed.Id, claimed.PublishAttempts);
            }
            else
            {
                var backoffSeconds = Math.Min(300, (int)Math.Pow(2, Math.Min(8, claimed.PublishAttempts)));
                claimed.NextAttemptAtUtc = failedAt.AddSeconds(backoffSeconds);
                logger.LogWarning(exception, "Outbox message {MessageId} publish attempt {Attempt} failed.", claimed.Id, claimed.PublishAttempts);
            }

            await db.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
