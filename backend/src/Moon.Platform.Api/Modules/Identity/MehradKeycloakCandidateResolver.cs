using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Modules.Identity;

/// <summary>
/// Resolves a Keycloak *candidate* only after atomically consuming a valid,
/// short-lived verified Mehrad handoff. Does not authenticate a browser, issue
/// Keycloak/Moon tokens or grant any role. No HTTP endpoint exposes this service.
/// </summary>
public sealed class MehradKeycloakCandidateResolver(
    MoonDbContext db,
    MehradSsoHandoffService handoffs)
{
    public async Task<MehradKeycloakCandidate?> ResolveFromOneTimeProofAsync(
        Guid handoffId,
        Guid merchantId,
        string? proof,
        CancellationToken cancellationToken = default)
    {
        // This is the only way to obtain a candidate; guessing a provider UUID
        // or constructing an identity record cannot bypass the one-use proof.
        var consumed = await handoffs.ConsumeAsync(
            handoffId, merchantId, proof, cancellationToken);
        if (consumed is null) return null;

        // Exact immutable provider-to-Moon link, originally created by a
        // separate authenticated and explicitly confirmed Moon user.
        // Missing mappings and deactivated Moon accounts fail closed.
        // The candidate must still be checked by Keycloak against its OWN
        // enabled user and browser-authentication transaction before login.
        return await (
            from link in db.MehradIdentityLinks.AsNoTracking()
            join user in db.Users.AsNoTracking() on link.UserId equals user.Id
            where link.MerchantId == consumed.MerchantId &&
                  link.MehradSubject == consumed.MehradSubject &&
                  user.IsActive &&
                  user.ExternalSubject != ""
            select new MehradKeycloakCandidate(user.Id, user.ExternalSubject)
        ).SingleOrDefaultAsync(cancellationToken);
    }
}

/// <summary>
/// A database candidate, not a Keycloak identity assertion, session,
/// access token, grant, role or authenticated user.
/// </summary>
public sealed record MehradKeycloakCandidate(Guid MoonUserId, string KeycloakSubject);
