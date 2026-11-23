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
    public string? ImageFileName { get; set; }
    public string? ImageContentType { get; set; }
    public long? ImageSize { get; set; }
    public byte[]? ImageData { get; set; }
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

public sealed class AdminTrustedCompany
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int SortOrder { get; set; }
    public bool IsPublished { get; set; } = true;
    public string? LogoFileName { get; set; }
    public string? LogoContentType { get; set; }
    public long? LogoSize { get; set; }
    public byte[]? LogoData { get; set; }
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

public sealed record AdminNewsImage(
    string FileName,
    string ContentType,
    long Size,
    byte[] Data,
    DateTimeOffset UpdatedAtUtc);

public sealed record AdminHeroVideoMetaView(
    string FileName,
    string ContentType,
    long Size,
    DateTimeOffset UpdatedAtUtc);

public sealed record AdminTrustedCompanyView(
    int Id,
    string Name,
    int SortOrder,
    bool IsPublished,
    bool HasLogo,
    DateTimeOffset UpdatedAtUtc);

public sealed record PublicTrustedCompanyView(
    int Id,
    string Name,
    int SortOrder,
    bool HasLogo);

public sealed record AdminTrustedCompanyLogo(
    string FileName,
    string ContentType,
    long Size,
    byte[] Data);

public sealed record AdminTrustedCompanyLogoMeta(
    int CompanyId,
    string FileName,
    string ContentType,
    long Size,
    DateTimeOffset UpdatedAtUtc);

public sealed record SaveAdminTrustedCompanyRequest(string Name, int SortOrder, bool IsPublished);

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
