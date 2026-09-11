using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Execution;

public sealed record SubmitExecutionExpenseRequest(
    long AmountMinor,
    string Currency,
    string Category,
    string Description,
    string? EvidenceReference);

public sealed record ReviewExecutionExpenseRequest(string Decision, string? Note);
public sealed record ReportExecutionRiskRequest(string Severity, string Title, string Description);
public sealed record TransitionExecutionRiskRequest(string Action, string Note);
public sealed record ExecutionFreezeRequest(string Reason);
public sealed record ReleaseExecutionDisbursementRequest(long AmountMinor, string Currency);

public static class ExecutionControlEndpoints
{
    public static IEndpointRouteBuilder MapExecutionControlEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/expenses", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            SubmitExecutionExpenseRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionControlService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.SubmitExpenseAsync(
                projectId,
                stageId,
                request.AmountMinor,
                request.Currency,
                request.Category,
                request.Description,
                request.EvidenceReference,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization();

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/expenses/{expenseId:guid}/review", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            Guid expenseId,
            ReviewExecutionExpenseRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionControlService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.ReviewExpenseAsync(
                projectId,
                stageId,
                expenseId,
                request.Decision,
                request.Note,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status200OK);
        }).RequireAuthorization(ExecutionPolicies.ExpenseReviewer);

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/risks", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            ReportExecutionRiskRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionControlService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.ReportRiskAsync(
                projectId,
                stageId,
                request.Severity,
                request.Title,
                request.Description,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization();

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/risks/{riskId:guid}/transition", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            Guid riskId,
            TransitionExecutionRiskRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionControlService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.TransitionRiskAsync(
                projectId,
                stageId,
                riskId,
                request.Action,
                request.Note,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status200OK);
        }).RequireAuthorization(ExecutionPolicies.RiskManager);

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/freeze", async Task<IResult> (
            Guid projectId,
            ExecutionFreezeRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionControlService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.FreezeAsync(
                projectId,
                request.Reason,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization(ExecutionPolicies.FreezeManager);

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/unfreeze", async Task<IResult> (
            Guid projectId,
            ExecutionFreezeRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionControlService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.UnfreezeAsync(
                projectId,
                request.Reason,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization(ExecutionPolicies.FreezeManager);

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/disbursements", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            ReleaseExecutionDisbursementRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionControlService service,
            CancellationToken cancellationToken) =>
        {
            if (!TryGetIdempotencyKey(context, out var idempotencyKey, out var error))
            {
                return error!;
            }

            var result = await service.ReleaseDisbursementAsync(
                projectId,
                stageId,
                request.AmountMinor,
                request.Currency,
                idempotencyKey!,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization(ExecutionPolicies.Disburser);

        return endpoints;
    }

    private static IResult ToHttpResult(ExecutionControlOperationResult result, HttpContext context, int successStatus)
    {
        if (result.Succeeded)
        {
            return result.Replayed
                ? Results.Ok(new { state = result.State, replayed = true })
                : Results.Json(new { state = result.State, replayed = false }, statusCode: successStatus);
        }

        var body = new
        {
            code = result.ErrorCode,
            message = result.ErrorMessage,
            correlation_id = context.TraceIdentifier
        };

        return result.ErrorCode switch
        {
            "project_not_found"
                or "execution_stage_not_found"
                or "execution_expense_not_found"
                or "execution_risk_not_found" => Results.NotFound(body),
            "execution_actor_inactive" or "execution_member_forbidden"
                => Results.Json(body, statusCode: StatusCodes.Status403Forbidden),
            "execution_frozen"
                or "execution_expense_stage_not_active"
                or "execution_expense_already_reviewed"
                or "execution_risk_stage_closed"
                or "execution_risk_transition_conflict"
                or "execution_not_initialized"
                or "execution_already_frozen"
                or "execution_not_frozen"
                or "execution_disbursement_stage_not_active"
                or "execution_disbursement_not_configured"
                or "execution_disbursement_stage_limit_exceeded"
                or "execution_disbursement_insufficient_balance"
                or "execution_disbursement_idempotency_conflict"
                or "execution_disbursement_conflict" => Results.Conflict(body),
            _ => Results.BadRequest(body)
        };
    }

    private static bool TryGetIdempotencyKey(HttpContext context, out string? idempotencyKey, out IResult? error)
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
            code = "execution_disbursement_idempotency_invalid",
            message = "Idempotency-Key header is required.",
            correlation_id = context.TraceIdentifier
        });
        return false;
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
