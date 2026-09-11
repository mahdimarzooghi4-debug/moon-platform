using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Payments;
using Moon.Platform.Api.Modules.Projects;
using Npgsql;

namespace Moon.Platform.Api.Modules.Funding;

public interface IPaymentService
{
    Task<PaymentOperationResult> CreateIntentAsync(
        Guid commitmentId,
        string idempotencyKey,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<PaymentWebhookOperationResult> HandleWebhookAsync(
        string eventId,
        DateTimeOffset timestampUtc,
        string signature,
        string payloadVersion,
        string payload,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<PaymentOperationResult> VerifyAsync(
        Guid paymentId,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<PaymentOperationResult> ReconcileAsync(
        Guid paymentId,
        string idempotencyKey,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);
}

public sealed class PaymentService(
    MoonDbContext dbContext,
    IAuditWriter auditWriter,
    IPaymentGateway paymentGateway,
    IOptions<PaymentOptions> options) : IPaymentService
{
    private readonly PaymentOptions _options = options.Value;

    public async Task<PaymentOperationResult> CreateIntentAsync(
        Guid commitmentId,
        string idempotencyKey,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        idempotencyKey = idempotencyKey.Trim();
        if (string.IsNullOrWhiteSpace(idempotencyKey) || idempotencyKey.Length > 128)
        {
            return PaymentOperationResult.Failure(
                "payment_invalid_idempotency_key",
                "Idempotency-Key is required and must be at most 128 characters.");
        }

        if (!Uri.TryCreate(_options.CallbackUrl, UriKind.Absolute, out var callbackUri)
            || callbackUri.Scheme is not ("http" or "https"))
        {
            return PaymentOperationResult.Failure(
                "payment_callback_not_configured",
                "Payment callback URL is not configured with an absolute HTTP(S) URL.");
        }

        var existing = await dbContext.FundingPayments.AsNoTracking()
            .SingleOrDefaultAsync(
                x => x.InitiatedBySubject == actorSubject && x.IdempotencyKey == idempotencyKey,
                cancellationToken);
        if (existing is not null)
        {
            return ResolveIntentReplay(existing, commitmentId);
        }

        var actorIsActive = await dbContext.Users.AsNoTracking()
            .AnyAsync(x => x.ExternalSubject == actorSubject && x.IsActive, cancellationToken);
        if (!actorIsActive)
        {
            return PaymentOperationResult.Failure(
                "payment_actor_inactive",
                "Payment initiator must be an active synchronized user.");
        }

        var commitment = await dbContext.FundingCommitments.AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == commitmentId, cancellationToken);
        if (commitment is null)
        {
            return PaymentOperationResult.Failure("commitment_not_found", "Funding commitment was not found.");
        }

        if (!string.Equals(commitment.CommittedBySubject, actorSubject, StringComparison.Ordinal))
        {
            return PaymentOperationResult.Failure(
                "payment_commitment_access_denied",
                "Only the commitment owner can initiate its payment.");
        }

        if (!string.Equals(commitment.Status, CommitmentStatuses.AwaitingPayment, StringComparison.Ordinal))
        {
            return PaymentOperationResult.Failure(
                "payment_commitment_invalid_state",
                "Only commitments awaiting payment can create a payment intent.");
        }

        var payment = new FundingPayment
        {
            CommitmentId = commitment.Id,
            InitiatedBySubject = actorSubject,
            AmountMinor = commitment.AmountMinor,
            Currency = commitment.Currency,
            IdempotencyKey = idempotencyKey
        };

        dbContext.FundingPayments.Add(payment);
        try
        {
            await dbContext.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateException exception) when (
            exception.InnerException is PostgresException { SqlState: PostgresErrorCodes.UniqueViolation })
        {
            dbContext.ChangeTracker.Clear();
            var raced = await dbContext.FundingPayments.AsNoTracking()
                .SingleOrDefaultAsync(
                    x => x.InitiatedBySubject == actorSubject && x.IdempotencyKey == idempotencyKey,
                    cancellationToken);
            return raced is null
                ? PaymentOperationResult.Failure("payment_idempotency_conflict", "Idempotency key is already in use.")
                : ResolveIntentReplay(raced, commitmentId);
        }

        var intent = await paymentGateway.CreateIntentAsync(
            new PaymentIntentRequest(
                payment.AmountMinor,
                payment.Currency,
                callbackUri.ToString(),
                payment.IdempotencyKey),
            cancellationToken);

        if (!intent.Accepted
            || string.IsNullOrWhiteSpace(intent.Provider)
            || string.IsNullOrWhiteSpace(intent.ProviderReference))
        {
            payment.Status = PaymentStatuses.IntentFailed;
            payment.Provider = string.IsNullOrWhiteSpace(intent.Provider) ? "unknown" : intent.Provider.Trim();
            payment.IntentFailureCode = intent.ErrorCode ?? "payment_intent_failed";
            await dbContext.SaveChangesAsync(cancellationToken);

            await AppendPaymentAuditAsync(
                payment,
                actorSubject,
                "payment.intent.failed",
                correlationId,
                ipAddress,
                cancellationToken);

            return PaymentOperationResult.Failure(
                payment.IntentFailureCode,
                "Payment provider did not create an accepted payment intent.");
        }

        payment.Provider = intent.Provider.Trim();
        payment.ProviderReference = intent.ProviderReference.Trim();
        payment.RedirectUrl = intent.RedirectUrl;
        payment.Status = PaymentStatuses.AwaitingVerification;
        await dbContext.SaveChangesAsync(cancellationToken);

        await AppendPaymentAuditAsync(
            payment,
            actorSubject,
            "payment.intent.created",
            correlationId,
            ipAddress,
            cancellationToken);

        return PaymentOperationResult.Success(ToView(payment));
    }

    public async Task<PaymentWebhookOperationResult> HandleWebhookAsync(
        string eventId,
        DateTimeOffset timestampUtc,
        string signature,
        string payloadVersion,
        string payload,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        eventId = eventId.Trim();
        signature = signature.Trim();
        payloadVersion = payloadVersion.Trim();

        if (string.IsNullOrWhiteSpace(eventId) || eventId.Length > 128)
        {
            return PaymentWebhookOperationResult.Failure("payment_webhook_event_invalid", "Webhook event id is required.");
        }

        if (string.IsNullOrWhiteSpace(signature) || signature.Length > 2048)
        {
            return PaymentWebhookOperationResult.Failure("payment_webhook_signature_invalid", "Webhook signature is required.");
        }

        if (!string.Equals(payloadVersion, "1", StringComparison.Ordinal))
        {
            return PaymentWebhookOperationResult.Failure("payment_webhook_version_unsupported", "Webhook payload version is unsupported.");
        }

        var now = DateTimeOffset.UtcNow;
        var maxAge = TimeSpan.FromSeconds(Math.Max(30, _options.WebhookMaxAgeSeconds));
        var futureSkew = TimeSpan.FromSeconds(Math.Max(0, _options.WebhookFutureSkewSeconds));
        if (timestampUtc < now - maxAge || timestampUtc > now + futureSkew)
        {
            return PaymentWebhookOperationResult.Failure("payment_webhook_timestamp_invalid", "Webhook timestamp is outside the accepted replay window.");
        }

        var validated = await paymentGateway.ValidateWebhookAsync(
            new PaymentWebhookRequest(eventId, timestampUtc, signature, payloadVersion, payload),
            cancellationToken);
        if (!validated.Valid
            || string.IsNullOrWhiteSpace(validated.Provider)
            || string.IsNullOrWhiteSpace(validated.ProviderReference))
        {
            return PaymentWebhookOperationResult.Failure(
                validated.ErrorCode ?? "payment_webhook_signature_invalid",
                "Webhook could not be authenticated by the configured payment provider.");
        }

        var provider = validated.Provider.Trim();
        var providerReference = validated.ProviderReference.Trim();
        var payloadHash = Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(payload)));

        var existingReceipt = await dbContext.PaymentWebhookReceipts.AsNoTracking()
            .SingleOrDefaultAsync(x => x.Provider == provider && x.EventId == eventId, cancellationToken);
        if (existingReceipt is not null)
        {
            return ResolveWebhookReplay(existingReceipt, providerReference, payloadVersion, payloadHash, timestampUtc);
        }

        var payment = await dbContext.FundingPayments
            .SingleOrDefaultAsync(
                x => x.Provider == provider && x.ProviderReference == providerReference,
                cancellationToken);
        if (payment is null)
        {
            return PaymentWebhookOperationResult.Failure(
                "payment_webhook_payment_not_found",
                "Webhook provider reference does not match a known payment.");
        }

        if (payment.Status == PaymentStatuses.IntentFailed || payment.Status == PaymentStatuses.CreatingIntent)
        {
            return PaymentWebhookOperationResult.Failure(
                "payment_webhook_invalid_state",
                "Payment is not ready to accept provider callbacks.");
        }

        var receipt = new PaymentWebhookReceipt
        {
            PaymentId = payment.Id,
            Provider = provider,
            EventId = eventId,
            ProviderReference = providerReference,
            PayloadVersion = payloadVersion,
            PayloadSha256 = payloadHash,
            ProviderTimestampUtc = timestampUtc
        };

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        dbContext.PaymentWebhookReceipts.Add(receipt);
        payment.ProviderNotifiedAtUtc ??= now;

        try
        {
            await dbContext.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateException exception) when (
            exception.InnerException is PostgresException { SqlState: PostgresErrorCodes.UniqueViolation })
        {
            await transaction.RollbackAsync(cancellationToken);
            dbContext.ChangeTracker.Clear();
            var raced = await dbContext.PaymentWebhookReceipts.AsNoTracking()
                .SingleOrDefaultAsync(x => x.Provider == provider && x.EventId == eventId, cancellationToken);
            return raced is null
                ? PaymentWebhookOperationResult.Failure("payment_webhook_replay_conflict", "Webhook event id was already consumed.")
                : ResolveWebhookReplay(raced, providerReference, payloadVersion, payloadHash, timestampUtc);
        }

        await AppendPaymentAuditAsync(
            payment,
            $"payment-provider:{provider}",
            "payment.webhook.received",
            correlationId,
            ipAddress,
            cancellationToken,
            new { receipt.EventId, receipt.ProviderTimestampUtc, receipt.PayloadVersion, receipt.PayloadSha256 });

        await transaction.CommitAsync(cancellationToken);
        return PaymentWebhookOperationResult.Success(payment.Id);
    }

