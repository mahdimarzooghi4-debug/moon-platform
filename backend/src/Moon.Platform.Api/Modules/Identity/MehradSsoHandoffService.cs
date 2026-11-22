using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Mehrad;

namespace Moon.Platform.Api.Modules.Identity;

/// <summary>
/// Server-only, one-use transfer of a *validated* Mehrad subject to an explicit
/// confirmation step. Does not create a Moon login, cookie, or privilege.
/// The future HTTP adapter must bind the random proof to an HttpOnly Secure
/// SameSite cookie and require an explicit same-origin, CSRF-protected POST.
/// </summary>
public sealed class MehradSsoHandoffService(MoonDbContext db)
{
    private static readonly TimeSpan MaximumLifetime = TimeSpan.FromMinutes(5);

    public async Task<MehradHandoffTicket> IssueAsync(
        MehradVerifiedIdentity verifiedIdentity,
        Guid merchantId,
        CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(verifiedIdentity);
        var now = DateTimeOffset.UtcNow;
        if (merchantId == Guid.Empty ||
            !Guid.TryParse(verifiedIdentity.MehradSubject, out var mehradSubject) ||
            mehradSubject == Guid.Empty ||
            verifiedIdentity.TokenExpiresAtUtc <= now)
            throw new SecurityTokenException("Valid Mehrad identity and merchant ID required.");

        var expires = now.Add(MaximumLifetime);
        if (verifiedIdentity.TokenExpiresAtUtc < expires)
            expires = verifiedIdentity.TokenExpiresAtUtc;

        // Store only a digest; the full random proof must never be in logs or URLs.
        var proof = Convert.ToHexStringLower(RandomNumberGenerator.GetBytes(32));
        var record = new MehradSsoHandoff
        {
            MerchantId = merchantId,
            MehradSubject = mehradSubject,
            ProofSha256 = HashProof(proof),
            CreatedAtUtc = now,
            ExpiresAtUtc = expires
        };
        db.MehradSsoHandoffs.Add(record);
        await db.SaveChangesAsync(cancellationToken);
        return new MehradHandoffTicket(record.Id, proof, expires);
    }

    public async Task<MehradHandoffIdentity?> ConsumeAsync(
        Guid handoffId,
        Guid merchantId,
        string? proof,
        CancellationToken cancellationToken = default)
    {
        if (handoffId == Guid.Empty || merchantId == Guid.Empty ||
            proof is null || proof.Length != 64 ||
            !proof.All(c => c is >= '0' and <= '9' or >= 'a' and <= 'f'))
            return null;

        var now = DateTimeOffset.UtcNow;
        var hash = HashProof(proof);

        // Atomic conditional UPDATE: exactly one parallel request can consume it.
        var consumed = await db.MehradSsoHandoffs
            .Where(x => x.Id == handoffId &&
                x.MerchantId == merchantId &&
                x.ProofSha256 == hash &&
                x.CreatedAtUtc <= now &&
                x.ExpiresAtUtc > now &&
                x.ConsumedAtUtc == null)
            .ExecuteUpdateAsync(
                setters => setters.SetProperty(x => x.ConsumedAtUtc, (DateTimeOffset?)now),
                cancellationToken);
        if (consumed != 1) return null;

        var row = await db.MehradSsoHandoffs.AsNoTracking()
            .SingleAsync(x => x.Id == handoffId, cancellationToken);
        return new MehradHandoffIdentity(row.MerchantId, row.MehradSubject);
    }

    private static string HashProof(string proof) =>
        Convert.ToHexStringLower(SHA256.HashData(Encoding.ASCII.GetBytes(proof)));
}

public sealed record MehradHandoffTicket(
    Guid Id, string Proof, DateTimeOffset ExpiresAtUtc);

/// <summary>
/// Proof of a recent Mehrad provider callback, NOT a Moon authorization context.
/// </summary>
public sealed record MehradHandoffIdentity(Guid MerchantId, Guid MehradSubject);
