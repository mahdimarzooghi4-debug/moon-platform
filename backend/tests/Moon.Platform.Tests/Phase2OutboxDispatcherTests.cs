using MassTransit;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase2OutboxDispatcherTests : IAsyncLifetime
{
    private readonly string _connectionString = Environment.GetEnvironmentVariable("TEST_POSTGRES")
        ?? "Host=localhost;Port=5432;Database=moon;Username=moon;Password=moon-local-only";

    public async Task InitializeAsync()
    {
        await using var db = CreateDbContext();
        await db.Database.EnsureDeletedAsync();
        await db.Database.MigrateAsync();
    }

    public async Task DisposeAsync()
    {
        await using var db = CreateDbContext();
        await db.Database.EnsureDeletedAsync();
    }

    [Fact]
    public async Task Durable_outbox_dispatches_through_real_RabbitMQ_when_enabled()
    {
        var rabbitHost = Environment.GetEnvironmentVariable("TEST_RABBITMQ_HOST");
        if (string.IsNullOrWhiteSpace(rabbitHost))
        {
            return;
        }

        var rabbitUser = Environment.GetEnvironmentVariable("TEST_RABBITMQ_USER") ?? "moon";
        var rabbitPassword = Environment.GetEnvironmentVariable("TEST_RABBITMQ_PASSWORD") ?? "moon-phase2-final-only";
        var receivedEnvelope = new TaskCompletionSource<IntegrationEventEnvelope>(TaskCreationOptions.RunContinuationsAsynchronously);

        var services = new ServiceCollection();
        services.AddLogging(builder => builder.SetMinimumLevel(LogLevel.Warning));
        services.AddSingleton<LedgerIntegrityInterceptor>();
        services.AddDbContext<MoonDbContext>((serviceProvider, options) =>
        {
            options.UseNpgsql(_connectionString);
            options.AddInterceptors(serviceProvider.GetRequiredService<LedgerIntegrityInterceptor>());
        });
        services.Configure<MessagingOptions>(options =>
        {
            options.Transport = "RabbitMQ";
            options.OutboxDispatchEnabled = true;
            options.RabbitMqHost = rabbitHost;
            options.RabbitMqVirtualHost = "/";
            options.RabbitMqUsername = rabbitUser;
            options.RabbitMqPassword = rabbitPassword;
            options.PollIntervalMilliseconds = 250;
            options.LockSeconds = 10;
            options.MaxAttempts = 3;
        });
        services.AddMassTransit(registration =>
        {
            registration.UsingRabbitMq((context, cfg) =>
            {
                var options = context.GetRequiredService<IOptions<MessagingOptions>>().Value;
                cfg.Host(options.RabbitMqHost, options.RabbitMqVirtualHost, host =>
                {
                    host.Username(options.RabbitMqUsername);
                    host.Password(options.RabbitMqPassword);
                });

                cfg.ReceiveEndpoint("phase2-outbox-quorum-probe", endpoint =>
                {
                    endpoint.SetQueueArgument("x-queue-type", "quorum");
                    endpoint.Handler<IntegrationEventEnvelope>(messageContext =>
                    {
                        receivedEnvelope.TrySetResult(messageContext.Message);
                        return Task.CompletedTask;
                    });
                });
            });
        });

        await using var provider = services.BuildServiceProvider();
        Guid seededMessageId;
        await using (var seedScope = provider.CreateAsyncScope())
        {
            var db = seedScope.ServiceProvider.GetRequiredService<MoonDbContext>();
            var message = new OutboxMessage
            {
                EventType = IntegrationEventTypes.FundingCommitted,
                AggregateType = "funding_commitment",
                AggregateId = Guid.NewGuid().ToString(),
                DeduplicationKey = $"dispatcher-test-{Guid.NewGuid():N}",
                PayloadJson = "{\"test\":true}",
                CorrelationId = "dispatcher-integration-test"
            };
            seededMessageId = message.Id;
            db.OutboxMessages.Add(message);
            await db.SaveChangesAsync();
        }

        var bus = provider.GetRequiredService<IBusControl>();
        await bus.StartAsync();
        var dispatcher = new OutboxDispatcher(
            provider.GetRequiredService<IServiceScopeFactory>(),
            provider.GetRequiredService<IOptions<MessagingOptions>>(),
            provider.GetRequiredService<ILogger<OutboxDispatcher>>());

        using var timeout = new CancellationTokenSource(TimeSpan.FromSeconds(20));
        try
        {
            await dispatcher.StartAsync(timeout.Token);

            OutboxMessage? published = null;
            while (!timeout.IsCancellationRequested)
            {
                await Task.Delay(250, timeout.Token);
                await using var checkScope = provider.CreateAsyncScope();
                var db = checkScope.ServiceProvider.GetRequiredService<MoonDbContext>();
                published = await db.OutboxMessages.AsNoTracking().SingleAsync(timeout.Token);
                if (published.PublishedAtUtc is not null)
                {
                    break;
                }
            }

            var received = await receivedEnvelope.Task.WaitAsync(timeout.Token);

            Assert.NotNull(published);
            Assert.NotNull(published.PublishedAtUtc);
            Assert.Null(published.DeadLetteredAtUtc);
            Assert.Null(published.LastError);
            Assert.True(published.PublishAttempts >= 1);
            Assert.Equal(seededMessageId, received.MessageId);
            Assert.Equal(IntegrationEventTypes.FundingCommitted, received.EventType);
            Assert.Equal("dispatcher-integration-test", received.CorrelationId);
        }
        finally
        {
            await dispatcher.StopAsync(CancellationToken.None);
            await bus.StopAsync(CancellationToken.None);
        }
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .AddInterceptors(new LedgerIntegrityInterceptor())
            .Options;
        return new MoonDbContext(options);
    }
}
