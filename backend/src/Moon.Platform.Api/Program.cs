using System.Security.Claims;
using MassTransit;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Moon.Platform.Api.Common;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Authorization;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Payments;
using Moon.Platform.Api.Integrations.Sms;
using Moon.Platform.Api.Modules.Evaluations;
using Moon.Platform.Api.Modules.Execution;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using OpenTelemetry.Metrics;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails();
builder.Services.AddHealthChecks();

builder.Services.AddCors(options =>
{
    options.AddPolicy("frontend", policy =>
    {
        var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];
        if (allowedOrigins.Length > 0)
        {
            policy.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyMethod();
        }
    });
});

builder.Services.AddSingleton<LedgerIntegrityInterceptor>();
builder.Services.AddSingleton<ExecutionIntegrityInterceptor>();
builder.Services.AddDbContext<MoonDbContext>((serviceProvider, options) =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("Postgres"));
    options.ReplaceService<IModelCustomizer, MoonExecutionModelCustomizer>();
    options.AddInterceptors(
        serviceProvider.GetRequiredService<LedgerIntegrityInterceptor>(),
        serviceProvider.GetRequiredService<ExecutionIntegrityInterceptor>());
});

builder.Services.Configure<PaymentOptions>(builder.Configuration.GetSection(PaymentOptions.SectionName));
builder.Services.Configure<MessagingOptions>(builder.Configuration.GetSection(MessagingOptions.SectionName));

var configuredMessagingTransport = builder.Configuration[$"{MessagingOptions.SectionName}:Transport"] ?? "InMemory";
builder.Services.AddMassTransit(registration =>
{
    if (string.Equals(configuredMessagingTransport, "RabbitMQ", StringComparison.OrdinalIgnoreCase))
    {
        registration.UsingRabbitMq((context, cfg) =>
        {
            var options = context.GetRequiredService<IOptions<MessagingOptions>>().Value;
            cfg.Host(options.RabbitMqHost, options.RabbitMqVirtualHost, host =>
            {
                host.Username(options.RabbitMqUsername);
                host.Password(options.RabbitMqPassword);
            });
            cfg.ConfigureEndpoints(context);
        });
    }
    else
    {
        registration.UsingInMemory((context, cfg) => cfg.ConfigureEndpoints(context));
    }
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    var authority = builder.Configuration["Authentication:Authority"];
    var audience = builder.Configuration["Authentication:Audience"];
    if (!string.IsNullOrWhiteSpace(authority)) options.Authority = authority;
    if (!string.IsNullOrWhiteSpace(audience)) options.Audience = audience;
    options.MapInboundClaims = false;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        NameClaimType = "preferred_username",
        RoleClaimType = "roles"
    };
    options.RequireHttpsMetadata = builder.Configuration.GetValue("Authentication:RequireHttpsMetadata", true);
});

builder.Services.AddScoped<IAuditWriter, AuditWriter>();
builder.Services.AddScoped<IOutboxWriter, OutboxWriter>();
builder.Services.AddHostedService<OutboxDispatcher>();
builder.Services.AddScoped<IIdentitySyncService, IdentitySyncService>();
builder.Services.AddScoped<IAdminAccessService, AdminAccessService>();
builder.Services.AddScoped<IOrganizationAccessService, OrganizationAccessService>();
builder.Services.AddScoped<IProjectService, ProjectService>();
builder.Services.AddScoped<IEvaluationService, EvaluationService>();
builder.Services.AddScoped<IFundingService, FundingService>();
builder.Services.AddScoped<IPaymentService, PaymentService>();
builder.Services.AddScoped<ILedgerService, LedgerService>();
builder.Services.AddScoped<IExecutionService, ExecutionService>();
builder.Services.AddScoped<IExecutionControlService, ExecutionControlService>();
builder.Services.AddScoped<IAuthorizationHandler, OrganizationMemberHandler>();

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy(OrganizationPolicies.Member, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.AddRequirements(new OrganizationMemberRequirement());
    });
    options.AddPolicy(AdminAccessPolicies.SystemAdmin, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.SystemAdmin);
    });
    options.AddPolicy(EvaluationPolicies.Evaluator, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.Evaluator);
    });
    options.AddPolicy(EvaluationPolicies.DecisionMaker, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.ProductOwner);
    });
    options.AddPolicy(ProjectPolicies.Publisher, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.ProductOwner);
    });
    options.AddPolicy(PaymentPolicies.Finance, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.Finance);
    });
    options.AddPolicy(ExecutionPolicies.Planner, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.ProductOwner);
    });
    options.AddPolicy(ExecutionPolicies.Reviewer, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.Supervisor);
    });
    options.AddPolicy(ExecutionPolicies.ExpenseReviewer, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.Finance);
    });
    options.AddPolicy(ExecutionPolicies.RiskManager, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.Supervisor);
    });
    options.AddPolicy(ExecutionPolicies.FreezeManager, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.Supervisor);
    });
    options.AddPolicy(ExecutionPolicies.Disburser, policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireRole(SystemRoles.Finance);
    });
});

