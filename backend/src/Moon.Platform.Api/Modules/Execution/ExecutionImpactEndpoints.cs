using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Execution;

public sealed record SubmitImpactMetricRequest(
    string Key,
    string Label,
    string Unit,
    string Aggregation,
    decimal? TargetValue,
    decimal ActualValue);

public sealed record SubmitImpactReportRequest(
    string Title,
    string Summary,
    string Methodology,
    string? Geography,
    IReadOnlyList<SubmitImpactMetricRequest> Metrics);

public sealed record ReviewImpactReportRequest(string Decision, string? Note);
public sealed record CloseoutExecutionRequest(string Note);

public static class ExecutionImpactEndpoints
{
    public static IEndpointRouteBuilder MapExecutionImpactEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGet("/api/v1/projects/{projectId:guid}/execution/impact-reports", async Task<IResult> (
            Guid projectId,
            HttpContext context,
            IExecutionImpactService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.GetStateAsync(projectId, cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status200OK);
        }).RequireAuthorization();

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/impact-reports", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            SubmitImpactReportRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionImpactService service,
            CancellationToken cancellationToken) =>
        {
            var metrics = request.Metrics?
                .Select(x => new ExecutionImpactMetricDefinition(x.Key, x.Label, x.Unit, x.Aggregation, x.TargetValue, x.ActualValue))
                .ToArray()
                ?? [];
            var result = await service.SubmitAsync(
                projectId,
                stageId,
                request.Title,
                request.Summary,
                request.Methodology,
                request.Geography,
                metrics,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization();

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/impact-reports/{impactReportId:guid}/review", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            Guid impactReportId,
            ReviewImpactReportRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionImpactService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.ReviewAsync(
                projectId,
                stageId,
                impactReportId,
                request.Decision,
                request.Note,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status200OK);
        }).RequireAuthorization(ExecutionPolicies.ImpactReviewer);

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/stages/{stageId:guid}/impact-reports/{impactReportId:guid}/publish", async Task<IResult> (
            Guid projectId,
            Guid stageId,
            Guid impactReportId,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionImpactService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.PublishAsync(
                projectId,
                stageId,
                impactReportId,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status200OK);
        }).RequireAuthorization(ExecutionPolicies.ImpactPublisher);

        endpoints.MapPost("/api/v1/projects/{projectId:guid}/execution/closeout", async Task<IResult> (
            Guid projectId,
            CloseoutExecutionRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IExecutionImpactService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.CloseoutAsync(
                projectId,
                request.Note,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return ToHttpResult(result, context, StatusCodes.Status201Created);
        }).RequireAuthorization(ExecutionPolicies.CloseoutManager);

        endpoints.MapGet("/api/v1/public/impact-reports", async Task<IResult> (
            IExecutionImpactService service,
            CancellationToken cancellationToken) =>
            Results.Ok(await service.GetPublicReportsAsync(cancellationToken)));

        endpoints.MapGet("/api/v1/public/impact-reports/{impactReportId:guid}", async Task<IResult> (
            Guid impactReportId,
            IExecutionImpactService service,
            CancellationToken cancellationToken) =>
        {
            var report = await service.GetPublicReportAsync(impactReportId, cancellationToken);
            return report is null ? Results.NotFound() : Results.Ok(report);
        });

        endpoints.MapGet("/api/v1/public/impact-overview", async Task<IResult> (
            IExecutionImpactService service,
            CancellationToken cancellationToken) =>
            Results.Ok(await service.GetPublicOverviewAsync(cancellationToken)));

        return endpoints;
    }

    private static IResult ToHttpResult(ExecutionImpactOperationResult result, HttpContext context, int successStatus)
    {
        if (result.Succeeded)
            return Results.Json(result.State, statusCode: successStatus);

        var body = new
        {
            code = result.ErrorCode,
            message = result.ErrorMessage,
            correlation_id = context.TraceIdentifier
        };

        return result.ErrorCode switch
        {
            "project_not_found" or "execution_stage_not_found" or "execution_impact_not_found" => Results.NotFound(body),
            "execution_actor_inactive" or "execution_impact_forbidden" or "execution_impact_self_review_forbidden" =>
                Results.Json(body, statusCode: StatusCodes.Status403Forbidden),
            "execution_closed"
                or "execution_frozen"
                or "execution_impact_stage_not_completed"
                or "execution_impact_progress_not_approved"
                or "execution_impact_pending"
                or "execution_impact_already_reviewed"
                or "execution_impact_open_risks"
                or "execution_impact_not_approved"
                or "execution_already_closed"
                or "execution_not_initialized"
                or "execution_closeout_stages_incomplete"
                or "execution_closeout_open_risks"
                or "execution_closeout_pending_expenses"
                or "execution_closeout_pending_impact"
                or "execution_closeout_missing_impact" => Results.Conflict(body),
            _ => Results.BadRequest(body)
        };
    }

    private static string RequireActor(ClaimsPrincipal principal)
    {
        var actor = principal.FindFirstValue("sub");
        if (string.IsNullOrWhiteSpace(actor))
            throw new InvalidOperationException("Authenticated identity is missing the required 'sub' claim.");
        return actor;
    }
}