    public async Task<PaymentOperationResult> VerifyAsync(
        Guid paymentId,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
        {
            return PaymentOperationResult.Failure("payment_actor_inactive", "Verifier must be an active synchronized user.");
        }

        var snapshot = await dbContext.FundingPayments.AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == paymentId, cancellationToken);
        if (snapshot is null)
        {
            return PaymentOperationResult.Failure("payment_not_found", "Payment was not found.");
        }

        if (snapshot.Status is PaymentStatuses.Verified or PaymentStatuses.Reconciled)
        {
            return PaymentOperationResult.Success(ToView(snapshot), replayed: true);
        }

        if (snapshot.Status != PaymentStatuses.AwaitingVerification
            || snapshot.ProviderNotifiedAtUtc is null
            || string.IsNullOrWhiteSpace(snapshot.ProviderReference))
        {
            return PaymentOperationResult.Failure(
                "payment_verification_invalid_state",
                "Payment must first receive a validated provider webhook before verification.");
        }

        var verification = await paymentGateway.VerifyAsync(snapshot.ProviderReference, cancellationToken);
        if (!verification.Verified)
        {
            return PaymentOperationResult.Failure(
                verification.ErrorCode ?? "payment_verification_failed",
                "Payment provider did not verify the transaction.");
        }

        if (!string.Equals(verification.Provider, snapshot.Provider, StringComparison.Ordinal)
            || !string.Equals(verification.ProviderReference, snapshot.ProviderReference, StringComparison.Ordinal)
            || verification.AmountMinor != snapshot.AmountMinor
            || !string.Equals(verification.Currency?.Trim().ToUpperInvariant(), snapshot.Currency, StringComparison.Ordinal))
        {
            return PaymentOperationResult.Failure(
                "payment_verification_mismatch",
                "Verified provider data does not match the original payment amount, currency, provider, or reference.");
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var payment = await LockPaymentAsync(paymentId, cancellationToken);
        if (payment is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return PaymentOperationResult.Failure("payment_not_found", "Payment was not found.");
        }

        if (payment.Status is PaymentStatuses.Verified or PaymentStatuses.Reconciled)
        {
            await transaction.RollbackAsync(cancellationToken);
            return PaymentOperationResult.Success(ToView(payment), replayed: true);
        }

        if (payment.Status != PaymentStatuses.AwaitingVerification || payment.ProviderNotifiedAtUtc is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return PaymentOperationResult.Failure("payment_verification_invalid_state", "Payment is no longer eligible for verification.");
        }

        payment.Status = PaymentStatuses.Verified;
        payment.VerifiedAtUtc = DateTimeOffset.UtcNow;
        await dbContext.SaveChangesAsync(cancellationToken);

        await AppendPaymentAuditAsync(
            payment,
            actorSubject,
            "payment.verified",
            correlationId,
            ipAddress,
            cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return PaymentOperationResult.Success(ToView(payment));
    }

    public async Task<PaymentOperationResult> ReconcileAsync(
        Guid paymentId,
        string idempotencyKey,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        idempotencyKey = idempotencyKey.Trim();
        if (string.IsNullOrWhiteSpace(idempotencyKey) || idempotencyKey.Length > 128)
        {
            return PaymentOperationResult.Failure(
                "payment_invalid_idempotency_key",
                "Idempotency-Key is required and must be at most 128 characters.");
        }

        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
        {
            return PaymentOperationResult.Failure("payment_actor_inactive", "Reconciler must be an active synchronized user.");
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var payment = await LockPaymentAsync(paymentId, cancellationToken);
        if (payment is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return PaymentOperationResult.Failure("payment_not_found", "Payment was not found.");
        }

        if (payment.Status == PaymentStatuses.Reconciled)
        {
            await transaction.RollbackAsync(cancellationToken);
            return string.Equals(payment.ReconciliationIdempotencyKey, idempotencyKey, StringComparison.Ordinal)
                ? PaymentOperationResult.Success(ToView(payment), replayed: true)
                : PaymentOperationResult.Failure(
                    "payment_reconciliation_already_completed",
                    "Payment has already been reconciled under a different idempotency key.");
        }

        if (payment.Status != PaymentStatuses.Verified || payment.VerifiedAtUtc is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return PaymentOperationResult.Failure(
                "payment_reconciliation_invalid_state",
                "Only server-verified payments can be reconciled.");
        }

        var commitment = await dbContext.FundingCommitments
            .FromSqlInterpolated($"SELECT * FROM moon.funding_commitments WHERE \"Id\" = {payment.CommitmentId} FOR UPDATE")
            .SingleAsync(cancellationToken);
        if (commitment.Status == CommitmentStatuses.Reconciled)
        {
            await transaction.RollbackAsync(cancellationToken);
            return PaymentOperationResult.Failure(
                "payment_commitment_already_reconciled",
                "Funding commitment has already been reconciled by another payment.");
        }

        if (commitment.Status != CommitmentStatuses.AwaitingPayment)
        {
            await transaction.RollbackAsync(cancellationToken);
            return PaymentOperationResult.Failure(
                "payment_commitment_invalid_state",
                "Funding commitment is not awaiting payment reconciliation.");
        }

        var reconciledAt = DateTimeOffset.UtcNow;
        payment.Status = PaymentStatuses.Reconciled;
        payment.ReconciledAtUtc = reconciledAt;
        payment.ReconciliationIdempotencyKey = idempotencyKey;
        payment.ReconciledBySubject = actorSubject;
        commitment.Status = CommitmentStatuses.Reconciled;
        commitment.ReconciledAtUtc = reconciledAt;
        await dbContext.SaveChangesAsync(cancellationToken);

        await AppendPaymentAuditAsync(
            payment,
            actorSubject,
            "payment.reconciled",
            correlationId,
            ipAddress,
            cancellationToken,
            new { commitment.Status, commitment.ReconciledAtUtc });

        await transaction.CommitAsync(cancellationToken);
        return PaymentOperationResult.Success(ToView(payment));
    }

    private async Task<FundingPayment?> LockPaymentAsync(Guid paymentId, CancellationToken cancellationToken) =>
        await dbContext.FundingPayments
            .FromSqlInterpolated($"SELECT * FROM moon.funding_payments WHERE \"Id\" = {paymentId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);

    private async Task<bool> IsActiveUserAsync(string subject, CancellationToken cancellationToken) =>
        await dbContext.Users.AsNoTracking()
            .AnyAsync(x => x.ExternalSubject == subject && x.IsActive, cancellationToken);

    private async Task AppendPaymentAuditAsync(
        FundingPayment payment,
        string actorSubject,
        string action,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken,
        object? extra = null)
    {
        var scope = await dbContext.FundingCommitments.AsNoTracking()
            .Where(x => x.Id == payment.CommitmentId)
            .Join(
                dbContext.Projects.AsNoTracking(),
                commitment => commitment.ProjectId,
                project => project.Id,
                (commitment, project) => new { commitment.ProjectId, project.OrganizationId })
            .SingleAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            action,
            "funding_payment",
            payment.Id.ToString(),
            correlationId,
            scope.OrganizationId.ToString(),
            scope.ProjectId.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                PaymentId = payment.Id,
                payment.CommitmentId,
                payment.AmountMinor,
                payment.Currency,
                payment.Status,
                payment.Provider,
                payment.ProviderReference,
                payment.ProviderNotifiedAtUtc,
                payment.VerifiedAtUtc,
                payment.ReconciledAtUtc,
                Extra = extra
            }),
            IpAddress: ipAddress), cancellationToken);
    }

    private static PaymentOperationResult ResolveIntentReplay(FundingPayment existing, Guid commitmentId)
    {
        if (existing.CommitmentId != commitmentId)
        {
            return PaymentOperationResult.Failure(
                "payment_idempotency_conflict",
                "The same Idempotency-Key cannot be reused for another commitment.");
        }

        return existing.Status switch
        {
            PaymentStatuses.IntentFailed => PaymentOperationResult.Failure(
                existing.IntentFailureCode ?? "payment_intent_failed",
                "The original payment intent request failed and its idempotency result is preserved."),
            PaymentStatuses.CreatingIntent => PaymentOperationResult.Failure(
                "payment_intent_in_progress",
                "The original payment intent request is still unresolved; no second provider intent was created."),
            _ => PaymentOperationResult.Success(ToView(existing), replayed: true)
        };
    }

    private static PaymentWebhookOperationResult ResolveWebhookReplay(
        PaymentWebhookReceipt existing,
        string providerReference,
        string payloadVersion,
        string payloadHash,
        DateTimeOffset timestampUtc)
    {
        if (existing.ProviderReference == providerReference
            && existing.PayloadVersion == payloadVersion
            && existing.PayloadSha256 == payloadHash
            && existing.ProviderTimestampUtc == timestampUtc)
        {
            return PaymentWebhookOperationResult.Success(existing.PaymentId, replayed: true);
        }

        return PaymentWebhookOperationResult.Failure(
            "payment_webhook_replay_conflict",
            "Webhook event id was replayed with different signed content.");
    }

    private static FundingPaymentView ToView(FundingPayment payment) => new(
        payment.Id,
        payment.CommitmentId,
        payment.InitiatedBySubject,
        payment.AmountMinor,
        payment.Currency,
        payment.Status,
        payment.Provider,
        payment.ProviderReference,
        payment.RedirectUrl,
        payment.CreatedAtUtc,
        payment.ProviderNotifiedAtUtc,
        payment.VerifiedAtUtc,
        payment.ReconciledAtUtc);
}
