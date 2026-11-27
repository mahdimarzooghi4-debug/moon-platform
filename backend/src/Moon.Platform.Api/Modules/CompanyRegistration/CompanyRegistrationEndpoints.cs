using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.StartupRegistration;
using Moon.Platform.Api.Modules.Identity;

namespace Moon.Platform.Api.Modules.CompanyRegistration;

public static class CompanyRegistrationEndpoints
{
    public static void MapCompanyRegistrationEndpoints(this IEndpointRouteBuilder endpoints)
    {
        var group = endpoints.MapGroup("/api/v1/public/company-applications").AllowAnonymous();
        group.MapGet("/availability", (IConfiguration config, StartupMobileVerification verification) =>
            Results.Ok(new { enabled = Enabled(config) && verification.Enabled }));

        group.MapPost("/", async Task<IResult> (HttpRequest request, MoonDbContext db,
            IConfiguration config, StartupMobileVerification verification, CancellationToken ct) =>
        {
            if (!Enabled(config) || !verification.Enabled)
                return Results.StatusCode(503);
            if (!request.HasFormContentType || request.ContentLength > 20L * 1024 * 1024 + 64 * 1024)
                return Results.BadRequest(new { code = "invalid_company_application" });
            var form = await request.ReadFormAsync(ct);
            string Value(string name) => form[name].ToString().Trim();
            var mobile = Value("mobile");
            var fields = new (string Value, int Max, bool Required)[]
            {
                (Value("nationalIdentifier"), 11, true),
                (Value("name"), 200, true),
                (Value("registrationNumber"), 40, true),
                (Value("legalForm"), 100, true),
                (Value("registrationDate"), 40, true),
                (Value("activityField"), 200, true),
                (Value("website"), 254, false),
                (Value("province"), 100, true),
                (Value("city"), 100, true),
                (Value("address"), 1000, true),
                (Value("postalCode"), 10, true),
                (Value("representativeFirstName"), 100, true),
                (Value("representativeLastName"), 100, true),
                (Value("representativeNationalId"), 10, true),
                (Value("representativePosition"), 120, true),
                (Value("mobile"), 11, true),
                (Value("email"), 254, true),
                (Value("telephone"), 40, false),
                (Value("economicCode"), 50, true),
                (Value("taxIdentifier"), 50, true),
                (Value("taxFileStatus"), 100, true),
                (Value("taxOffice"), 200, false),
                (Value("notes"), 4000, false),
            };
            if (fields.Any(x => x.Value.Length > x.Max || (x.Required && x.Value.Length == 0))
                || (Value("representativeFirstName").Length + 1 + Value("representativeLastName").Length > 200)
                || !CompanyRegistrationValidation.IsDigits(Value("nationalIdentifier"), 11)
                || !CompanyRegistrationValidation.IsDigits(Value("representativeNationalId"), 10)
                || !CompanyRegistrationValidation.IsDigits(Value("postalCode"), 10)
                || !StartupMobileVerification.IsMobile(mobile)
                || !System.Net.Mail.MailAddress.TryCreate(Value("email"), out var address)
                || address.Address != Value("email")
                || Value("confirmAccuracy") != "true" || Value("acceptTerms") != "true"
                || Value("acknowledgeArticle172") != "true")
                return Results.BadRequest(new { code = "invalid_company_application" });

            var documentNames = new[] { "representativeLetter", "establishmentNotice", "articlesOfAssociation", "latestChangesNotice" };
            var files = documentNames.Select(name => form.Files.GetFile(name)).ToArray();
            const long limit = 10 * 1024 * 1024;
            if (form.Files.Count != documentNames.Length || files.Any(file => file is null || file.Length is < 1 or > limit)
                || files.Skip(1).Sum(file => file!.Length) > limit)
                return Results.BadRequest(new { code = "invalid_company_documents" });

            var contents = new List<byte[]>();
            foreach (var file in files)
            {
                using var stream = new MemoryStream((int)file!.Length);
                await file.CopyToAsync(stream, ct);
                var bytes = stream.ToArray();
                if (!CompanyRegistrationValidation.IsSupportedDocument(bytes))
                    return Results.BadRequest(new { code = "invalid_company_documents" });
                contents.Add(bytes);
            }

            if (!verification.TryReserve(mobile, Value("mobileVerification")))
                return Results.BadRequest(new { code = "mobile_verification_required" });
            var saved = false;
            try
            {
                var application = new CompanyApplication
                {
                    NationalIdentifier = Value("nationalIdentifier"),
                    Name = Value("name"),
                    RegistrationNumber = Value("registrationNumber"),
                    LegalForm = Value("legalForm"),
                    RegistrationDate = Value("registrationDate"),
                    ActivityField = Value("activityField"),
                    Website = Value("website"),
                    Province = Value("province"),
                    City = Value("city"),
                    Address = Value("address"),
                    PostalCode = Value("postalCode"),
                    RepresentativeFirstName = Value("representativeFirstName"),
                    RepresentativeLastName = Value("representativeLastName"),
                    RepresentativeNationalId = Value("representativeNationalId"),
                    RepresentativePosition = Value("representativePosition"),
                    Mobile = Value("mobile"),
                    Email = Value("email"),
                    Telephone = Value("telephone"),
                    EconomicCode = Value("economicCode"),
                    TaxIdentifier = Value("taxIdentifier"),
                    TaxFileStatus = Value("taxFileStatus"),
                    TaxOffice = Value("taxOffice"),
                    Notes = Value("notes"),
                    RepresentativeLetter = contents[0],
                    EstablishmentNotice = contents[1],
                    ArticlesOfAssociation = contents[2],
                    LatestChangesNotice = contents[3],
                    TrackingCode = StartupTrackingCode.Create(), Status = "pending_review"
                };
                db.CompanyApplications.Add(application);
                db.OutboxMessages.Add(RegistrationSmsNotice.Create(application.Id, RegistrationSmsNotice.Submitted, "company_application"));
                for (var attempt = 0; ; attempt++)
                {
                    try { await db.SaveChangesAsync(ct); break; }
                    catch (DbUpdateException error) when (error.InnerException is Npgsql.PostgresException pg
                        && pg.SqlState == Npgsql.PostgresErrorCodes.UniqueViolation
                        && pg.ConstraintName == "IX_company_applications_TrackingCode")
                    {
                        if (attempt >= 4) return Results.StatusCode(503);
                        application.TrackingCode = StartupTrackingCode.Create();
                    }
                }
                saved = true;
                return Results.Created("/api/v1/public/company-applications/track", new { application.TrackingCode, application.Status });
            }
            finally { verification.Complete(mobile, saved); }
        });

        group.MapPost("/track", async Task<IResult> (CompanyTrackingRequest request, MoonDbContext db,
            IConfiguration config, StartupMobileVerification verification, CancellationToken ct) =>
        {
            if (!Enabled(config) || !verification.Enabled) return Results.StatusCode(503);
            var code = StartupTrackingCode.Normalize(request.TrackingCode);
            if (code is not { Length: 10 } || !StartupMobileVerification.IsMobile(request.Mobile))
                return Results.NotFound();
            var mobile = request.Mobile!;
            if (!verification.TryReserve(mobile, request.MobileVerification ?? ""))
                return Results.BadRequest(new { code = "mobile_verification_required" });
            try
            {
                var result = await db.CompanyApplications.AsNoTracking()
                    .Where(x => x.TrackingCode == code && x.Mobile == mobile)
                    .Select(x => new { x.Status, x.SubmittedAtUtc }).SingleOrDefaultAsync(ct);
                return result is null ? Results.NotFound() : Results.Ok(result);
            }
            finally { verification.Complete(mobile, submitted: true); }
        });
    }

    private static bool Enabled(IConfiguration config) => config.GetValue<bool>("CompanyRegistration:Enabled");
}

internal sealed record CompanyTrackingRequest(string? TrackingCode, string? Mobile, string? MobileVerification);

public static class CompanyRegistrationValidation
{
    // Structural validation only; never claims verification by a government registry.
    public static bool IsDigits(string value, int count) => value.Length == count && value.All(char.IsAsciiDigit);
    public static bool IsSupportedDocument(byte[] bytes) =>
        bytes.AsSpan().StartsWith("%PDF-"u8)
        || bytes.AsSpan().StartsWith(new byte[] { 0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a })
        || bytes.AsSpan().StartsWith(new byte[] { 0xff, 0xd8, 0xff });
}
