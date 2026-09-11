using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Projects;
using Npgsql;

namespace Moon.Platform.Api.Modules.Funding;

public interface IFundingService
{
    Task<CommitmentOperationResult> CreateCommitmentAsync(
        Guid projectId,
        long amountMinor,
        string currency,
        string idempotencyKey,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);
}

public sealed class FundingService(MoonDbContext dbContext, IAuditWriter auditWriter) : IFundingService
{
    public async Task<CommitmentOperationResult> CreateCommitmentAsync(
        Guid projectId,
        long amountMinor,
        string currency,
        string idempotencyKey,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        idempotencyKey = idempotencyKey.Trim();
        if (string.IsNullOrWhiteSpace(idempotencyKey) || idempotencyKey.Length > 128)
        {
            return CommitmentOperationResult.Failure(
                "commitment_invalid_idempotency_key",
                "Idempotency-Key is required and must be at most 128 characters.");
        }

        currency = currency.Trim().ToUpperInvariant();
        if (currency.Length != 3 || !currency.All(char.IsLetter))
        {
            return CommitmentOperationResult.Failure(
                "commitment_invalid_currency",
                "Currency must be a three-letter alphabetic code.");
        }

        if (amountMinor <= 0)
        {
            return CommitmentOperationResult.Failure(
                "commitment_invalid_amount",
                "Commitment amount must be greater than zero.");
        }

        var existing = await FindByIdempotencyKeyAsync(actorSubject, idempotencyKey, cancellationToken);
        if (existing is not null)
        {
            return ResolveReplay(existing, projectId, amountMinor, currency);
        }

        var actorIsActive = await dbContext.Users.AsNoTracking()
            .AnyAsync(x => x.ExternalSubject == actorSubject && x.IsActive, cancellationToken);
        if (!actorIsActive)
        {
            return CommitmentOperationResult.Failure(
                "commitment_actor_inactive",
                "Commitment creator must be an active synchronized user.");
        }

        var project = await dbContext.Projects.AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (project is null)
        {
            return CommitmentOperationResult.Failure("project_not_found", "Project was not found.");
        }

        if (!string.Equals(project.Status, ProjectStatuses.Published, StringComparison.Ordinal)
            || project.PublishedAtUtc is null)
        {
            return CommitmentOperationResult.Failure(
                "commitment_project_not_published",
                "Funding commitments are accepted only for published projects.");
        }

        var commitment = new FundingCommitment
        {
            ProjectId = project.Id,
            CommittedBySubject = actorSubject,
            AmountMinor = amountMinor,
            Currency = currency,
            IdempotencyKey = idempotencyKey
        };

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        dbContext.FundingCommitments.Add(commitment);

        try
        {
            await dbContext.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateException exception) when (
            exception.InnerException is PostgresException { SqlState: PostgresErrorCodes.UniqueViolation })
        {
            await transaction.RollbackAsync(cancellationToken);
            dbContext.ChangeTracker.Clear();

            var raced = await FindByIdempotencyKeyAsync(actorSubject, idempotencyKey, cancellationToken);
            return raced is null
                ? CommitmentOperationResult.Failure(
                    "commitment_idempotency_conflict",
                    "Idempotency key was already consumed by another request.")
                : ResolveReplay(raced, projectId, amountMinor, currency);
        }

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "funding.committed",
            "funding_commitment",
            commitment.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            project.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                CommitmentId = commitment.Id,
                commitment.ProjectId,
                commitment.AmountMinor,
                commitment.Currency,
                commitment.Status,
                commitment.CreatedAtUtc
            }),
            IpAddress: ipAddress), cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return CommitmentOperationResult.Success(ToView(commitment));
    }

    private async Task<FundingCommitment?> FindByIdempotencyKeyAsync(
        string actorSubject,
        string idempotencyKey,
        CancellationToken cancellationToken)
    {
        return await dbContext.FundingCommitments.AsNoTracking()
            .SingleOrDefaultAsync(
                x => x.CommittedBySubject == actorSubject && x.IdempotencyKey == idempotencyKey,
                cancellationToken);
    }

    private static CommitmentOperationResult ResolveReplay(
        FundingCommitment existing,
        Guid projectId,
        long amountMinor,
        string currency)
    {
        if (existing.ProjectId != projectId
            || existing.AmountMinor != amountMinor
            || !string.Equals(existing.Currency, currency, StringComparison.Ordinal))
        {
            return CommitmentOperationResult.Failure(
                "commitment_idempotency_conflict",
                "The same Idempotency-Key cannot be reused with a different commitment payload.");
        }

        return CommitmentOperationResult.Success(ToView(existing), replayed: true);
    }

    private static FundingCommitmentView ToView(FundingCommitment commitment) => new(
        commitment.Id,
        commitment.ProjectId,
        commitment.CommittedBySubject,
        commitment.AmountMinor,
        commitment.Currency,
        commitment.Status,
        commitment.CreatedAtUtc,
        commitment.ReconciledAtUtc);
}
