using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Modules.AdminManagement;

public interface IAdminManagementService
{
    Task<IReadOnlyList<AdminOrganizationProfileView>> ListOrganizationProfilesAsync(CancellationToken cancellationToken = default);
    Task<AdminOrganizationProfileView?> GetOrganizationProfileAsync(Guid organizationId, CancellationToken cancellationToken = default);
    Task<AdminOrganizationProfileView?> SaveOrganizationProfileAsync(Guid organizationId, SaveAdminOrganizationProfileRequest request, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<AdminManagedProjectView>> ListProjectsAsync(CancellationToken cancellationToken = default);
    Task<AdminManagedProjectView?> GetProjectAsync(string id, CancellationToken cancellationToken = default);
    Task<AdminManagedProjectView?> SaveProjectAsync(string id, SaveAdminManagedProjectRequest request, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<AdminNewsArticleView>> ListNewsAsync(bool publishedOnly, CancellationToken cancellationToken = default);
    Task<AdminNewsArticleView> SaveNewsAsync(SaveAdminNewsRequest request, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<bool> DeleteNewsAsync(string id, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<AdminHeroVideoMetaView?> GetHeroMetaAsync(CancellationToken cancellationToken = default);
    Task<AdminHeroVideo?> GetHeroAsync(CancellationToken cancellationToken = default);
    Task<AdminHeroVideoMetaView> SaveHeroAsync(string fileName, string contentType, byte[] data, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<bool> DeleteHeroAsync(string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
}

public sealed class AdminManagementService(MoonDbContext dbContext, IAuditWriter auditWriter) : IAdminManagementService
{
    private static readonly AdminManagedProject[] ProjectSeed =
    [
        new() { Id = "1", Name = "سلامت خانواده", Province = "سیستان و بلوچستان", Track = "سلامت و خدمات اجتماعی", FundingPercent = 51, FundingTarget = "۳۵۰ میلیون تومان", Status = "فعال", Stage = "در حال تأمین" },
        new() { Id = "2", Name = "مهارت برای نوجوانان", Province = "اصفهان", Track = "آموزش و مهارت", FundingPercent = 74, FundingTarget = "۴۰۰ میلیون تومان", Status = "فعال", Stage = "در حال تأمین" },
        new() { Id = "3", Name = "اشتغال زنان روستایی", Province = "گلستان", Track = "اشتغال و معیشت", FundingPercent = 58, FundingTarget = "۴۰۰ میلیون تومان", Status = "در انتظار گزارش", Stage = "در حال اجرا" }
    ];

    private static readonly AdminNewsArticle[] NewsSeed =
    [
        new() { Id = "news-impact-1404", Title = "گزارش اثر اجتماعی سامانه ماه در سال ۱۴۰۴ منتشر شد", Summary = "نتایج پروژه‌های تأییدشده سامانه ماه در حوزه اشتغال، آموزش، سلامت و معیشت پایدار منتشر شد.", Status = "published", UpdatedAtUtc = DateTimeOffset.Parse("2026-08-19T09:00:00Z") },
        new() { Id = "news-startups", Title = "پذیرش دوره جدید استارتاپ‌های اجتماعی", Summary = "فرایند معرفی و ارزیابی استارتاپ‌های اجتماعی برای دوره جدید آغاز شده است.", Status = "published", UpdatedAtUtc = DateTimeOffset.Parse("2026-09-02T10:30:00Z") },
        new() { Id = "news-funding", Title = "به‌روزرسانی روند تأمین مالی پروژه‌ها", Summary = "گزارش جدید وضعیت تأمین مالی پروژه‌های فعال برای انتشار آماده شده است.", Status = "draft", UpdatedAtUtc = DateTimeOffset.Parse("2026-09-10T08:00:00Z") }
    ];

    public async Task<IReadOnlyList<AdminOrganizationProfileView>> ListOrganizationProfilesAsync(CancellationToken cancellationToken = default) =>
        await dbContext.AdminOrganizationProfiles.AsNoTracking()
            .OrderByDescending(x => x.UpdatedAtUtc)
            .Select(x => ToView(x))
            .ToListAsync(cancellationToken);

    public async Task<AdminOrganizationProfileView?> GetOrganizationProfileAsync(Guid organizationId, CancellationToken cancellationToken = default)
    {
        var item = await dbContext.AdminOrganizationProfiles.AsNoTracking().SingleOrDefaultAsync(x => x.OrganizationId == organizationId, cancellationToken);
        return item is null ? null : ToView(item);
    }

    public async Task<AdminOrganizationProfileView?> SaveOrganizationProfileAsync(Guid organizationId, SaveAdminOrganizationProfileRequest request, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        var organization = await dbContext.Organizations.SingleOrDefaultAsync(x => x.Id == organizationId, cancellationToken);
        if (organization is null || organization.Type != "startup") return null;

        var item = await dbContext.AdminOrganizationProfiles.SingleOrDefaultAsync(x => x.OrganizationId == organizationId, cancellationToken);
        var before = item is null ? null : JsonSerializer.Serialize(ToView(item));
        if (item is null)
        {
            item = new AdminOrganizationProfile { OrganizationId = organizationId };
            dbContext.AdminOrganizationProfiles.Add(item);
        }

        item.Name = Required(request.Name, 200, nameof(request.Name));
        item.Manager = Limit(request.Manager, 200);
        item.Mobile = Limit(request.Mobile, 32);
        item.ActivityArea = Limit(request.ActivityArea, 300);
        item.UpdatedAtUtc = DateTimeOffset.UtcNow;
        organization.Name = item.Name;
        await dbContext.SaveChangesAsync(cancellationToken);

        var view = ToView(item);
        await AuditAsync("admin.startup.profile.update", "organization", organizationId.ToString(), actorSubject, correlationId, ipAddress, before, JsonSerializer.Serialize(view), organizationId.ToString(), null, cancellationToken);
        return view;
    }

    public async Task<IReadOnlyList<AdminManagedProjectView>> ListProjectsAsync(CancellationToken cancellationToken = default)
    {
        await EnsureProjectSeedAsync(cancellationToken);
        return await dbContext.AdminManagedProjects.AsNoTracking().OrderBy(x => x.Id).Select(x => ToView(x)).ToListAsync(cancellationToken);
    }

    public async Task<AdminManagedProjectView?> GetProjectAsync(string id, CancellationToken cancellationToken = default)
    {
        await EnsureProjectSeedAsync(cancellationToken);
        var item = await dbContext.AdminManagedProjects.AsNoTracking().SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        return item is null ? null : ToView(item);
    }

    public async Task<AdminManagedProjectView?> SaveProjectAsync(string id, SaveAdminManagedProjectRequest request, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        await EnsureProjectSeedAsync(cancellationToken);
        var item = await dbContext.AdminManagedProjects.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (item is null) return null;
        var before = JsonSerializer.Serialize(ToView(item));

        item.Name = Required(request.Name, 200, nameof(request.Name));
        item.Province = Limit(request.Province, 120);
        item.Track = Limit(request.Track, 200);
        item.FundingPercent = Math.Clamp(request.FundingPercent, 0, 100);
        item.FundingTarget = Limit(request.FundingTarget, 120);
        item.Status = ValidateProjectStatus(request.Status);
        item.Stage = Limit(request.Stage, 120);
        item.UpdatedAtUtc = DateTimeOffset.UtcNow;
        await dbContext.SaveChangesAsync(cancellationToken);

        var view = ToView(item);
        await AuditAsync("admin.project.update", "admin_project", id, actorSubject, correlationId, ipAddress, before, JsonSerializer.Serialize(view), null, id, cancellationToken);
        return view;
    }

    public async Task<IReadOnlyList<AdminNewsArticleView>> ListNewsAsync(bool publishedOnly, CancellationToken cancellationToken = default)
    {
        await EnsureNewsSeedAsync(cancellationToken);
        var query = dbContext.AdminNewsArticles.AsNoTracking().AsQueryable();
        if (publishedOnly) query = query.Where(x => x.Status == "published");
        return await query.OrderByDescending(x => x.UpdatedAtUtc).Select(x => ToView(x)).ToListAsync(cancellationToken);
    }

    public async Task<AdminNewsArticleView> SaveNewsAsync(SaveAdminNewsRequest request, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        var id = Required(request.Id, 120, nameof(request.Id));
        var item = await dbContext.AdminNewsArticles.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        var before = item is null ? null : JsonSerializer.Serialize(ToView(item));
        if (item is null)
        {
            item = new AdminNewsArticle { Id = id };
            dbContext.AdminNewsArticles.Add(item);
        }

        item.Title = Required(request.Title, 300, nameof(request.Title));
        item.Summary = Required(request.Summary, 4000, nameof(request.Summary));
        item.Status = request.Status is "published" or "draft" ? request.Status : throw new ArgumentException("News status must be 'published' or 'draft'.");
        item.UpdatedAtUtc = DateTimeOffset.UtcNow;
        await dbContext.SaveChangesAsync(cancellationToken);

        var view = ToView(item);
        await AuditAsync("admin.content.news.save", "news", id, actorSubject, correlationId, ipAddress, before, JsonSerializer.Serialize(view), null, null, cancellationToken);
        return view;
    }

    public async Task<bool> DeleteNewsAsync(string id, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        var item = await dbContext.AdminNewsArticles.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (item is null) return false;
        var before = JsonSerializer.Serialize(ToView(item));
        dbContext.AdminNewsArticles.Remove(item);
        await dbContext.SaveChangesAsync(cancellationToken);
        await AuditAsync("admin.content.news.delete", "news", id, actorSubject, correlationId, ipAddress, before, null, null, null, cancellationToken);
        return true;
    }

    public async Task<AdminHeroVideoMetaView?> GetHeroMetaAsync(CancellationToken cancellationToken = default)
    {
        var item = await dbContext.AdminHeroVideos.AsNoTracking().SingleOrDefaultAsync(x => x.Id == 1, cancellationToken);
        return item is null ? null : ToMeta(item);
    }

    public Task<AdminHeroVideo?> GetHeroAsync(CancellationToken cancellationToken = default) =>
        dbContext.AdminHeroVideos.AsNoTracking().SingleOrDefaultAsync(x => x.Id == 1, cancellationToken);

    public async Task<AdminHeroVideoMetaView> SaveHeroAsync(string fileName, string contentType, byte[] data, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        var item = await dbContext.AdminHeroVideos.SingleOrDefaultAsync(x => x.Id == 1, cancellationToken);
        var before = item is null ? null : JsonSerializer.Serialize(ToMeta(item));
        if (item is null)
        {
            item = new AdminHeroVideo { Id = 1 };
            dbContext.AdminHeroVideos.Add(item);
        }

        item.FileName = Required(fileName, 240, nameof(fileName));
        item.ContentType = Required(contentType, 120, nameof(contentType));
        item.Size = data.LongLength;
        item.Data = data;
        item.UpdatedAtUtc = DateTimeOffset.UtcNow;
        await dbContext.SaveChangesAsync(cancellationToken);

        var meta = ToMeta(item);
        await AuditAsync("admin.content.hero.save", "hero_video", "1", actorSubject, correlationId, ipAddress, before, JsonSerializer.Serialize(meta), null, null, cancellationToken);
        return meta;
    }

    public async Task<bool> DeleteHeroAsync(string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        var item = await dbContext.AdminHeroVideos.SingleOrDefaultAsync(x => x.Id == 1, cancellationToken);
        if (item is null) return false;
        var before = JsonSerializer.Serialize(ToMeta(item));
        dbContext.AdminHeroVideos.Remove(item);
        await dbContext.SaveChangesAsync(cancellationToken);
        await AuditAsync("admin.content.hero.delete", "hero_video", "1", actorSubject, correlationId, ipAddress, before, null, null, null, cancellationToken);
        return true;
    }

    private async Task EnsureProjectSeedAsync(CancellationToken cancellationToken)
    {
        if (await dbContext.AdminManagedProjects.AnyAsync(cancellationToken)) return;
        dbContext.AdminManagedProjects.AddRange(ProjectSeed.Select(x => new AdminManagedProject
        {
            Id = x.Id, Name = x.Name, Province = x.Province, Track = x.Track, FundingPercent = x.FundingPercent,
            FundingTarget = x.FundingTarget, Status = x.Status, Stage = x.Stage, UpdatedAtUtc = DateTimeOffset.UtcNow
        }));
        await dbContext.SaveChangesAsync(cancellationToken);
    }

    private async Task EnsureNewsSeedAsync(CancellationToken cancellationToken)
    {
        if (await dbContext.AdminNewsArticles.AnyAsync(cancellationToken)) return;
        dbContext.AdminNewsArticles.AddRange(NewsSeed.Select(x => new AdminNewsArticle
        {
            Id = x.Id, Title = x.Title, Summary = x.Summary, Status = x.Status, UpdatedAtUtc = x.UpdatedAtUtc
        }));
        await dbContext.SaveChangesAsync(cancellationToken);
    }

    private Task AuditAsync(string action, string subjectType, string subjectId, string actor, string correlationId, string? ip, string? before, string? after, string? organizationId, string? projectId, CancellationToken cancellationToken) =>
        auditWriter.AppendAsync(new AuditWriteRequest(actor, action, subjectType, subjectId, correlationId, organizationId, projectId, before, after, ip), cancellationToken);

    private static string Required(string? value, int maxLength, string field)
    {
        var normalized = value?.Trim() ?? string.Empty;
        if (normalized.Length == 0) throw new ArgumentException($"{field} is required.");
        return normalized.Length <= maxLength ? normalized : normalized[..maxLength];
    }

    private static string Limit(string? value, int maxLength)
    {
        var normalized = value?.Trim() ?? string.Empty;
        return normalized.Length <= maxLength ? normalized : normalized[..maxLength];
    }

    private static string ValidateProjectStatus(string status) => status is "فعال" or "متوقف" or "در انتظار گزارش"
        ? status
        : throw new ArgumentException("Invalid admin project status.");

    private static AdminOrganizationProfileView ToView(AdminOrganizationProfile x) => new(x.OrganizationId, x.Name, x.Manager, x.Mobile, x.ActivityArea, x.UpdatedAtUtc);
    private static AdminManagedProjectView ToView(AdminManagedProject x) => new(x.Id, x.Name, x.Province, x.Track, x.FundingPercent, x.FundingTarget, x.Status, x.Stage, x.UpdatedAtUtc);
    private static AdminNewsArticleView ToView(AdminNewsArticle x) => new(x.Id, x.Title, x.Summary, x.Status, x.UpdatedAtUtc);
    private static AdminHeroVideoMetaView ToMeta(AdminHeroVideo x) => new(x.FileName, x.ContentType, x.Size, x.UpdatedAtUtc);
}
