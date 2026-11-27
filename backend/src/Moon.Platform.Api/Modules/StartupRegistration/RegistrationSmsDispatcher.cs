using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Sms;

namespace Moon.Platform.Api.Modules.StartupRegistration;

// Separate from RabbitMQ. An interrupted or ambiguous provider send is not
// automatically repeated because the existing adapter has no idempotency key.
public sealed class RegistrationSmsDispatcher(
    IServiceScopeFactory scopes, IConfiguration configuration, ILogger<RegistrationSmsDispatcher> logger) : BackgroundService
{
    private readonly string workerId = $"registration-sms:{Guid.NewGuid():N}";

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                if (!await DispatchOneAsync(stoppingToken))
                    await Task.Delay(TimeSpan.FromSeconds(2), stoppingToken);
            }
            catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested) { break; }
            catch (Exception)
            {
                logger.LogError("Registration SMS dispatcher encountered an internal failure.");
                await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
            }
        }
    }

    public async Task<bool> DispatchOneAsync(CancellationToken ct)
    {
        if (!configuration.GetValue<bool>("ExternalServices:Sms:RegistrationNotificationsEnabled")
            || !string.Equals(configuration["ExternalServices:Sms:Provider"], "SmsIr", StringComparison.OrdinalIgnoreCase)
            || string.IsNullOrWhiteSpace(configuration["ExternalServices:Sms:ApiKey"])
            || !ValidTemplate(RegistrationSmsNotice.Submitted)
            || !ValidTemplate(RegistrationSmsNotice.Approved))
            return false;

        await using var scope = scopes.CreateAsyncScope();
        var db = scope.ServiceProvider.GetRequiredService<MoonDbContext>();
        var sms = scope.ServiceProvider.GetRequiredService<ISmsProvider>();
        var now = DateTimeOffset.UtcNow;
        OutboxMessage? message;
        string? mobile = null, code = null, template = null;

        await using (var tx = await db.Database.BeginTransactionAsync(ct))
        {
            message = (await db.OutboxMessages.FromSqlInterpolated($"""
                SELECT * FROM moon.outbox_messages
                WHERE "EventType" IN ({RegistrationSmsNotice.Submitted}, {RegistrationSmsNotice.Approved})
                  AND "PublishedAtUtc" IS NULL AND "DeadLetteredAtUtc" IS NULL
                  AND "NextAttemptAtUtc" <= {now}
                  AND ("LockedUntilUtc" IS NULL OR "LockedUntilUtc" <= {now})
                ORDER BY "OccurredAtUtc", "Id"
                LIMIT 1 FOR UPDATE SKIP LOCKED
                """).ToListAsync(ct)).SingleOrDefault();
            if (message is null) return false;
            if (message.PublishAttempts > 0)
            {
                MarkTerminal(message, "sms_delivery_unknown");
                await db.SaveChangesAsync(ct);
                await tx.CommitAsync(ct);
                logger.LogWarning("Registration SMS {MessageId} requires operator reconciliation.", message.Id);
                return true;
            }
            if (message.AggregateType == "startup_application" && Guid.TryParse(message.AggregateId, out var applicationId))
            {
                var application = await db.StartupApplications.AsNoTracking()
                    .Where(x => x.Id == applicationId)
                    .Select(x => new { x.Mobile, x.TrackingCode, x.Status })
                    .SingleOrDefaultAsync(ct);
                if (application is not null
                    && (message.EventType != RegistrationSmsNotice.Approved || application.Status == "approved")
                    && StartupMobileVerification.IsMobile(application.Mobile)
                    && StartupTrackingCode.Normalize(application.TrackingCode) == application.TrackingCode)
                {
                    mobile = application.Mobile;
                    code = application.TrackingCode;
                    template = configuration[RegistrationSmsNotice.TemplateKey(message.EventType)!];
                }
            }
            if (message.AggregateType == "company_application" && Guid.TryParse(message.AggregateId, out var companyId))
            {
                var company = await db.CompanyApplications.AsNoTracking()
                    .Where(x => x.Id == companyId)
                    .Select(x => new { x.Mobile, x.TrackingCode, x.Status })
                    .SingleOrDefaultAsync(ct);
                if (company is not null
                    && (message.EventType == RegistrationSmsNotice.Submitted || company.Status == "approved")
                    && StartupMobileVerification.IsMobile(company.Mobile)
                    && StartupTrackingCode.Normalize(company.TrackingCode) == company.TrackingCode)
                {
                    mobile = company.Mobile;
                    code = company.TrackingCode;
                    template = configuration[RegistrationSmsNotice.TemplateKey(message.EventType)!];
                }
            }
            if (mobile is null || code is null || template is null)
            {
                MarkTerminal(message, "sms_source_invalid");
                await db.SaveChangesAsync(ct);
                await tx.CommitAsync(ct);
                return true;
            }
            message.PublishAttempts = 1;
            message.LockedBy = workerId;
            message.LockedUntilUtc = now.AddMinutes(2);
            await db.SaveChangesAsync(ct);
            await tx.CommitAsync(ct);
        }

        SmsSendResult result;
        try
        {
            result = await sms.SendOtpAsync(mobile!, template!, new Dictionary<string, string> { ["CODE"] = code! }, ct);
        }
        catch (OperationCanceledException) when (ct.IsCancellationRequested) { throw; }
        catch (Exception)
        {
            result = new SmsSendResult(false, "sms.ir", null, "sms_delivery_unknown");
        }

        db.ChangeTracker.Clear();
        await using var finish = await db.Database.BeginTransactionAsync(ct);
        var current = (await db.OutboxMessages.FromSqlInterpolated($"""
            SELECT * FROM moon.outbox_messages WHERE "Id" = {message!.Id} FOR UPDATE
            """).ToListAsync(ct)).SingleOrDefault();
        if (current is null || current.LockedBy != workerId || current.DeadLetteredAtUtc is not null
            || current.PublishedAtUtc is not null) return true;
        if (result.Accepted)
        {
            current.PublishedAtUtc = DateTimeOffset.UtcNow;
            current.LastError = null;
            current.LockedBy = null;
            current.LockedUntilUtc = null;
        }
        else if (result.ErrorCode == "sms_not_configured")
        {
            current.PublishAttempts = 0;
            current.LockedBy = null;
            current.LockedUntilUtc = null;
            current.LastError = "sms_not_configured";
            current.NextAttemptAtUtc = DateTimeOffset.UtcNow.AddMinutes(1);
        }
        else
        {
            MarkTerminal(current, "sms_delivery_unknown");
            logger.LogWarning("Registration SMS {MessageId} requires operator reconciliation.", current.Id);
        }
        await db.SaveChangesAsync(ct);
        await finish.CommitAsync(ct);
        return true;
    }

    private bool ValidTemplate(string eventType) =>
        int.TryParse(configuration[RegistrationSmsNotice.TemplateKey(eventType)!], out var id) && id > 0;

    private static void MarkTerminal(OutboxMessage message, string reason)
    {
        message.DeadLetteredAtUtc = DateTimeOffset.UtcNow;
        message.LockedBy = null;
        message.LockedUntilUtc = null;
        message.LastError = reason;
    }
}
