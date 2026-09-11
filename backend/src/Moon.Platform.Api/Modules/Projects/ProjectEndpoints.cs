using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Projects;

public sealed record CreateProjectRequest(
    Guid OrganizationId,
    string Title,
    string Description,
    long? FundingTargetMinor = null,
    string? FundingTargetCurrency = null);

public sealed record CreateProjectVersionRequest(
    string Title,
    string Description,
    long? FundingTargetMinor = null,
    string? FundingTargetCurrency = null);

public static class ProjectEndpoints
{
    public static IEndpointRouteBuilder MapProjectEndpoints(this IEndpointRouteBuilder endpoints)
    {
        var group = endpoints.MapGroup("/api/v1/projects").RequireAuthorization();

        group.MapPost("", async Task<IResult> (
            CreateProjectRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IProjectService projectService,
            CancellationToken cancellationToken) =>
        {
            var result = await projectService.CreateAsync(
                request.OrganizationId,
                request.Title,
                request.Description,
                request.FundingTargetMinor,
                request.FundingTargetCurrency,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context, created: true);
        });

        group.MapGet("/{projectId:guid}", async Task<IResult> (
            Guid projectId,
            ClaimsPrincipal principal,
            HttpContext context,
            IProjectService projectService,
            CancellationToken cancellationToken) =>
        {
            var result = await projectService.GetAsync(
                projectId,
                RequireActor(principal),
                cancellationToken);

            return ToHttpResult(result, context);
        });

        group.MapPost("/{projectId:guid}/versions", async Task<IResult> (
            Guid projectId,
            CreateProjectVersionRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IProjectService projectService,
            CancellationToken cancellationToken) =>
        {
            var result = await projectService.AddVersionAsync(
                projectId,
                request.Title,
                request.Description,
                request.FundingTargetMinor,
                request.FundingTargetCurrency,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        });

        group.MapPost("/{projectId:guid}/submit", async Task<IResult> (
            Guid projectId,
            ClaimsPrincipal principal,
            HttpContext context,
            IProjectService projectService,
            CancellationToken cancellationToken) =>
        {
            var result = await projectService.SubmitAsync(
                projectId,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        });

        group.MapPost("/{projectId:guid}/publish", async Task<IResult> (
            Guid projectId,
            ClaimsPrincipal principal,
            HttpContext context,
            IProjectService projectService,
            CancellationToken cancellationToken) =>
        {
            var result = await projectService.PublishAsync(
                projectId,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        }).RequireAuthorization(ProjectPolicies.Publisher);

        return endpoints;
    }

    private static IResult ToHttpResult(ProjectOperationResult result, HttpContext context, bool created = false)
    {
        if (result.Succeeded)
        {
            return created
                ? Results.Created($"/api/v1/projects/{result.Project!.ProjectId}", result.Project)
                : Results.Ok(result.Project);
        }

        var body = new
        {
            code = result.ErrorCode,
            message = result.ErrorMessage,
            correlation_id = context.TraceIdentifier
        };

        return result.ErrorCode switch
        {
            "project_not_found" => Results.NotFound(body),
            "project_access_denied" or "project_publish_actor_inactive" =>
                Results.Json(body, statusCode: StatusCodes.Status403Forbidden),
            "project_version_locked" or
            "project_invalid_state" or
            "project_already_published" or
            "project_publish_invalid_state" or
            "project_publish_version_unlocked" or
            "project_publish_approval_missing" or
            "project_publish_evaluation_invalid" => Results.Conflict(body),
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
