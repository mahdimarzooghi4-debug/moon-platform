using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Common.Messaging;

public sealed record OutboxWriteRequest(
    string EventType,
    string AggregateType,
    string AggregateId,
    string DeduplicationKey,
    string PayloadJson,
    string CorrelationId,
    DateTimeOffset? OccurredAtUtc = null);

public interface IOutboxWriter
{
    Task<Guid> EnqueueAsync(OutboxWriteRequest request, CancellationToken cancellationToken = default);
}

public sealed class OutboxWriter(MoonDbContext dbContext) : IOutboxWriter
{
    public async Task<Guid> EnqueueAsync(OutboxWriteRequest request, CancellationToken cancellationToken = default)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(request.EventType);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.AggregateType);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.AggregateId);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.DeduplicationKey);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.PayloadJson);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.CorrelationId);

        var existing = await dbContext.Set<OutboxMessage>()
            .AsNoTracking()
            .SingleOrDefaultAsync(x => x.DeduplicationKey == request.DeduplicationKey, cancellationToken);
        if (existing is not null)
        {
            return existing.Id;
        }

        var message = new OutboxMessage
        {
            EventType = request.EventType.Trim(),
            AggregateType = request.AggregateType.Trim(),
            AggregateId = request.AggregateId.Trim(),
            DeduplicationKey = request.DeduplicationKey.Trim(),
            PayloadJson = request.PayloadJson,
            CorrelationId = request.CorrelationId.Trim(),
            OccurredAtUtc = request.OccurredAtUtc ?? DateTimeOffset.UtcNow,
            NextAttemptAtUtc = DateTimeOffset.UtcNow
        };

        dbContext.Set<OutboxMessage>().Add(message);
        await dbContext.SaveChangesAsync(cancellationToken);
        return message.Id;
    }
}
