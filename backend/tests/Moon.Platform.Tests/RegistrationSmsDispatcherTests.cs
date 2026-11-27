using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging.Abstractions;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Sms;
using Moon.Platform.Api.Modules.StartupRegistration;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class RegistrationSmsDispatcherTests : IAsyncLifetime
{
    private readonly string connection = Environment.GetEnvironmentVariable("TEST_POSTGRES")
        ?? "Host=localhost;Port=5432;Database=moon;Username=moon;Password=moon-local-only";
    private MoonDbContext CreateDb() => new(new DbContextOptionsBuilder<MoonDbContext>()
        .UseNpgsql(connection).AddInterceptors(new LedgerIntegrityInterceptor()).Options);
    public async Task InitializeAsync()
    {
        await using var db = CreateDb();
        await db.Database.EnsureDeletedAsync();
        await db.Database.MigrateAsync();
    }
    public async Task DisposeAsync()
    {
        await using var db = CreateDb();
        await db.Database.EnsureDeletedAsync();
    }

    [Theory]
    [InlineData(true)]
    [InlineData(false)]
    public async Task SendsCommittedEventsOnceAndRecordsProviderOutcome(bool accepted)
    {
        var app = new StartupApplication
        {
            Name = "Synthetic", ContactName = "Synthetic Representative", Mobile = "09000000000",
            Email = "test@example.invalid", Description = "Fixture", TrackingCode = "0123456789",
            Status = "approved"
        };
        await using (var db = CreateDb())
        {
            db.StartupApplications.Add(app);
            db.OutboxMessages.Add(RegistrationSmsNotice.Create(app.Id, RegistrationSmsNotice.Submitted));
            db.OutboxMessages.Add(RegistrationSmsNotice.Create(app.Id, RegistrationSmsNotice.Approved));
            await db.SaveChangesAsync();
        }
        var fake = new FakeSms(accepted);
        var services = new ServiceCollection();
        services.AddDbContext<MoonDbContext>(options => options.UseNpgsql(connection).AddInterceptors(new LedgerIntegrityInterceptor()));
        services.AddSingleton<ISmsProvider>(fake);
        await using var provider = services.BuildServiceProvider();
        var config = new ConfigurationBuilder().AddInMemoryCollection(new Dictionary<string, string?>
        {
            ["ExternalServices:Sms:RegistrationNotificationsEnabled"] = "true",
            ["ExternalServices:Sms:Provider"] = "SmsIr",
            ["ExternalServices:Sms:ApiKey"] = "fixture-only",
            ["ExternalServices:Sms:RegistrationSubmittedTemplateId"] = "411055",
            ["ExternalServices:Sms:RegistrationApprovedTemplateId"] = "833279"
        }).Build();
        var dispatcher = new RegistrationSmsDispatcher(provider.GetRequiredService<IServiceScopeFactory>(),
            config, NullLogger<RegistrationSmsDispatcher>.Instance);
        Assert.True(await dispatcher.DispatchOneAsync(CancellationToken.None));
        Assert.True(await dispatcher.DispatchOneAsync(CancellationToken.None));
        Assert.False(await dispatcher.DispatchOneAsync(CancellationToken.None));
        Assert.Equal(new[] { "411055", "833279" }, fake.Templates.OrderBy(x => x).ToArray());
        await using var verify = CreateDb();
        var messages = await verify.OutboxMessages.ToListAsync();
        Assert.Equal(2, messages.Count);
        Assert.All(messages, message =>
        {
            Assert.Equal("{}", message.PayloadJson);
            Assert.Equal(1, message.PublishAttempts);
            Assert.Equal(accepted, message.PublishedAtUtc.HasValue);
            Assert.Equal(!accepted, message.DeadLetteredAtUtc.HasValue);
        });
    }

    private sealed class FakeSms(bool accepted) : ISmsProvider
    {
        public List<string> Templates { get; } = [];
        public Task<SmsSendResult> SendOtpAsync(string destination, string template,
            IReadOnlyDictionary<string, string> tokens, CancellationToken cancellationToken = default)
        {
            Assert.Equal("09000000000", destination);
            Assert.Equal("0123456789", tokens["CODE"]);
            Assert.Single(tokens);
            Templates.Add(template);
            return Task.FromResult(new SmsSendResult(accepted, "fixture", null, accepted ? null : "sms_send_failed"));
        }
    }
}
