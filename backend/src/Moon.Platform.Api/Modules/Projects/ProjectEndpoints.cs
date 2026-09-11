using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Projects;

public sealed record CreateProjectRequest(Guid OrganizationId, string Title, string Description);
public sealed record CreateProjectVersionRequest(string Title, string Description);

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
            "project_access_denied" => Results.Json(body, statusCode: StatusCodes.Status403Forbidden),
            "project_version_locked" or "project_invalid_state" => Results.Conflict(body),
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