builder.Services.AddScoped<ISmsProvider, DisabledSmsProvider>();
builder.Services.AddScoped<IPaymentGateway, DisabledPaymentGateway>();

var otlpEndpoint = builder.Configuration["OpenTelemetry:OtlpEndpoint"];
builder.Services.AddOpenTelemetry()
    .ConfigureResource(resource => resource.AddService("moon-platform-api"))
    .WithTracing(tracing =>
    {
        tracing.AddAspNetCoreInstrumentation().AddHttpClientInstrumentation();
        if (Uri.TryCreate(otlpEndpoint, UriKind.Absolute, out var endpoint)) tracing.AddOtlpExporter(options => options.Endpoint = endpoint);
    })
    .WithMetrics(metrics =>
    {
        metrics.AddAspNetCoreInstrumentation().AddHttpClientInstrumentation().AddRuntimeInstrumentation();
        if (Uri.TryCreate(otlpEndpoint, UriKind.Absolute, out var endpoint)) metrics.AddOtlpExporter(options => options.Endpoint = endpoint);
    });

var app = builder.Build();
app.UseExceptionHandler();
app.UseMiddleware<CorrelationIdMiddleware>();
app.UseCors("frontend");
app.UseAuthentication();
app.UseAuthorization();
app.MapHealthChecks("/health/live");

app.MapGet("/health/ready", async Task<IResult> (MoonDbContext db, CancellationToken cancellationToken) =>
{
    var canConnect = await db.Database.CanConnectAsync(cancellationToken);
    return canConnect ? Results.Ok(new { status = "ready" }) : Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
});

app.MapGet("/api/v1/system", (HttpContext context) => Results.Ok(new
{
    service = "moon-platform-api",
    version = "0.13.0-phase3-execution-controls",
    correlationId = context.TraceIdentifier
}));

app.MapPost("/api/v1/session/sync", async Task<IResult> (ClaimsPrincipal principal, HttpContext context, IIdentitySyncService identitySync, CancellationToken cancellationToken) =>
{
    if (string.IsNullOrWhiteSpace(principal.FindFirstValue("sub"))) return Results.Unauthorized();
    var current = await identitySync.SyncAsync(principal, context.TraceIdentifier, context.Connection.RemoteIpAddress?.ToString(), cancellationToken);
    return current.IsActive ? Results.Ok(current) : Results.Forbid();
}).RequireAuthorization();

app.MapGet("/api/v1/me", async Task<IResult> (ClaimsPrincipal principal, IIdentitySyncService identitySync, CancellationToken cancellationToken) =>
{
    if (string.IsNullOrWhiteSpace(principal.FindFirstValue("sub"))) return Results.Unauthorized();
    var current = await identitySync.GetCurrentAsync(principal, cancellationToken);
    if (current is null)
    {
        return Results.NotFound(new { code = "identity_not_synced", message = "Call POST /api/v1/session/sync after authentication." });
    }
    return current.IsActive ? Results.Ok(current) : Results.Forbid();
}).RequireAuthorization();

app.MapGet("/api/v1/organizations/{organizationId:guid}/access", (Guid organizationId) => Results.Ok(new
{
    organizationId,
    access = "member"
})).RequireAuthorization(OrganizationPolicies.Member);

app.MapAdminAccessEndpoints();
app.MapProjectEndpoints();
app.MapEvaluationEndpoints();
app.MapFundingEndpoints();
app.MapPaymentEndpoints();
app.MapLedgerEndpoints();
app.MapExecutionEndpoints();
app.MapExecutionControlEndpoints();

app.Run();

public partial class Program { }
