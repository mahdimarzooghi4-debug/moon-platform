using System.Security.Claims;
using Moon.Platform.Api.Modules.Identity;

namespace Moon.Platform.Api.Modules.AdminManagement;

public static class AdminManagementEndpoints
{
    private const long MaxHeroVideoBytes = 50L * 1024L * 1024L;
    private const long MaxCompanyLogoBytes = 2L * 1024L * 1024L;

    public static IEndpointRouteBuilder MapAdminManagementEndpoints(this IEndpointRouteBuilder endpoints)
    {
        var admin = endpoints
            .MapGroup("/api/v1/admin/management")
            .RequireAuthorization(AdminAccessPolicies.SystemAdmin);

        admin.MapGet("/organization-profiles", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
            Results.Ok(await service.ListOrganizationProfilesAsync(cancellationToken)));

        admin.MapGet("/organization-profiles/{organizationId:guid}", async Task<IResult> (
            Guid organizationId,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var item = await service.GetOrganizationProfileAsync(organizationId, cancellationToken);
            return item is null ? Results.NotFound() : Results.Ok(item);
        });

        admin.MapPut("/organization-profiles/{organizationId:guid}", async Task<IResult> (
            Guid organizationId,
            SaveAdminOrganizationProfileRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            try
            {
                var item = await service.SaveOrganizationProfileAsync(
                    organizationId,
                    request,
                    RequireActor(principal),
                    context.TraceIdentifier,
                    context.Connection.RemoteIpAddress?.ToString(),
                    cancellationToken);
                return item is null
                    ? Results.NotFound(new { code = "startup_not_found", message = "Only existing startup organizations can be edited." })
                    : Results.Ok(item);
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { code = "invalid_startup_profile", message = exception.Message });
            }
        });

        admin.MapGet("/projects", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
            Results.Ok(await service.ListProjectsAsync(cancellationToken)));

        admin.MapGet("/projects/{id}", async Task<IResult> (
            string id,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var item = await service.GetProjectAsync(id, cancellationToken);
            return item is null ? Results.NotFound() : Results.Ok(item);
        });

