using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Common.Authorization;

public static class OrganizationPolicies
{
    public const string Member = "organization-member";
}

public sealed class OrganizationMemberRequirement : IAuthorizationRequirement;

public interface IOrganizationAccessService
{
    Task<bool> IsMemberAsync(string externalSubject, Guid organizationId, CancellationToken cancellationToken = default);
}

public sealed class OrganizationAccessService(MoonDbContext dbContext) : IOrganizationAccessService
{
    public Task<bool> IsMemberAsync(string externalSubject, Guid organizationId, CancellationToken cancellationToken = default)
    {
        return (
            from membership in dbContext.Memberships.AsNoTracking()
            join user in dbContext.Users.AsNoTracking() on membership.UserId equals user.Id
            where user.ExternalSubject == externalSubject
                  && user.IsActive
                  && membership.OrganizationId == organizationId
                  && membership.IsActive
            select membership.Id)
            .AnyAsync(cancellationToken);
    }
}

public sealed class OrganizationMemberHandler(IOrganizationAccessService accessService)
    : AuthorizationHandler<OrganizationMemberRequirement>
{
    protected override async Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        OrganizationMemberRequirement requirement)
    {
        if (context.Resource is not HttpContext httpContext)
        {
            return;
        }

        var subject = context.User.FindFirstValue("sub");
        var routeValue = httpContext.Request.RouteValues["organizationId"]?.ToString();

        if (string.IsNullOrWhiteSpace(subject) || !Guid.TryParse(routeValue, out var organizationId))
        {
            return;
        }

        if (await accessService.IsMemberAsync(subject, organizationId, httpContext.RequestAborted))
        {
            context.Succeed(requirement);
        }
    }
}
