using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Evaluations;

public static class EvaluationPolicies
{
    public const string Evaluator = "phase1-evaluator";
    public const string DecisionMaker = "phase1-decision-maker";
}

public sealed record AssignEvaluationRequest(string EvaluatorSubject);
public sealed record ConflictDeclarationRequest(bool HasConflict, string? Reason);
public sealed record CompleteEvaluationRequest(string Recommendation, string Rationale);
public sealed record RecordDecisionRequest(string Outcome, string Reason);

public static class EvaluationEndpoints
{
    public static IEndpointRouteBuilder MapEvaluationEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/api/v1/projects/{projectId:guid}/evaluations", async Task<IResult> (
            Guid projectId,
            AssignEvaluationRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IEvaluationService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.AssignAsync(
                projectId,
                request.EvaluatorSubject,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context, created: true);
        }).RequireAuthorization(EvaluationPolicies.DecisionMaker);

        endpoints.MapPost("/api/v1/evaluations/{evaluationId:guid}/conflict", async Task<IResult> (
            Guid evaluationId,
            ConflictDeclarationRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IEvaluationService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.DeclareConflictAsync(
                evaluationId,
                request.HasConflict,
                request.Reason,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        }).RequireAuthorization(EvaluationPolicies.Evaluator);

        endpoints.MapPost("/api/v1/evaluations/{evaluationId:guid}/complete", async Task<IResult> (
            Guid evaluationId,
            CompleteEvaluationRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IEvaluationService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.CompleteAsync(
                evaluationId,
                request.Recommendation,
                request.Rationale,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        }).RequireAuthorization(EvaluationPolicies.Evaluator);

        endpoints.MapPost("/api/v1/evaluations/{evaluationId:guid}/decision", async Task<IResult> (
            Guid evaluationId,
            RecordDecisionRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IEvaluationService service,
            CancellationToken cancellationToken) =>
        {
            var result = await service.DecideAsync(
                evaluationId,
                request.Outcome,
                request.Reason,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context, created: true);
        }).RequireAuthorization(EvaluationPolicies.DecisionMaker);

        return endpoints;
    }

    private static IResult ToHttpResult(EvaluationOperationResult result, HttpContext context, bool created = false)
    {
        if (result.Succeeded)
        {
            var value = (object?)result.Evaluation ?? result.Decision!;
            return created ? Results.Json(value, statusCode: StatusCodes.Status201Created) : Results.Ok(value);
        }

        var body = new
        {
            code = result.ErrorCode,
            message = result.ErrorMessage,
            correlation_id = context.TraceIdentifier
        };

        return result.ErrorCode switch
        {
            "project_not_found" or "evaluation_not_found" => Results.NotFound(body),
            "evaluation_access_denied" => Results.Json(body, statusCode: StatusCodes.Status403Forbidden),
            "evaluation_invalid_project_state" or
            "evaluation_version_not_locked" or
            "evaluation_already_assigned" or
            "evaluation_conflict_already_declared" or
            "evaluation_conflict_blocks_completion" or
            "evaluation_conflict_declaration_required" or
            "evaluation_already_completed" or
            "decision_evaluation_incomplete" or
            "decision_separation_of_duties" or
            "decision_invalid_project_state" or
            "decision_already_recorded" => Results.Conflict(body),
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
