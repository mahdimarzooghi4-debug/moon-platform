namespace Moon.Platform.Api.Modules.AdminManagement;

public sealed class AdminOrganizationProfile
{
    public Guid OrganizationId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Manager { get; set; } = string.Empty;
    public string Mobile { get; set; } = string.Empty;
    public string ActivityArea { get; set; } = string.Empty;
    public DateTimeOffset UpdatedAtUtc { get; set; } = DateTimeOffset.UtcNow;
}

public sealed class AdminManagedProject
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Province { get; set; } = string.Empty;
    public string Track { get; set; } = string.Empty;
    public int FundingPercent { get; set; }
    public string FundingTarget { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string Stage { get; set; } = string.Empty;
    public DateTimeOffset UpdatedAtUtc { get; set; } = DateTimeOffset.UtcNow;
}

public sealed class AdminNewsArticle
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public string Status { get; set; } = "draft";
    public DateTimeOffset UpdatedAtUtc { get; set; } = DateTimeOffset.UtcNow;
}

public sealed class AdminHeroVideo
{
    public int Id { get; set; } = 1;
    public string FileName { get; set; } = string.Empty;
    public string ContentType { get; set; } = "video/mp4";
    public long Size { get; set; }
    public byte[] Data { get; set; } = [];
    public DateTimeOffset UpdatedAtUtc { get; set; } = DateTimeOffset.UtcNow;
}

public sealed record AdminOrganizationProfileView(
    Guid OrganizationId,
    string Name,
    string Manager,
    string Mobile,
    string ActivityArea,
    DateTimeOffset UpdatedAtUtc);

public sealed record AdminManagedProjectView(
    string Id,
    string Name,
    string Province,
    string Track,
    int FundingPercent,
    string FundingTarget,
    string Status,
    string Stage,
    DateTimeOffset UpdatedAtUtc);

public sealed record AdminNewsArticleView(
    string Id,
    string Title,
    string Summary,
    string Status,
    DateTimeOffset UpdatedAtUtc);

public sealed record AdminHeroVideoMetaView(
    string FileName,
    string ContentType,
    long Size,
    DateTimeOffset UpdatedAtUtc);

public sealed record SaveAdminOrganizationProfileRequest(
    string Name,
    string Manager,
    string Mobile,
    string ActivityArea);

public sealed record SaveAdminManagedProjectRequest(
    string Name,
    string Province,
    string Track,
    int FundingPercent,
    string FundingTarget,
    string Status,
    string Stage);

public sealed record SaveAdminNewsRequest(
    string Id,
    string Title,
    string Summary,
    string Status);