        admin.MapPut("/projects/{id}", async Task<IResult> (
            string id,
            SaveAdminManagedProjectRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            try
            {
                var item = await service.SaveProjectAsync(
                    id,
                    request,
                    RequireActor(principal),
                    context.TraceIdentifier,
                    context.Connection.RemoteIpAddress?.ToString(),
                    cancellationToken);
                return item is null ? Results.NotFound() : Results.Ok(item);
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { code = "invalid_admin_project", message = exception.Message });
            }
        });

        admin.MapGet("/content/news", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
            Results.Ok(await service.ListNewsAsync(false, cancellationToken)));

        admin.MapPut("/content/news", async Task<IResult> (
            SaveAdminNewsRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            try
            {
                var item = await service.SaveNewsAsync(
                    request,
                    RequireActor(principal),
                    context.TraceIdentifier,
                    context.Connection.RemoteIpAddress?.ToString(),
                    cancellationToken);
                return Results.Ok(item);
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { code = "invalid_news", message = exception.Message });
            }
        });

        admin.MapDelete("/content/news/{id}", async Task<IResult> (
            string id,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var deleted = await service.DeleteNewsAsync(
                id,
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return deleted ? Results.NoContent() : Results.NotFound();
        });

        admin.MapGet("/content/hero/meta", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var item = await service.GetHeroMetaAsync(cancellationToken);
            return item is null ? Results.NoContent() : Results.Ok(item);
        });

        admin.MapPut("/content/hero", async Task<IResult> (
            HttpRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            if (!request.HasFormContentType)
            {
                return Results.BadRequest(new { code = "hero_file_required", message = "Upload the hero video as multipart/form-data." });
            }

            var form = await request.ReadFormAsync(cancellationToken);
            var file = form.Files.GetFile("file") ?? form.Files.FirstOrDefault();
            if (file is null || file.Length <= 0)
            {
                return Results.BadRequest(new { code = "hero_file_required", message = "Hero video file is required." });
            }
            if (file.Length > MaxHeroVideoBytes)
            {
                return Results.BadRequest(new { code = "hero_file_too_large", message = "Hero video must be 50 MB or smaller." });
            }
            if (!file.ContentType.StartsWith("video/", StringComparison.OrdinalIgnoreCase))
            {
                return Results.BadRequest(new { code = "hero_file_invalid_type", message = "Hero asset must be a video file." });
            }

            await using var stream = new MemoryStream((int)file.Length);
            await file.CopyToAsync(stream, cancellationToken);
            var meta = await service.SaveHeroAsync(
                file.FileName,
                file.ContentType,
                stream.ToArray(),
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return Results.Ok(meta);
        });

        admin.MapDelete("/content/hero", async Task<IResult> (
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var deleted = await service.DeleteHeroAsync(
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);
            return deleted ? Results.NoContent() : Results.NotFound();
        });

        admin.MapGet("/content/trusted-companies", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) => Results.Ok(await service.ListTrustedCompaniesAsync(false, cancellationToken)));

        admin.MapPost("/content/trusted-companies", async Task<IResult> (
            SaveAdminTrustedCompanyRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            try
            {
                var item = await service.SaveTrustedCompanyAsync(null, request, RequireActor(principal), context.TraceIdentifier, context.Connection.RemoteIpAddress?.ToString(), cancellationToken);
                return Results.Created($"/api/v1/admin/management/content/trusted-companies/{item.Id}", item);
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { code = "invalid_trusted_company", message = exception.Message });
            }
        });

        admin.MapPut("/content/trusted-companies/{id:int}", async Task<IResult> (
            int id,
            SaveAdminTrustedCompanyRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            try
            {
                return Results.Ok(await service.SaveTrustedCompanyAsync(id, request, RequireActor(principal), context.TraceIdentifier, context.Connection.RemoteIpAddress?.ToString(), cancellationToken));
            }
            catch (KeyNotFoundException)
            {
                return Results.NotFound();
            }
            catch (ArgumentException exception)
            {
                return Results.BadRequest(new { code = "invalid_trusted_company", message = exception.Message });
            }
        });

        admin.MapDelete("/content/trusted-companies/{id:int}", async Task<IResult> (
            int id,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var deleted = await service.DeleteTrustedCompanyAsync(id, RequireActor(principal), context.TraceIdentifier, context.Connection.RemoteIpAddress?.ToString(), cancellationToken);
            return deleted ? Results.NoContent() : Results.NotFound();
        });

        admin.MapPut("/content/trusted-companies/{id:int}/logo", async Task<IResult> (
            int id,
            HttpRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            if (!request.HasFormContentType) return Results.BadRequest(new { code = "company_logo_required", message = "Upload a logo using multipart/form-data." });
            var form = await request.ReadFormAsync(cancellationToken);
            var file = form.Files.GetFile("file") ?? form.Files.FirstOrDefault();
            if (file is null || file.Length <= 0) return Results.BadRequest(new { code = "company_logo_required", message = "Company logo file is required." });
            if (file.Length > MaxCompanyLogoBytes) return Results.BadRequest(new { code = "company_logo_too_large", message = "Company logo must be 2 MB or smaller." });
            if (file.ContentType is not ("image/jpeg" or "image/png" or "image/webp")) return Results.BadRequest(new { code = "company_logo_invalid_type", message = "Company logo must be JPEG, PNG or WebP." });
            await using var stream = new MemoryStream((int)file.Length);
            await file.CopyToAsync(stream, cancellationToken);
            try
            {
                return Results.Ok(await service.SaveTrustedCompanyLogoAsync(id, file.FileName, file.ContentType, stream.ToArray(), RequireActor(principal), context.TraceIdentifier, context.Connection.RemoteIpAddress?.ToString(), cancellationToken));
            }
            catch (KeyNotFoundException)
            {
                return Results.NotFound();
            }
        });

        admin.MapGet("/content/trusted-companies/{id:int}/logo", async Task<IResult> (
            int id,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var logo = await service.GetTrustedCompanyLogoAsync(id, false, cancellationToken);
            return logo is null ? Results.NotFound() : Results.File(logo.Data, logo.ContentType, fileDownloadName: null);
        });

        admin.MapDelete("/content/trusted-companies/{id:int}/logo", async Task<IResult> (
            int id,
            ClaimsPrincipal principal,
            HttpContext context,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var deleted = await service.DeleteTrustedCompanyLogoAsync(id, RequireActor(principal), context.TraceIdentifier, context.Connection.RemoteIpAddress?.ToString(), cancellationToken);
            return deleted ? Results.NoContent() : Results.NotFound();
        });

        var publicContent = endpoints.MapGroup("/api/v1/public/content");

        publicContent.MapGet("/news", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
            Results.Ok(await service.ListNewsAsync(true, cancellationToken)));

        publicContent.MapGet("/trusted-companies", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) => Results.Ok(
                (await service.ListTrustedCompaniesAsync(true, cancellationToken))
                .Select(x => new PublicTrustedCompanyView(x.Id, x.Name, x.SortOrder, x.HasLogo))));

        publicContent.MapGet("/trusted-companies/{id:int}/logo", async Task<IResult> (
            int id,
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var logo = await service.GetTrustedCompanyLogoAsync(id, true, cancellationToken);
            return logo is null ? Results.NotFound() : Results.File(logo.Data, logo.ContentType, fileDownloadName: null);
        });

        publicContent.MapGet("/hero/meta", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var meta = await service.GetHeroMetaAsync(cancellationToken);
            return meta is null ? Results.NoContent() : Results.Ok(meta);
        });

        publicContent.MapGet("/hero", async Task<IResult> (
            IAdminManagementService service,
            CancellationToken cancellationToken) =>
        {
            var hero = await service.GetHeroAsync(cancellationToken);
            return hero is null
                ? Results.NotFound()
                : Results.File(hero.Data, hero.ContentType, fileDownloadName: null, enableRangeProcessing: true);
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
