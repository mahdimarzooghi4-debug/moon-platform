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
    [InlineData(true, false, false)]
    [InlineData(false, false, false)]
    [InlineData(true, true, false)]
    [InlineData(true, false, true)]
    [InlineData(false, false, true)]
    public async Task SendsCommittedEventsOnceAndRecordsProviderOutcome(bool accepted, bool legacy, bool company)
    {
        var app = new StartupApplication
        {
            Name = "Synthetic", ContactName = "Synthetic Representative", Mobile = "09000000000",
            Email = "test@example.invalid", Description = "Fixture", TrackingCode = legacy ? new string('A', 48) : "0123456789",
            Status = "approved"
        };
        await using (var db = CreateDb())
        {
            if (company)
            {
                var companyApp = CompanyApprovalTests.Application();
                companyApp.Status = "approved";
                db.CompanyApplications.Add(companyApp);
                db.OutboxMessages.Add(RegistrationSmsNotice.Create(companyApp.Id, RegistrationSmsNotice.Submitted, "company_application"));
                db.OutboxMessages.Add(RegistrationSmsNotice.Create(companyApp.Id, RegistrationSmsNotice.Approved, "company_application"));
            }
            else
            {
                db.StartupApplications.Add(app);
                db.OutboxMessages.Add(RegistrationSmsNotice.Create(app.Id, RegistrationSmsNotice.Submitted));
                db.OutboxMessages.Add(RegistrationSmsNotice.Create(app.Id, RegistrationSmsNotice.Approved));
            }
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
        if (legacy) Assert.Empty(fake.Templates);
        else Assert.Equal(new[] { "411055", "833279" }, fake.Templates.OrderBy(x => x).ToArray());
        await using var verify = CreateDb();
        var messages = await verify.OutboxMessages.ToListAsync();
        Assert.Equal(2, messages.Count);
        Assert.All(messages, message =>
        {
            Assert.Equal("{}", message.PayloadJson);
            Assert.Equal(legacy ? 0 : 1, message.PublishAttempts);
            Assert.Equal(accepted && !legacy, message.PublishedAtUtc.HasValue);
            Assert.Equal(!accepted || legacy, message.DeadLetteredAtUtc.HasValue);
            if (legacy) Assert.Equal("sms_source_invalid", message.LastError);
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
