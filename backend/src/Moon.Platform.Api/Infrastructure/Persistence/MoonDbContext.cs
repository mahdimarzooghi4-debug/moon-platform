using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Modules.Evaluations;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;

namespace Moon.Platform.Api.Infrastructure.Persistence;

public sealed class MoonDbContext(DbContextOptions<MoonDbContext> options) : DbContext(options)
{
    public DbSet<Organization> Organizations => Set<Organization>();
    public DbSet<AppUser> Users => Set<AppUser>();
    public DbSet<Role> Roles => Set<Role>();
    public DbSet<Membership> Memberships => Set<Membership>();
    public DbSet<AuditEvent> AuditEvents => Set<AuditEvent>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<ProjectVersion> ProjectVersions => Set<ProjectVersion>();
    public DbSet<ProjectEvaluation> ProjectEvaluations => Set<ProjectEvaluation>();
    public DbSet<ProjectDecision> ProjectDecisions => Set<ProjectDecision>();
    public DbSet<FundingCommitment> FundingCommitments => Set<FundingCommitment>();

    public override int SaveChanges(bool acceptAllChangesOnSuccess)
    {
        GuardAuditAppendOnly();
        GuardLockedProjectVersions();
        GuardFinalEvaluations();
        GuardDecisionsAppendOnly();
        GuardPublishedProjects();
        GuardCommitmentTerms();
        return base.SaveChanges(acceptAllChangesOnSuccess);
    }

    public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
    {
        GuardAuditAppendOnly();
        GuardLockedProjectVersions();
        GuardFinalEvaluations();
        GuardDecisionsAppendOnly();
        GuardPublishedProjects();
        GuardCommitmentTerms();
        return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("moon");

        modelBuilder.Entity<Organization>(entity =>
        {
            entity.ToTable("organizations");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.Name).HasMaxLength(200).IsRequired();
            entity.Property(x => x.Type).HasMaxLength(50).IsRequired();
            entity.Property(x => x.Status).HasMaxLength(32).IsRequired();
            entity.HasIndex(x => new { x.Type, x.Status });
        });

