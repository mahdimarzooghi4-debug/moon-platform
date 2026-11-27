using System.Net;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.CompanyRegistration;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.StartupRegistration;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class CompanyApprovalTests : IAsyncLifetime
{
    private readonly string connection = Environment.GetEnvironmentVariable("TEST_POSTGRES")
        ?? "Host=localhost;Port=5432;Database=moon;Username=moon;Password=moon-local-only";
    private MoonDbContext Db() => new(new DbContextOptionsBuilder<MoonDbContext>()
        .UseNpgsql(connection).AddInterceptors(new LedgerIntegrityInterceptor()).Options);
    public async Task InitializeAsync()
    {
        await using var db = Db();
        await db.Database.EnsureDeletedAsync();
        await db.Database.MigrateAsync();
    }
    public async Task DisposeAsync()
    {
        await using var db = Db();
        await db.Database.EnsureDeletedAsync();
    }

    internal static CompanyApplication Application() => new()
    {
        NationalIdentifier = "12345678901", Name = "Fixture company", RegistrationNumber = "1",
        LegalForm = "fixture", RegistrationDate = "1405/01/01", ActivityField = "fixture",
        Province = "fixture", City = "fixture", Address = "fixture", PostalCode = "1234567890",
        RepresentativeFirstName = "Fixture", RepresentativeLastName = "Person",
        RepresentativeNationalId = "1234567890", RepresentativePosition = "fixture",
        Mobile = "09000000000", Email = "test@example.invalid", EconomicCode = "fixture",
        TaxIdentifier = "fixture", TaxFileStatus = "fixture", TrackingCode = "0123456789",
        Status = "pending_review", RepresentativeLetter = "%PDF-"u8.ToArray(),
        EstablishmentNotice = "%PDF-"u8.ToArray(), ArticlesOfAssociation = "%PDF-"u8.ToArray(),
        LatestChangesNotice = "%PDF-"u8.ToArray()
    };

    [Fact]
    public async Task UncertainEnableLeavesAllMoonAccessInactiveAndRetryApprovesOnce()
    {
        var application = Application();
        await using (var seed = Db())
        {
            seed.CompanyApplications.Add(application);
            await seed.SaveChangesAsync();
        }
        var subject = Guid.NewGuid().ToString("D");
        var admin = new CurrentIdentity(Guid.NewGuid(), "fixture-admin", null, true, [SystemRoles.SystemAdmin], []);
        var config = new ConfigurationBuilder().AddInMemoryCollection(new Dictionary<string,string?>
        {
            ["CompanyRegistration:ReviewEnabled"] = "true",
            ["CompanyRegistration:ApprovalEnabled"] = "true",
            ["CompanyRegistration:ReviewerSubjects:0"] = admin.ExternalSubject,
            ["KeycloakProvisioning:Authority"] = "https://fixture.invalid/realms/moon",
            ["KeycloakProvisioning:ClientSecret"] = "fixture"
        }).Build();
        var handler = new ProvisioningHandler(subject);
        using var http = new HttpClient(handler);
        var keycloak = new KeycloakAccountClient(http, config);
        async Task<IResult> Approve(bool confirm, CurrentIdentity actor)
        {
            await using var db = Db();
            return await CompanyApplicationReviewEndpoints.ApproveAsync(application.Id, new(confirm),
                new ClaimsPrincipal(), new DefaultHttpContext(), new FixedIdentity(actor), config, db,
                new AuditWriter(db), keycloak, CancellationToken.None);
        }
        Assert.IsAssignableFrom<Microsoft.AspNetCore.Http.HttpResults.ForbidHttpResult>(
            await Approve(true, admin with { IdentityRoles = [SystemRoles.ProductOwner] }));
        Assert.Equal(400, ((IStatusCodeHttpResult)await Approve(false, admin)).StatusCode);
        Assert.Equal(0, handler.Creates);
        await Assert.ThrowsAsync<HttpRequestException>(() => Approve(true, admin));
        await using (var pending = Db())
        {
            Assert.Equal("pending_activation", (await pending.CompanyApplications.SingleAsync()).Status);
            Assert.False((await pending.Users.SingleAsync()).IsActive);
            Assert.False((await pending.Memberships.SingleAsync()).IsActive);
            Assert.Equal("pending_activation", (await pending.Organizations.SingleAsync()).Status);
            Assert.Empty(await pending.OutboxMessages.ToListAsync());
        }
        Assert.Equal(204, ((IStatusCodeHttpResult)await Approve(true, admin)).StatusCode);
        Assert.Equal(204, ((IStatusCodeHttpResult)await Approve(true, admin)).StatusCode);
        await using var verify = Db();
        var approved = await verify.CompanyApplications.SingleAsync();
        Assert.Equal("approved", approved.Status);
        Assert.Equal(subject, approved.ActivationSubject);
        Assert.True((await verify.Users.SingleAsync()).IsActive);
        Assert.True((await verify.Memberships.SingleAsync()).IsActive);
        Assert.Equal("active", (await verify.Organizations.SingleAsync()).Status);
        var notice = await verify.OutboxMessages.SingleAsync();
        Assert.Equal(RegistrationSmsNotice.Approved, notice.EventType);
        Assert.Equal("company_application", notice.AggregateType);
        Assert.Equal(1, handler.Creates);
        Assert.Equal(2, handler.Enables);
    }

    private sealed class FixedIdentity(CurrentIdentity identity) : IIdentitySyncService
    {
        public Task<CurrentIdentity?> GetCurrentAsync(ClaimsPrincipal principal, CancellationToken cancellationToken = default)
            => Task.FromResult<CurrentIdentity?>(identity);
        public Task<CurrentIdentity> SyncAsync(ClaimsPrincipal principal, string correlationId, string? ipAddress,
            CancellationToken cancellationToken = default) => Task.FromResult(identity);
    }

    private sealed class ProvisioningHandler(string subject) : HttpMessageHandler
    {
        public int Creates { get; private set; }
        public int Enables { get; private set; }
        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken ct)
        {
            if (request.RequestUri!.AbsolutePath.EndsWith("/token", StringComparison.Ordinal))
                return new(HttpStatusCode.OK) { Content = new StringContent("{\"access_token\":\"fixture\"}") };
            if (request.Method == HttpMethod.Post)
            {
                Creates++;
                var body = await request.Content!.ReadAsStringAsync(ct);
                using var json = System.Text.Json.JsonDocument.Parse(body);
                Assert.False(json.RootElement.GetProperty("enabled").GetBoolean());
                Assert.False(json.RootElement.TryGetProperty("credentials", out _));
                var response = new HttpResponseMessage(HttpStatusCode.Created);
                response.Headers.Location = new Uri("https://fixture.invalid/admin/realms/moon/users/" + subject);
                return response;
            }
            Assert.Equal(HttpMethod.Put, request.Method);
            Assert.EndsWith("/" + subject, request.RequestUri!.AbsolutePath);
            Enables++;
            if (Enables == 1) throw new HttpRequestException("fixture: uncertain acknowledgement");
            return new(HttpStatusCode.NoContent);
        }
    }
}
