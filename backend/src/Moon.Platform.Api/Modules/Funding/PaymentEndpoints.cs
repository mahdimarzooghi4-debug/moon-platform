using System.Globalization;
using System.Security.Claims;
using System.Text;

namespace Moon.Platform.Api.Modules.Funding;

public static class PaymentEndpoints
{
    private const int MaxWebhookPayloadBytes = 256 * 1024;

    public static IEndpointRouteBuilder MapPaymentEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/api/v1/commitments/{commitmentId:guid}/payment-intents", async Task<IResult> (
            Guid commitmentId,
            ClaimsPrincipal principal,
            HttpContext context,
            IPaymentService paymentService,
            CancellationToken cancellationToken) =>
        {
            if (!TryGetIdempotencyKey(context, out var idempotencyKey, out var error))
            {
                return error!;
            }

            var result = await paymentService.CreateIntentAsync(
                commitmentId,
                idempotencyKey!,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context, createdWhenNew: true);
        }).RequireAuthorization();

        endpoints.MapPost("/api/v1/payments/webhook", async Task<IResult> (
            HttpContext context,
            IPaymentService paymentService,
            CancellationToken cancellationToken) =>
        {
            if (context.Request.ContentLength is > MaxWebhookPayloadBytes)
            {
                return Error(
                    context,
                    StatusCodes.Status413PayloadTooLarge,
                    "payment_webhook_payload_too_large",
                    "Webhook payload exceeds the accepted size.");
            }

            if (!TryGetRequiredHeader(context, "X-Payment-Event-Id", out var eventId)
                || !TryGetRequiredHeader(context, "X-Payment-Timestamp", out var timestampValue)
                || !TryGetRequiredHeader(context, "X-Payment-Signature", out var signature)
                || !TryGetRequiredHeader(context, "X-Payment-Payload-Version", out var payloadVersion))
            {
                return Error(
                    context,
                    StatusCodes.Status400BadRequest,
                    "payment_webhook_headers_missing",
                    "Webhook event id, timestamp, signature, and payload version headers are required.");
            }

            if (!TryParseTimestamp(timestampValue!, out var timestampUtc))
            {
                return Error(
                    context,
                    StatusCodes.Status400BadRequest,
                    "payment_webhook_timestamp_invalid",
                    "Webhook timestamp must be ISO-8601 or Unix epoch seconds.");
            }

            using var reader = new StreamReader(
                context.Request.Body,
                Encoding.UTF8,
                detectEncodingFromByteOrderMarks: false,
                leaveOpen: true);
            var payload = await reader.ReadToEndAsync(cancellationToken);
            if (Encoding.UTF8.GetByteCount(payload) > MaxWebhookPayloadBytes)
            {
                return Error(
                    context,
                    StatusCodes.Status413PayloadTooLarge,
                    "payment_webhook_payload_too_large",
                    "Webhook payload exceeds the accepted size.");
            }

            var result = await paymentService.HandleWebhookAsync(
                eventId!,
                timestampUtc,
                signature!,
                payloadVersion!,
                payload,
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            if (result.Succeeded)
            {
                return result.Replayed
                    ? Results.Ok(new { payment_id = result.PaymentId, replayed = true })
                    : Results.Accepted(value: new { payment_id = result.PaymentId, replayed = false });
            }

            return result.ErrorCode switch
            {
                "payment_not_configured" => Error(context, StatusCodes.Status503ServiceUnavailable, result.ErrorCode!, result.ErrorMessage!),
                "payment_webhook_payment_not_found" => Error(context, StatusCodes.Status404NotFound, result.ErrorCode!, result.ErrorMessage!),
                "payment_webhook_replay_conflict" => Error(context, StatusCodes.Status409Conflict, result.ErrorCode!, result.ErrorMessage!),
                "payment_webhook_signature_invalid" => Error(context, StatusCodes.Status401Unauthorized, result.ErrorCode!, result.ErrorMessage!),
                _ => Error(context, StatusCodes.Status400BadRequest, result.ErrorCode!, result.ErrorMessage!)
            };
        }).AllowAnonymous();

        endpoints.MapPost("/api/v1/payments/{paymentId:guid}/verify", async Task<IResult> (
            Guid paymentId,
            ClaimsPrincipal principal,
            HttpContext context,
            IPaymentService paymentService,
            CancellationToken cancellationToken) =>
        {
            var result = await paymentService.VerifyAsync(
                paymentId,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        }).RequireAuthorization(PaymentPolicies.Finance);

        endpoints.MapPost("/api/v1/payments/{paymentId:guid}/reconcile", async Task<IResult> (
            Guid paymentId,
            ClaimsPrincipal principal,
            HttpContext context,
            IPaymentService paymentService,
            CancellationToken cancellationToken) =>
        {
            if (!TryGetIdempotencyKey(context, out var idempotencyKey, out var error))
            {
                return error!;
            }

            var result = await paymentService.ReconcileAsync(
                paymentId,
                idempotencyKey!,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        }).RequireAuthorization(PaymentPolicies.Finance);

        return endpoints;
    }

    private static IResult ToHttpResult(PaymentOperationResult result, HttpContext context, bool createdWhenNew = false)
    {
        if (result.Succeeded)
        {
            if (createdWhenNew && !result.Replayed)
            {
                return Results.Json(
                    new { payment = result.Payment, replayed = false },
                    statusCode: StatusCodes.Status201Created);
            }

            return Results.Ok(new { payment = result.Payment, replayed = result.Replayed });
        }

        var status = result.ErrorCode switch
        {
            "payment_not_found" or "commitment_not_found" => StatusCodes.Status404NotFound,
            "payment_actor_inactive" or "payment_commitment_access_denied" => StatusCodes.Status403Forbidden,
            "payment_not_configured" or "payment_callback_not_configured" => StatusCodes.Status503ServiceUnavailable,
            "payment_idempotency_conflict"
                or "payment_reconciliation_already_completed"
                or "payment_commitment_already_reconciled"
                or "payment_commitment_invalid_state"
                or "payment_reconciliation_invalid_state"
                or "payment_verification_invalid_state"
                or "payment_intent_in_progress" => StatusCodes.Status409Conflict,
            "payment_verification_mismatch" => StatusCodes.Status422UnprocessableEntity,
            _ => StatusCodes.Status400BadRequest
        };

        return Error(context, status, result.ErrorCode!, result.ErrorMessage!);
    }

    private static bool TryGetIdempotencyKey(HttpContext context, out string? key, out IResult? error)
    {
        if (!context.Request.Headers.TryGetValue("Idempotency-Key", out var values)
            || string.IsNullOrWhiteSpace(values.ToString()))
        {
            key = null;
            error = Error(
                context,
                StatusCodes.Status400BadRequest,
                "payment_invalid_idempotency_key",
                "Idempotency-Key header is required.");
            return false;
        }

        key = values.ToString();
        error = null;
        return true;
    }

    private static bool TryGetRequiredHeader(HttpContext context, string name, out string? value)
    {
        if (context.Request.Headers.TryGetValue(name, out var values)
            && !string.IsNullOrWhiteSpace(values.ToString()))
        {
            value = values.ToString();
            return true;
        }

        value = null;
        return false;
    }

    private static bool TryParseTimestamp(string value, out DateTimeOffset timestamp)
    {
        if (DateTimeOffset.TryParse(
                value,
                CultureInfo.InvariantCulture,
                DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal,
                out timestamp))
        {
            return true;
        }

        if (long.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var epochSeconds))
        {
            try
            {
                timestamp = DateTimeOffset.FromUnixTimeSeconds(epochSeconds);
                return true;
            }
            catch (ArgumentOutOfRangeException)
            {
            }
        }

        timestamp = default;
        return false;
    }

    private static IResult Error(HttpContext context, int status, string code, string message) =>
        Results.Json(
            new { code, message, correlation_id = context.TraceIdentifier },
            statusCode: status);

    private static string RequireActor(ClaimsPrincipal principal)
    {
        var actor = principal.FindFirstValue("sub");
        if (string.IsNullOrWhiteSpace(actor))
        {
            throw new InvalidOperationException("Authenticated identity is missing the required 'sub' claim.");
        }

        return actor;
    }
}
