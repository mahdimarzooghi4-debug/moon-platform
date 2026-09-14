using System.Security.Claims;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Identity;

namespace Moon.Platform.Api.Modules.AdminManagement;

public static class AdminNewsImageEndpoints
{
    private const long MaxNewsImageBytes = 8L * 1024L * 1024L;
    private static readonly HashSet<string> AllowedImageTypes = new(StringComparer.OrdinalIgnoreCase)
    {
        "image/jpeg",
        "image/png",
        "image/webp"
    };

    public static IEndpointRouteBuilder MapAdminNewsImageEndpoints(this IEndpointRouteBuilder endpoints)
    {
        var admin = endpoints
            .MapGroup("/api/v1/admin/management/content/news")
            .RequireAuthorization(AdminAccessPolicies.SystemAdmin);

        admin.MapGet("/{id}/image", async Task<IResult> (
            string id,
            MoonDbContext dbContext,
            CancellationToken cancellationToken) =>
        {
            var item = await dbContext.Set<AdminNewsArticle>()
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
            if (item?.ImageData is null || item.ImageData.Length == 0 || string.IsNullOrWhiteSpace(item.ImageContentType))
            {
                return Results.NotFound();
            }

            return Results.File(item.ImageData, item.ImageContentType, fileDownloadName: null, enableRangeProcessing: false);
        });

        admin.MapPut("/{id}/image", async Task<IResult> (
            string id,
            HttpRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            MoonDbContext dbContext,
            IAuditWriter auditWriter,
            CancellationToken cancellationToken) =>
        {
            if (!request.HasFormContentType)
            {
                return Results.BadRequest(new { code = "news_image_required", message = "Upload the news image as multipart/form-data." });
            }

            var form = await request.ReadFormAsync(cancellationToken);
            var file = form.Files.GetFile("file") ?? form.Files.FirstOrDefault();
            if (file is null || file.Length <= 0)
            {
                return Results.BadRequest(new { code = "news_image_required", message = "News image file is required." });
            }
            if (file.Length > MaxNewsImageBytes)
            {
                return Results.BadRequest(new { code = "news_image_too_large", message = "News image must be 8 MB or smaller." });
            }
            if (!AllowedImageTypes.Contains(file.ContentType))
            {
                return Results.BadRequest(new { code = "news_image_invalid_type", message = "News image must be JPEG, PNG, or WebP." });
            }

            var item = await dbContext.Set<AdminNewsArticle>().SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
            if (item is null) return Results.NotFound(new { code = "news_not_found" });

            var before = JsonSerializer.Serialize(new
            {
                item.ImageFileName,
                item.ImageContentType,
                item.ImageSize
            });

            await using var stream = new MemoryStream((int)file.Length);
            await file.CopyToAsync(stream, cancellationToken);
            item.ImageFileName = file.FileName.Length <= 240 ? file.FileName : file.FileName[..240];
            item.ImageContentType = file.ContentType;
            item.ImageSize = file.Length;
            item.ImageData = stream.ToArray();
            item.UpdatedAtUtc = DateTimeOffset.UtcNow;
            await dbContext.SaveChangesAsync(cancellationToken);

            var after = JsonSerializer.Serialize(new
            {
                item.ImageFileName,
                item.ImageContentType,
                item.ImageSize
            });
            await auditWriter.AppendAsync(new AuditWriteRequest(
                RequireActor(principal),
                "admin.content.news.image.save",
                "news",
                id,
                context.TraceIdentifier,
                null,
                null,
                before,
                after,
                context.Connection.RemoteIpAddress?.ToString()), cancellationToken);

            return Results.Ok(new
            {
                newsId = id,
                fileName = item.ImageFileName,
                contentType = item.ImageContentType,
                size = item.ImageSize,
                updatedAtUtc = item.UpdatedAtUtc
            });
        });

        admin.MapDelete("/{id}/image", async Task<IResult> (
            string id,
            ClaimsPrincipal principal,
            HttpContext context,
            MoonDbContext dbContext,
            IAuditWriter auditWriter,
            CancellationToken cancellationToken) =>
        {
            var item = await dbContext.Set<AdminNewsArticle>().SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
            if (item is null) return Results.NotFound(new { code = "news_not_found" });
            if (item.ImageData is null || item.ImageData.Length == 0) return Results.NoContent();

            var before = JsonSerializer.Serialize(new
            {
                item.ImageFileName,
                item.ImageContentType,
                item.ImageSize
            });
            item.ImageFileName = null;
            item.ImageContentType = null;
            item.ImageSize = null;
            item.ImageData = null;
            item.UpdatedAtUtc = DateTimeOffset.UtcNow;
            await dbContext.SaveChangesAsync(cancellationToken);

            await auditWriter.AppendAsync(new AuditWriteRequest(
                RequireActor(principal),
                "admin.content.news.image.delete",
                "news",
                id,
                context.TraceIdentifier,
                null,
                null,
                before,
                null,
                context.Connection.RemoteIpAddress?.ToString()), cancellationToken);
            return Results.NoContent();
        });

        var publicContent = endpoints.MapGroup("/api/v1/public/content/news");
        publicContent.MapGet("/{id}/image", async Task<IResult> (
            string id,
            MoonDbContext dbContext,
            CancellationToken cancellationToken) =>
        {
            var item = await dbContext.Set<AdminNewsArticle>()
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.Id == id && x.Status == "published", cancellationToken);
            if (item?.ImageData is null || item.ImageData.Length == 0 || string.IsNullOrWhiteSpace(item.ImageContentType))
            {
                return Results.NotFound();
            }

            return Results.File(item.ImageData, item.ImageContentType, fileDownloadName: null, enableRangeProcessing: false);
        });

        return endpoints;
    }

    private static string RequireActor(ClaimsPrincipal principal)
    {
        var actor = principal.FindFirstValue("sub");
        if (string.IsNullOrWhiteSpace(actor)) throw new InvalidOperationException("Authenticated identity is missing the required 'sub' claim.");
        return actor;
    }
}
