using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Modules.Projects;

public interface IProjectService
{
    Task<ProjectOperationResult> CreateAsync(
        Guid organizationId,
        string title,
        string description,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<ProjectOperationResult> AddVersionAsync(
        Guid projectId,
        string title,
        string description,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<ProjectOperationResult> SubmitAsync(
        Guid projectId,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<ProjectOperationResult> GetAsync(
        Guid projectId,
        string actorSubject,
        CancellationToken cancellationToken = default);
}

public sealed class ProjectService(MoonDbContext dbContext, IAuditWriter auditWriter) : IProjectService
{
    public async Task<ProjectOperationResult> CreateAsync(
        Guid organizationId,
        string title,
        string description,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var validation = ValidateVersionInput(title, description);
        if (validation is not null)
        {
            return validation;
        }

        if (!await HasActiveOrganizationAccessAsync(actorSubject, organizationId, cancellationToken))
        {
            return ProjectOperationResult.Failure("project_access_denied", "Active organization membership is required.");
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);

        var project = new Project
        {
            OrganizationId = organizationId,
            CreatedBySubject = actorSubject
        };
        var version = new ProjectVersion
        {
            ProjectId = project.Id,
            VersionNumber = 1,
            Title = title.Trim(),
            Description = description.Trim(),
            CreatedBySubject = actorSubject
        };

        dbContext.Projects.Add(project);
        dbContext.ProjectVersions.Add(version);
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "project.created",
            "project",
            project.Id.ToString(),
            correlationId,
            organizationId.ToString(),
            project.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                ProjectId = project.Id,
                project.OrganizationId,
                project.Status,
                project.CurrentVersionNumber,
                VersionId = version.Id,
                version.VersionNumber
            }),
            IpAddress: ipAddress), cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return ProjectOperationResult.Success(await BuildViewAsync(project, cancellationToken));
    }

