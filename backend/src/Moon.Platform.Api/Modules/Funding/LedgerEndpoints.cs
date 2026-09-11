using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Funding;

public sealed record ReverseLedgerJournalRequest(string Reason);

public static class LedgerEndpoints
{
    public static IEndpointRouteBuilder MapLedgerEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/api/v1/payments/{paymentId:guid}/ledger", async Task<IResult> (
            Guid paymentId,
            ClaimsPrincipal principal,
            HttpContext context,
            ILedgerService ledgerService,
            CancellationToken cancellationToken) =>
        {
            if (!TryGetIdempotencyKey(context, out var idempotencyKey, out var error))
            {
                return error!;
            }

            var result = await ledgerService.PostReconciledPaymentAsync(
                paymentId,
                idempotencyKey!,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        }).RequireAuthorization(PaymentPolicies.Finance);

        endpoints.MapPost("/api/v1/ledger/journals/{journalId:guid}/reversal", async Task<IResult> (
            Guid journalId,
            ReverseLedgerJournalRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            ILedgerService ledgerService,
            CancellationToken cancellationToken) =>
        {
            if (!TryGetIdempotencyKey(context, out var idempotencyKey, out var error))
            {
                return error!;
            }

            var result = await ledgerService.ReverseJournalAsync(
                journalId,
                idempotencyKey!,
                request.Reason,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        }).RequireAuthorization(PaymentPolicies.Finance);

        endpoints.MapGet("/api/v1/projects/{projectId:guid}/allocable-balance", async Task<IResult> (
            Guid projectId,
            string currency,
            HttpContext context,
            ILedgerService ledgerService,
            CancellationToken cancellationToken) =>
        {
            var result = await ledgerService.GetProjectAllocableBalanceAsync(projectId, currency, cancellationToken);
            if (result.Succeeded)
            {
                return Results.Ok(result.Balance);
            }

            var body = new
            {
                code = result.ErrorCode,
                message = result.ErrorMessage,
                correlation_id = context.TraceIdentifier
            };

            return result.ErrorCode == "project_not_found"
                ? Results.NotFound(body)
                : Results.BadRequest(body);
        }).RequireAuthorization(PaymentPolicies.Finance);

        return endpoints;
    }

    private static bool TryGetIdempotencyKey(
        HttpContext context,
        out string? idempotencyKey,
        out IResult? error)
    {
        idempotencyKey = null;
        error = null;
        if (context.Request.Headers.TryGetValue("Idempotency-Key", out var values)
            && !string.IsNullOrWhiteSpace(values.ToString()))
        {
            idempotencyKey = values.ToString();
            return true;
        }

        error = Results.BadRequest(new
        {
            code = "ledger_invalid_idempotency_key",
            message = "Idempotency-Key header is required.",
            correlation_id = context.TraceIdentifier
        });
        return false;
    }

    private static IResult ToHttpResult(LedgerOperationResult result, HttpContext context)
    {
        if (result.Succeeded)
        {
            return result.Replayed
                ? Results.Ok(new { journal = result.Journal, replayed = true })
                : Results.Json(
                    new { journal = result.Journal, replayed = false },
                    statusCode: StatusCodes.Status201Created);
        }

        var body = new
        {
            code = result.ErrorCode,
            message = result.ErrorMessage,
            correlation_id = context.TraceIdentifier
        };

        return result.ErrorCode switch
        {
            "payment_not_found" or "ledger_journal_not_found" => Results.NotFound(body),
            "ledger_actor_inactive" => Results.Json(body, statusCode: StatusCodes.Status403Forbidden),
            "ledger_payment_not_reconciled"
                or "ledger_payment_already_posted"
                or "ledger_journal_already_reversed"
                or "ledger_reversal_of_reversal_not_allowed"
                or "ledger_idempotency_conflict"
                or "ledger_posting_conflict"
                or "ledger_reversal_conflict" => Results.Conflict(body),
            _ => Results.BadRequest(body)
        };
    }

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