        modelBuilder.Entity<AppUser>(entity =>
        {
            entity.ToTable("users");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.ExternalSubject).HasMaxLength(200).IsRequired();
            entity.Property(x => x.DisplayName).HasMaxLength(200);
            entity.HasIndex(x => x.ExternalSubject).IsUnique();
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.ToTable("roles");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.Code).HasMaxLength(80).IsRequired();
            entity.Property(x => x.Name).HasMaxLength(160).IsRequired();
            entity.HasIndex(x => x.Code).IsUnique();
            entity.HasData(SystemRoles.Seed());
        });

        modelBuilder.Entity<Membership>(entity =>
        {
            entity.ToTable("memberships");
            entity.HasKey(x => x.Id);
            entity.HasIndex(x => new { x.UserId, x.OrganizationId, x.RoleId }).IsUnique();
            entity.HasIndex(x => new { x.OrganizationId, x.IsActive });
            entity.HasOne<AppUser>().WithMany().HasForeignKey(x => x.UserId).OnDelete(DeleteBehavior.Restrict);
            entity.HasOne<Organization>().WithMany().HasForeignKey(x => x.OrganizationId).OnDelete(DeleteBehavior.Restrict);
            entity.HasOne<Role>().WithMany().HasForeignKey(x => x.RoleId).OnDelete(DeleteBehavior.Restrict);
        });

        modelBuilder.Entity<Project>(entity =>
        {
            entity.ToTable("projects");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.Status).HasMaxLength(32).IsRequired();
            entity.Property(x => x.CreatedBySubject).HasMaxLength(200).IsRequired();
            entity.Property(x => x.PublishedBySubject).HasMaxLength(200);
            entity.HasIndex(x => new { x.OrganizationId, x.Status });
            entity.HasOne<Organization>().WithMany().HasForeignKey(x => x.OrganizationId).OnDelete(DeleteBehavior.Restrict);
        });

        modelBuilder.Entity<ProjectVersion>(entity =>
        {
            entity.ToTable("project_versions");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.Title).HasMaxLength(200).IsRequired();
            entity.Property(x => x.Description).HasMaxLength(8000).IsRequired();
            entity.Property(x => x.CreatedBySubject).HasMaxLength(200).IsRequired();
            entity.HasIndex(x => new { x.ProjectId, x.VersionNumber }).IsUnique();
            entity.HasOne<Project>().WithMany().HasForeignKey(x => x.ProjectId).OnDelete(DeleteBehavior.Restrict);
        });

        modelBuilder.Entity<ProjectEvaluation>(entity =>
        {
            entity.ToTable("project_evaluations");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.EvaluatorSubject).HasMaxLength(200).IsRequired();
            entity.Property(x => x.AssignedBySubject).HasMaxLength(200).IsRequired();
            entity.Property(x => x.Status).HasMaxLength(32).IsRequired();
            entity.Property(x => x.ConflictReason).HasMaxLength(2000);
            entity.Property(x => x.Recommendation).HasMaxLength(32);
            entity.Property(x => x.Rationale).HasMaxLength(4000);
            entity.HasIndex(x => new { x.ProjectId, x.ProjectVersionId, x.Status });
            entity.HasIndex(x => new { x.EvaluatorSubject, x.Status });
            entity.HasOne<Project>().WithMany().HasForeignKey(x => x.ProjectId).OnDelete(DeleteBehavior.Restrict);
            entity.HasOne<ProjectVersion>().WithMany().HasForeignKey(x => x.ProjectVersionId).OnDelete(DeleteBehavior.Restrict);
        });

        modelBuilder.Entity<ProjectDecision>(entity =>
        {
            entity.ToTable("project_decisions");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.Outcome).HasMaxLength(32).IsRequired();
            entity.Property(x => x.Reason).HasMaxLength(4000).IsRequired();
            entity.Property(x => x.DecidedBySubject).HasMaxLength(200).IsRequired();
            entity.HasIndex(x => x.ProjectId).IsUnique();
            entity.HasIndex(x => x.EvaluationId).IsUnique();
            entity.HasOne<Project>().WithMany().HasForeignKey(x => x.ProjectId).OnDelete(DeleteBehavior.Restrict);
            entity.HasOne<ProjectEvaluation>().WithMany().HasForeignKey(x => x.EvaluationId).OnDelete(DeleteBehavior.Restrict);
        });

        modelBuilder.Entity<FundingCommitment>(entity =>
        {
            entity.ToTable("funding_commitments");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.CommittedBySubject).HasMaxLength(200).IsRequired();
            entity.Property(x => x.Currency).HasMaxLength(3).IsRequired();
            entity.Property(x => x.Status).HasMaxLength(32).IsRequired();
            entity.Property(x => x.IdempotencyKey).HasMaxLength(128).IsRequired();
            entity.HasIndex(x => new { x.CommittedBySubject, x.IdempotencyKey }).IsUnique();
            entity.HasIndex(x => new { x.ProjectId, x.Status });
            entity.HasOne<Project>().WithMany().HasForeignKey(x => x.ProjectId).OnDelete(DeleteBehavior.Restrict);
        });

        modelBuilder.Entity<AuditEvent>(entity =>
        {
            entity.ToTable("audit_events");
            entity.HasKey(x => x.Id);
            entity.Property(x => x.ActorSubject).HasMaxLength(200).IsRequired();
            entity.Property(x => x.Action).HasMaxLength(120).IsRequired();
            entity.Property(x => x.SubjectType).HasMaxLength(120).IsRequired();
            entity.Property(x => x.SubjectId).HasMaxLength(200).IsRequired();
            entity.Property(x => x.OrganizationId).HasMaxLength(64);
            entity.Property(x => x.ProjectId).HasMaxLength(64);
            entity.Property(x => x.IpAddress).HasMaxLength(64);
            entity.Property(x => x.CorrelationId).HasMaxLength(128).IsRequired();
            entity.HasIndex(x => x.OccurredAtUtc);
            entity.HasIndex(x => x.CorrelationId);
            entity.HasIndex(x => new { x.SubjectType, x.SubjectId });
        });
    }

    private void GuardAuditAppendOnly()
    {
        var illegalMutation = ChangeTracker.Entries<AuditEvent>()
            .Any(entry => entry.State is EntityState.Modified or EntityState.Deleted);

        if (illegalMutation)
        {
            throw new InvalidOperationException("Audit events are append-only and cannot be modified or deleted.");
        }
    }

    private void GuardLockedProjectVersions()
    {
        var illegalMutation = ChangeTracker.Entries<ProjectVersion>()
            .Any(entry =>
                (entry.State is EntityState.Modified or EntityState.Deleted)
                && entry.OriginalValues.GetValue<bool>(nameof(ProjectVersion.IsLocked)));

        if (illegalMutation)
        {
            throw new InvalidOperationException("Locked project versions are immutable and cannot be modified or deleted.");
        }
    }

    private void GuardFinalEvaluations()
    {
        var illegalMutation = ChangeTracker.Entries<ProjectEvaluation>()
            .Any(entry =>
                (entry.State is EntityState.Modified or EntityState.Deleted)
                && entry.OriginalValues.GetValue<string>(nameof(ProjectEvaluation.Status))
                    is EvaluationStatuses.Completed or EvaluationStatuses.ConflictDeclared);

        if (illegalMutation)
        {
            throw new InvalidOperationException("Completed or conflict-disqualified evaluations are immutable.");
        }
    }

    private void GuardDecisionsAppendOnly()
    {
        var illegalMutation = ChangeTracker.Entries<ProjectDecision>()
            .Any(entry => entry.State is EntityState.Modified or EntityState.Deleted);

        if (illegalMutation)
        {
            throw new InvalidOperationException("Project decisions are append-only and cannot be modified or deleted.");
        }
    }

    private void GuardPublishedProjects()
    {
        var illegalMutation = ChangeTracker.Entries<Project>()
            .Any(entry =>
                (entry.State is EntityState.Modified or EntityState.Deleted)
                && entry.OriginalValues.GetValue<string>(nameof(Project.Status)) == ProjectStatuses.Published);

        if (illegalMutation)
        {
            throw new InvalidOperationException("Published projects are immutable and cannot be modified or deleted.");
        }
    }

    private void GuardCommitmentTerms()
    {
        var illegalMutation = ChangeTracker.Entries<FundingCommitment>()
            .Any(entry =>
                entry.State == EntityState.Deleted
                || entry.State == EntityState.Modified
                && (entry.OriginalValues.GetValue<Guid>(nameof(FundingCommitment.ProjectId))
                        != entry.CurrentValues.GetValue<Guid>(nameof(FundingCommitment.ProjectId))
                    || entry.OriginalValues.GetValue<string>(nameof(FundingCommitment.CommittedBySubject))
                        != entry.CurrentValues.GetValue<string>(nameof(FundingCommitment.CommittedBySubject))
                    || entry.OriginalValues.GetValue<long>(nameof(FundingCommitment.AmountMinor))
                        != entry.CurrentValues.GetValue<long>(nameof(FundingCommitment.AmountMinor))
                    || entry.OriginalValues.GetValue<string>(nameof(FundingCommitment.Currency))
                        != entry.CurrentValues.GetValue<string>(nameof(FundingCommitment.Currency))
                    || entry.OriginalValues.GetValue<string>(nameof(FundingCommitment.IdempotencyKey))
                        != entry.CurrentValues.GetValue<string>(nameof(FundingCommitment.IdempotencyKey))
                    || entry.OriginalValues.GetValue<DateTimeOffset>(nameof(FundingCommitment.CreatedAtUtc))
                        != entry.CurrentValues.GetValue<DateTimeOffset>(nameof(FundingCommitment.CreatedAtUtc))));

        if (illegalMutation)
        {
            throw new InvalidOperationException("Funding commitment terms are immutable and commitments cannot be deleted.");
        }
    }
}