    public async Task<ProjectOperationResult> AddVersionAsync(
        Guid projectId,
        string title,
        string description,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var validation = ValidateVersionInput(title, description);
        if (validation is not null)
        {
            return validation;
        }

        var project = await dbContext.Projects.SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (project is null)
        {
            return ProjectOperationResult.Failure("project_not_found", "Project was not found.");
        }

        if (!await HasActiveOrganizationAccessAsync(actorSubject, project.OrganizationId, cancellationToken))
        {
            return ProjectOperationResult.Failure("project_access_denied", "Active organization membership is required.");
        }

        if (!string.Equals(project.Status, ProjectStatuses.Draft, StringComparison.Ordinal))
        {
            return ProjectOperationResult.Failure("project_version_locked", "Only draft projects can receive a new version.");
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);

        var currentVersion = await dbContext.ProjectVersions.SingleAsync(
            x => x.ProjectId == project.Id && x.VersionNumber == project.CurrentVersionNumber,
            cancellationToken);

        if (!currentVersion.IsLocked)
        {
            currentVersion.IsLocked = true;
            currentVersion.LockedAtUtc = DateTimeOffset.UtcNow;
        }

        var nextVersionNumber = project.CurrentVersionNumber + 1;
        var nextVersion = new ProjectVersion
        {
            ProjectId = project.Id,
            VersionNumber = nextVersionNumber,
            Title = title.Trim(),
            Description = description.Trim(),
            CreatedBySubject = actorSubject
        };
        project.CurrentVersionNumber = nextVersionNumber;
        dbContext.ProjectVersions.Add(nextVersion);
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "project.version.created",
            "project_version",
            nextVersion.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            project.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                nextVersion.Id,
                nextVersion.VersionNumber,
                previousVersionLocked = currentVersion.VersionNumber
            }),
            IpAddress: ipAddress), cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return ProjectOperationResult.Success(await BuildViewAsync(project, cancellationToken));
    }

    public async Task<ProjectOperationResult> SubmitAsync(
        Guid projectId,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var project = await dbContext.Projects.SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (project is null)
        {
            return ProjectOperationResult.Failure("project_not_found", "Project was not found.");
        }

        if (!await HasActiveOrganizationAccessAsync(actorSubject, project.OrganizationId, cancellationToken))
        {
            return ProjectOperationResult.Failure("project_access_denied", "Active organization membership is required.");
        }

        if (!string.Equals(project.Status, ProjectStatuses.Draft, StringComparison.Ordinal))
        {
            return ProjectOperationResult.Failure("project_invalid_state", "Only draft projects can be submitted.");
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);

        var currentVersion = await dbContext.ProjectVersions.SingleAsync(
            x => x.ProjectId == project.Id && x.VersionNumber == project.CurrentVersionNumber,
            cancellationToken);
        if (!currentVersion.IsLocked)
        {
            currentVersion.IsLocked = true;
            currentVersion.LockedAtUtc = DateTimeOffset.UtcNow;
        }

        project.Status = ProjectStatuses.Submitted;
        project.SubmittedAtUtc = DateTimeOffset.UtcNow;
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "project.submitted",
            "project",
            project.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            project.Id.ToString(),
            BeforeJson: JsonSerializer.Serialize(new { status = ProjectStatuses.Draft }),
            AfterJson: JsonSerializer.Serialize(new
            {
                project.Status,
                project.SubmittedAtUtc,
                project.CurrentVersionNumber,
                currentVersion.IsLocked
            }),
            IpAddress: ipAddress), cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return ProjectOperationResult.Success(await BuildViewAsync(project, cancellationToken));
    }

    public async Task<ProjectOperationResult> GetAsync(
        Guid projectId,
        string actorSubject,
        CancellationToken cancellationToken = default)
    {
        var project = await dbContext.Projects.AsNoTracking().SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (project is null)
        {
            return ProjectOperationResult.Failure("project_not_found", "Project was not found.");
        }

        if (!await HasActiveOrganizationAccessAsync(actorSubject, project.OrganizationId, cancellationToken))
        {
            return ProjectOperationResult.Failure("project_access_denied", "Active organization membership is required.");
        }

        return ProjectOperationResult.Success(await BuildViewAsync(project, cancellationToken));
    }

    private async Task<bool> HasActiveOrganizationAccessAsync(
        string actorSubject,
        Guid organizationId,
        CancellationToken cancellationToken)
    {
        return await (
            from membership in dbContext.Memberships.AsNoTracking()
            join user in dbContext.Users.AsNoTracking() on membership.UserId equals user.Id
            join organization in dbContext.Organizations.AsNoTracking() on membership.OrganizationId equals organization.Id
            where user.ExternalSubject == actorSubject
                  && user.IsActive
                  && membership.OrganizationId == organizationId
                  && membership.IsActive
                  && organization.Status == "active"
            select membership.Id)
            .AnyAsync(cancellationToken);
    }

    private async Task<ProjectView> BuildViewAsync(Project project, CancellationToken cancellationToken)
    {
        var versions = await dbContext.ProjectVersions.AsNoTracking()
            .Where(x => x.ProjectId == project.Id)
            .OrderBy(x => x.VersionNumber)
            .Select(x => new ProjectVersionView(
                x.Id,
                x.VersionNumber,
                x.Title,
                x.Description,
                x.IsLocked,
                x.CreatedBySubject,
                x.CreatedAtUtc,
                x.LockedAtUtc))
            .ToListAsync(cancellationToken);

        return new ProjectView(
            project.Id,
            project.OrganizationId,
            project.Status,
            project.CurrentVersionNumber,
            project.CreatedBySubject,
            project.CreatedAtUtc,
            project.SubmittedAtUtc,
            project.ApprovedAtUtc,
            project.PublishedAtUtc,
            versions);
    }

    private static ProjectOperationResult? ValidateVersionInput(string title, string description)
    {
        if (string.IsNullOrWhiteSpace(title) || title.Trim().Length > 200)
        {
            return ProjectOperationResult.Failure("project_invalid_title", "Title is required and must be at most 200 characters.");
        }

        if (description is null || description.Trim().Length > 8000)
        {
            return ProjectOperationResult.Failure("project_invalid_description", "Description must be at most 8000 characters.");
        }

        return null;
    }
}
