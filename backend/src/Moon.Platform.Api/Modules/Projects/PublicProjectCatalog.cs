using System.Globalization;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Execution;
using Moon.Platform.Api.Modules.Funding;

namespace Moon.Platform.Api.Modules.Projects;

// Explicit public projection. Never serialize the proposal document, actor IDs,
// private evaluation, or individual commitments.
public sealed record PublicProjectCard(
    Guid ProjectId, string Title, string Description, string Startup,
    string? ImpactArea, string? Region, string? TargetGroup,
    DateTimeOffset PublishedAtUtc, bool IsClosed, string? FundingCurrency,
    string? TargetMinor, string? RaisedMinor, decimal? FundingPercent);

public static class PublicProjectCatalog
{
    public static async Task<IReadOnlyList<PublicProjectCard>> ListAsync(
        MoonDbContext db, Guid? projectId, CancellationToken ct = default)
    {
        var rows = await (
            from project in db.Projects.AsNoTracking()
            join version in db.ProjectVersions.AsNoTracking()
                on new { ProjectId = project.Id, Version = project.CurrentVersionNumber }
                equals new { version.ProjectId, Version = version.VersionNumber }
            join organization in db.Organizations.AsNoTracking() on project.OrganizationId equals organization.Id
            where project.Status == ProjectStatuses.Published && project.PublishedAtUtc.HasValue
                && project.ApprovedAtUtc.HasValue && version.IsLocked && version.LockedAtUtc.HasValue
                && organization.Type == "startup" && organization.Status == "active"
                && (!projectId.HasValue || project.Id == projectId.Value)
            orderby project.PublishedAtUtc descending, project.Id
            select new { project.Id, project.PublishedAtUtc, version.Title, version.Description,
                version.ProposalDataJson, version.FundingTargetMinor, version.FundingTargetCurrency,
                Startup = organization.Name,
                IsClosed = db.Set<ExecutionCloseout>().Any(x => x.ProjectId == project.Id) }
        ).ToListAsync(ct);

        var ids = rows.Select(x => x.Id).ToArray();
        var funding = await db.FundingCommitments.AsNoTracking()
            .Where(x => ids.Contains(x.ProjectId) && x.Status == CommitmentStatuses.Reconciled)
            .GroupBy(x => new { x.ProjectId, x.Currency })
            .Select(g => new { g.Key.ProjectId, g.Key.Currency, Amount = g.Sum(x => (decimal)x.AmountMinor) })
            .ToListAsync(ct);
        var amounts = funding.ToDictionary(x => (x.ProjectId, x.Currency), x => x.Amount);
        return rows.Select(x =>
        {
            var currency = x.FundingTargetCurrency;
            var target = x.FundingTargetMinor;
            var validTarget = target.HasValue && target.Value > 0 && !string.IsNullOrWhiteSpace(currency);
            decimal? raised = validTarget ? amounts.GetValueOrDefault((x.Id, currency!)) : null;
            decimal? percent = validTarget ? raised / target!.Value * 100m : null;
            return new PublicProjectCard(x.Id, x.Title, x.Description, x.Startup,
                ReadPublishedField(x.ProposalDataJson, "حوزه اثر اجتماعی"),
                ReadPublishedField(x.ProposalDataJson, "موقعیت / منطقه اجرا"),
                ReadPublishedField(x.ProposalDataJson, "جامعه هدف"),
                x.PublishedAtUtc!.Value, x.IsClosed, validTarget ? currency : null,
                validTarget ? target!.Value.ToString(CultureInfo.InvariantCulture) : null,
                raised?.ToString(CultureInfo.InvariantCulture), percent);
        }).ToArray();
    }

    private static string? ReadPublishedField(string? json, string key)
    {
        if (string.IsNullOrWhiteSpace(json)) return null;
        try
        {
            using var document = JsonDocument.Parse(json);
            if (document.RootElement.ValueKind != JsonValueKind.Object
                || !document.RootElement.TryGetProperty("steps", out var steps) || steps.ValueKind != JsonValueKind.Object
                || !steps.TryGetProperty("1", out var first) || first.ValueKind != JsonValueKind.Object
                || !first.TryGetProperty(key, out var values) || values.ValueKind != JsonValueKind.Array
                || values.GetArrayLength() != 1 || values[0].ValueKind != JsonValueKind.String) return null;
            var value = values[0].GetString()?.Trim();
            // Reject oversized or multi-line values, rather than exposing arbitrary proposal text.
            return string.IsNullOrWhiteSpace(value) || value.Length > 200 || value.Contains('\n') || value.Contains('\r') ? null : value;
        }
        catch (JsonException) { return null; }
    }
}
