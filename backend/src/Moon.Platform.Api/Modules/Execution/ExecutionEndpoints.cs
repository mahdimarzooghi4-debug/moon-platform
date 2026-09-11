using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Execution;

public sealed record InitializeExecutionRequest(IReadOnlyList<ExecutionStageRequest> Stages);
public sealed record ExecutionStageRequest(
    string Title,
    string Description,
    long? DisbursementLimitMinor = null,
    string? DisbursementCurrency = null);
public sealed record SubmitProgressReportRequest(string Summary);
public sealed record ReviewProgressReportRequest(string Decision, string? Note);

public static class ExecutionEndpoints
{
    public static IEndpointRouteBuilder MapExecutionEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution", async Task<IResult> (
            Guid projectId,
            InitializeExecutionRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionService executionService,
            CancellationToken cancellationToken) =>
        {
            var stages = request.Stages?
                .Select(x => new ExecutionStageDefinition(
                    x.Title,
                    x.Description,
                    x.DisbursementLimitMinor,
                    x.DisbursementCurrency))
                .ToArray()
                ?? [];

            var result = await executionService.InitializeAsync(
                projectId,
                stages,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization(ExecutionPolicies.Planner);

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/reports", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            SubmitProgressReportRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionService executionService,
            CancellationToken cancellationToken) =>
        {
            var result = await executionService.SubmitReportAsync(
                projectId,
                stageId,
                request.Summary,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization();

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/reports/{reportId:guid}/review", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            Guid reportId,
            ReviewProgressReportRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionService executionService,
            CancellationToken cancellationToken) =>
        {
            var result = await executionService.ReviewReportAsync(
                projectId,
                stageId,
                reportId,
                request.Decision,
                request.Note,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context, StatusCodes.Status200OK);
        }).RequireAuthorization(ExecutionPolicies.Reviewer);

        return endpoints;
    }

    private static IResult ToHttpResult(
        ExecutionOperationResult result,
        HttpContext context,
        int successStatus)
    {
        if (result.Succeeded)
        {
            return Results.Json(result.Plan, statusCode: successStatus);
        }

        var body = new
        {
            code = result.ErrorCode,
            message = result.ErrorMessage,
            correlation_id = context.TraceIdentifier
        };

        return result.ErrorCode switch
        {
            "project_not_found" or "execution_stage_not_found" or "execution_report_not_found"
                => Results.NotFound(body),
            "execution_actor_inactive" or "execution_report_forbidden"
                => Results.Json(body, statusCode: StatusCodes.Status403Forbidden),
            "execution_project_not_published"
                or "execution_already_initialized"
                or "execution_stage_blocked"
                or "execution_report_pending_review"
                or "execution_stage_completed"
                or "execution_report_already_reviewed"
                or "execution_frozen"
                or "execution_pending_expenses"
                => Results.Conflict(body),
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
