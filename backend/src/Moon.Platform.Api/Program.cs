using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Payments;
using Moon.Platform.Api.Integrations.Sms;
using OpenTelemetry.Metrics;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails();
builder.Services.AddHealthChecks();

builder.Services.AddDbContext<MoonDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Postgres")));

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        var authority = builder.Configuration["Authentication:Authority"];
        var audience = builder.Configuration["Authentication:Audience"];

        if (!string.IsNullOrWhiteSpace(authority))
        {
            options.Authority = authority;
        }

        if (!string.IsNullOrWhiteSpace(audience))
        {
            options.Audience = audience;
        }

        options.RequireHttpsMetadata = builder.Configuration.GetValue("Authentication:RequireHttpsMetadata", true);
    });

builder.Services.AddAuthorization();

builder.Services.AddScoped<ISmsProvider, DisabledSmsProvider>();
builder.Services.AddScoped<IPaymentGateway, DisabledPaymentGateway>();

var otlpEndpoint = builder.Configuration["OpenTelemetry:OtlpEndpoint"];

builder.Services
    .AddOpenTelemetry()
    .ConfigureResource(resource => resource.AddService("moon-platform-api"))
    .WithTracing(tracing =>
    {
        tracing
            .AddAspNetCoreInstrumentation()
            .AddHttpClientInstrumentation();

        if (Uri.TryCreate(otlpEndpoint, UriKind.Absolute, out var endpoint))
        {
            tracing.AddOtlpExporter(options => options.Endpoint = endpoint);
        }
    })
    .WithMetrics(metrics =>
    {
        metrics
            .AddAspNetCoreInstrumentation()
            .AddHttpClientInstrumentation()
            .AddRuntimeInstrumentation();

        if (Uri.TryCreate(otlpEndpoint, UriKind.Absolute, out var endpoint))
        {
            metrics.AddOtlpExporter(options => options.Endpoint = endpoint);
        }
    });

var app = builder.Build();

app.UseExceptionHandler();
app.UseMiddleware<CorrelationIdMiddleware>();
app.UseAuthentication();
app.UseAuthorization();

app.MapHealthChecks("/health/live");

app.MapGet("/health/ready", async Task<IResult> (MoonDbContext db, CancellationToken cancellationToken) =>
{
    var canConnect = await db.Database.CanConnectAsync(cancellationToken);
    return canConnect
        ? Results.Ok(new { status = "ready" })
        : Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
});

app.MapGet("/api/v1/system", (HttpContext context) => Results.Ok(new
{
    service = "moon-platform-api",
    version = "0.1.0-phase0",
    correlationId = context.TraceIdentifier
}));

app.MapGet("/api/v1/me", (ClaimsPrincipal user) => Results.Ok(new
{
    subject = user.FindFirstValue("sub"),
    name = user.Identity?.Name,
    authenticated = user.Identity?.IsAuthenticated ?? false
})).RequireAuthorization();

app.Run();

public partial class Program { }
