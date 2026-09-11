namespace Moon.Platform.Api.Modules.Projects;

public static class ProjectStatuses
{
    public const string Draft = "draft";
    public const string Submitted = "submitted";
    public const string Approved = "approved";
    public const string Rejected = "rejected";
    public const string Published = "published";
}

public sealed class Project
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid OrganizationId { get; init; }
    public string Status { get; set; } = ProjectStatuses.Draft;
    public int CurrentVersionNumber { get; set; } = 1;
    public string CreatedBySubject { get; init; } = string.Empty;
    public DateTimeOffset CreatedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public DateTimeOffset? SubmittedAtUtc { get; set; }
    public DateTimeOffset? ApprovedAtUtc { get; set; }
    public DateTimeOffset? PublishedAtUtc { get; set; }
}

public sealed class ProjectVersion
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public int VersionNumber { get; init; }
    public string Title { get; init; } = string.Empty;
    public string Description { get; init; } = string.Empty;
    public bool IsLocked { get; set; }
    public string CreatedBySubject { get; init; } = string.Empty;
    public DateTimeOffset CreatedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public DateTimeOffset? LockedAtUtc { get; set; }
}

public sealed record ProjectVersionView(
    Guid VersionId,
    int VersionNumber,
    string Title,
    string Description,
    bool IsLocked,
    string CreatedBySubject,
    DateTimeOffset CreatedAtUtc,
    DateTimeOffset? LockedAtUtc);

public sealed record ProjectView(
    Guid ProjectId,
    Guid OrganizationId,
    string Status,
    int CurrentVersionNumber,
    string CreatedBySubject,
    DateTimeOffset CreatedAtUtc,
    DateTimeOffset? SubmittedAtUtc,
    DateTimeOffset? ApprovedAtUtc,
    DateTimeOffset? PublishedAtUtc,
    IReadOnlyList<ProjectVersionView> Versions);

public sealed record ProjectOperationResult(ProjectView? Project, string? ErrorCode, string? ErrorMessage)
{
    public bool Succeeded => Project is not null && ErrorCode is null;

    public static ProjectOperationResult Success(ProjectView project) => new(project, null, null);
    public static ProjectOperationResult Failure(string code, string message) => new(null, code, message);
}
