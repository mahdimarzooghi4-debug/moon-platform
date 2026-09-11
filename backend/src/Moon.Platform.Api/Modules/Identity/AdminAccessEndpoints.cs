using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Identity;

public static class AdminAccessPolicies
{
    public const string SystemAdmin = "system-admin";
}

public sealed record CreateOrganizationRequest(string Name, string Type);
public sealed record SetOrganizationStatusRequest(string Status);
public sealed record SetUserActiveRequest(bool IsActive);
public sealed record GrantMembershipRequest(Guid UserId, Guid OrganizationId, string RoleCode);
public sealed record SetMembershipActiveRequest(bool IsActive);

public static class AdminAccessEndpoints
{
    public static IEndpointRouteBuilder MapAdminAccessEndpoints(this IEndpointRouteBuilder endpoints)
    {
        var group = endpoints
            .MapGroup("/api/v1/admin")
            .RequireAuthorization(AdminAccessPolicies.SystemAdmin);

        group.MapGet("/users", async Task<IResult> (
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
            Results.Ok(await adminAccess.ListUsersAsync(cancellationToken)));

        group.MapGet("/users/{userId:guid}", async Task<IResult> (
            Guid userId,
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
        {
            var user = await adminAccess.GetUserAsync(userId, cancellationToken);
            return user is null ? Results.NotFound() : Results.Ok(user);
        });

        group.MapPatch("/users/{userId:guid}/status", async Task<IResult> (
            Guid userId,
            SetUserActiveRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
        {
            try
            {
                var updated = await adminAccess.SetUserActiveAsync(
                    userId,
                    request.IsActive,
                    RequireActor(principal),
                    context.TraceIdentifier,
                    context.Connection.RemoteIpAddress?.ToString(),
                    cancellationToken);
                return updated ? Results.NoContent() : Results.NotFound();
            }
            catch (InvalidOperationException exception)
            {
                return Results.Conflict(new { code = "admin_self_deactivation_blocked", message = exception.Message });
            }
        });

        group.MapGet("/organizations", async Task<IResult> (
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
            Results.Ok(await adminAccess.ListOrganizationsAsync(cancellationToken)));

        group.MapPost("/organizations", async Task<IResult> (
            CreateOrganizationRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
        {
            try
            {
                var organization = await adminAccess.CreateOrganizationAsync(
                    request.Name,
                    request.Type,
                    RequireActor(principal),
                    context.TraceIdentifier,
                    context.Connection.RemoteIpAddress?.ToString(),
                    cancellationToken);
                return Results.Created($"/api/v1/admin/organizations/{organization.OrganizationId}", organization);
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { code = "invalid_organization", message = exception.Message });
            }
        });

        group.MapPatch("/organizations/{organizationId:guid}/status", async Task<IResult> (
            Guid organizationId,
            SetOrganizationStatusRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
        {
            try
            {
                var updated = await adminAccess.SetOrganizationStatusAsync(
                    organizationId,
                    request.Status,
                    RequireActor(principal),
                    context.TraceIdentifier,
                    context.Connection.RemoteIpAddress?.ToString(),
                    cancellationToken);
                return updated ? Results.NoContent() : Results.NotFound();
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { code = "invalid_organization_status", message = exception.Message });
            }
        });

        group.MapGet("/roles", async Task<IResult> (
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
            Results.Ok(await adminAccess.ListRolesAsync(cancellationToken)));

        group.MapPost("/memberships", async Task<IResult> (
            GrantMembershipRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
        {
            var membership = await adminAccess.GrantMembershipAsync(
                request.UserId,
                request.OrganizationId,
                request.RoleCode,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return membership is null
                ? Results.BadRequest(new { code = "invalid_membership_target", message = "User, active organization, or role was not found." })
                : Results.Ok(membership);
        });

        group.MapPatch("/memberships/{membershipId:guid}/status", async Task<IResult> (
            Guid membershipId,
            SetMembershipActiveRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminAccessService adminAccess,
            CancellationToken cancellationToken) =>
        {
            var updated = await adminAccess.SetMembershipActiveAsync(
                membershipId,
                request.IsActive,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return updated ? Results.NoContent() : Results.NotFound();
        });

        return endpoints;
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
