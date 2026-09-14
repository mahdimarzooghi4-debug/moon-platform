using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Moon.Platform.Api.Modules.AdminManagement;

namespace Moon.Platform.Api.Modules.Execution;

public sealed class MoonExecutionModelCustomizer(ModelCustomizerDependencies dependencies)
    : ModelCustomizer(dependencies)
{
    public override void Customize(ModelBuilder modelBuilder, DbContext context)
    {
        base.Customize(modelBuilder, context);
        ConfigureExecution(modelBuilder);
        ConfigureAdminManagement(modelBuilder);
    }

    private static void ConfigureExecution(ModelBuilder modelBuilder)
    {
        ConfigureStage(modelBuilder.Entity<ExecutionStage>());
        ConfigureReport(modelBuilder.Entity<ProgressReport>());
        modelBuilder.Entity<ExecutionExpense>();
        modelBuilder.Entity<ExecutionRisk>();
        modelBuilder.Entity<ExecutionFreezeEvent>();
        modelBuilder.Entity<ExecutionDisbursement>();
        ConfigureImpactReport(modelBuilder.Entity<ExecutionImpactReport>());
        ConfigureImpactMetric(modelBuilder.Entity<ExecutionImpactMetric>());
        ConfigureImpactFinancialSnapshot(modelBuilder.Entity<ExecutionImpactFinancialSnapshot>());
        ConfigureCloseout(modelBuilder.Entity<ExecutionCloseout>());
    }

    private static void ConfigureAdminManagement(ModelBuilder modelBuilder)
    {
        var organizationProfile = modelBuilder.Entity<AdminOrganizationProfile>();
        organizationProfile.ToTable("admin_organization_profiles", "moon");
        organizationProfile.HasKey(x => x.OrganizationId);
        organizationProfile.Property(x => x.Name).HasMaxLength(200).IsRequired();
        organizationProfile.Property(x => x.Manager).HasMaxLength(200).IsRequired();
        organizationProfile.Property(x => x.Mobile).HasMaxLength(32).IsRequired();
        organizationProfile.Property(x => x.ActivityArea).HasMaxLength(300).IsRequired();
        organizationProfile.HasOne<Moon.Platform.Api.Modules.Identity.Organization>()
            .WithMany()
            .HasForeignKey(x => x.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        var project = modelBuilder.Entity<AdminManagedProject>();
        project.ToTable("admin_managed_projects", "moon");
        project.HasKey(x => x.Id);
        project.Property(x => x.Id).HasMaxLength(120).IsRequired();
        project.Property(x => x.Name).HasMaxLength(200).IsRequired();
        project.Property(x => x.Province).HasMaxLength(120).IsRequired();
        project.Property(x => x.Track).HasMaxLength(200).IsRequired();
        project.Property(x => x.FundingTarget).HasMaxLength(120).IsRequired();
        project.Property(x => x.Status).HasMaxLength(40).IsRequired();
        project.Property(x => x.Stage).HasMaxLength(120).IsRequired();
        project.HasIndex(x => new { x.Status, x.Province });

        var news = modelBuilder.Entity<AdminNewsArticle>();
        news.ToTable("admin_news_articles", "moon");
        news.HasKey(x => x.Id);
        news.Property(x => x.Id).HasMaxLength(120).IsRequired();
        news.Property(x => x.Title).HasMaxLength(300).IsRequired();
        news.Property(x => x.Summary).HasMaxLength(4000).IsRequired();
        news.Property(x => x.Status).HasMaxLength(20).IsRequired();
        news.HasIndex(x => new { x.Status, x.UpdatedAtUtc });

        var hero = modelBuilder.Entity<AdminHeroVideo>();
        hero.ToTable("admin_hero_video", "moon");
        hero.HasKey(x => x.Id);
        hero.Property(x => x.FileName).HasMaxLength(240).IsRequired();
        hero.Property(x => x.ContentType).HasMaxLength(120).IsRequired();
        hero.Property(x => x.Data).IsRequired();
    }

    private static void ConfigureStage(EntityTypeBuilder<ExecutionStage> entity)
    {
        entity.ToTable("execution_stages", "moon");
        entity.HasKey(x => x.Id);
        entity.Property(x => x.Title).HasMaxLength(200).IsRequired();
        entity.Property(x => x.Description).HasMaxLength(4000).IsRequired();
        entity.Property(x => x.DisbursementCurrency).HasMaxLength(3);
        entity.Property(x => x.Status).HasMaxLength(32).IsRequired();
        entity.Property(x => x.CreatedBySubject).HasMaxLength(200).IsRequired();
        entity.HasIndex(x => new { x.ProjectId, x.SequenceNumber }).IsUnique();
        entity.HasIndex(x => new { x.ProjectId, x.Status });
        entity.HasOne<Moon.Platform.Api.Modules.Projects.Project>()
            .WithMany()
            .HasForeignKey(x => x.ProjectId)
            .OnDelete(DeleteBehavior.Restrict);
    }

    private static void ConfigureReport(EntityTypeBuilder<ProgressReport> entity)
    {
        entity.ToTable("progress_reports", "moon");
        entity.HasKey(x => x.Id);
        entity.Property(x => x.SubmittedBySubject).HasMaxLength(200).IsRequired();
        entity.Property(x => x.Summary).HasMaxLength(8000).IsRequired();
        entity.Property(x => x.Status).HasMaxLength(32).IsRequired();
        entity.Property(x => x.ReviewedBySubject).HasMaxLength(200);
        entity.Property(x => x.ReviewNote).HasMaxLength(4000);
        entity.HasIndex(x => new { x.StageId, x.AttemptNumber }).IsUnique();
        entity.HasIndex(x => new { x.ProjectId, x.Status });
        entity.HasOne<ExecutionStage>()
            .WithMany()
            .HasForeignKey(x => x.StageId)
            .OnDelete(DeleteBehavior.Restrict);
        entity.HasOne<Moon.Platform.Api.Modules.Projects.Project>()
            .WithMany()
            .HasForeignKey(x => x.ProjectId)
            .OnDelete(DeleteBehavior.Restrict);
    }

    private static void ConfigureImpactReport(EntityTypeBuilder<ExecutionImpactReport> entity)
    {
        entity.ToTable("execution_impact_reports", "moon");
        entity.HasKey(x => x.Id);
        entity.Property(x => x.Title).HasMaxLength(300).IsRequired();
        entity.Property(x => x.Summary).HasMaxLength(8000).IsRequired();
        entity.Property(x => x.Methodology).HasMaxLength(8000).IsRequired();
        entity.Property(x => x.Geography).HasMaxLength(4000);
        entity.Property(x => x.Status).HasMaxLength(32).IsRequired();
        entity.Property(x => x.SubmittedBySubject).HasMaxLength(200).IsRequired();
        entity.Property(x => x.ReviewedBySubject).HasMaxLength(200);
        entity.Property(x => x.ReviewNote).HasMaxLength(4000);
        entity.Property(x => x.PublishedBySubject).HasMaxLength(200);
        entity.HasIndex(x => new { x.StageId, x.AttemptNumber }).IsUnique();
        entity.HasIndex(x => new { x.ProjectId, x.Status });
        entity.HasIndex(x => x.PublishedAtUtc);
        entity.HasOne(x => x.Project).WithMany().HasForeignKey(x => x.ProjectId).OnDelete(DeleteBehavior.Restrict);
        entity.HasOne(x => x.Stage).WithMany().HasForeignKey(x => x.StageId).OnDelete(DeleteBehavior.Restrict);
        entity.HasOne(x => x.ProgressReport).WithMany().HasForeignKey(x => x.ProgressReportId).OnDelete(DeleteBehavior.Restrict);
        entity.HasOne<ExecutionImpactReport>().WithMany().HasForeignKey(x => x.SupersedesImpactReportId).OnDelete(DeleteBehavior.Restrict);
    }

    private static void ConfigureImpactMetric(EntityTypeBuilder<ExecutionImpactMetric> entity)
    {
        entity.ToTable("execution_impact_metrics", "moon");
        entity.HasKey(x => x.Id);
        entity.Property(x => x.Key).HasMaxLength(120).IsRequired();
        entity.Property(x => x.Label).HasMaxLength(200).IsRequired();
        entity.Property(x => x.Unit).HasMaxLength(80).IsRequired();
        entity.Property(x => x.Aggregation).HasMaxLength(16).IsRequired();
        entity.Property(x => x.TargetValue).HasPrecision(20, 4);
        entity.Property(x => x.ActualValue).HasPrecision(20, 4);
        entity.HasIndex(x => new { x.ImpactReportId, x.Key }).IsUnique();
        entity.HasOne(x => x.ImpactReport).WithMany(x => x.Metrics).HasForeignKey(x => x.ImpactReportId).OnDelete(DeleteBehavior.Restrict);
    }

    private static void ConfigureImpactFinancialSnapshot(EntityTypeBuilder<ExecutionImpactFinancialSnapshot> entity)
    {
        entity.ToTable("execution_impact_financial_snapshots", "moon");
        entity.HasKey(x => x.Id);
        entity.Property(x => x.Currency).HasMaxLength(3).IsRequired();
        entity.HasIndex(x => new { x.ImpactReportId, x.Currency }).IsUnique();
        entity.HasOne(x => x.ImpactReport).WithMany(x => x.FinancialSnapshots).HasForeignKey(x => x.ImpactReportId).OnDelete(DeleteBehavior.Restrict);
    }

    private static void ConfigureCloseout(EntityTypeBuilder<ExecutionCloseout> entity)
    {
        entity.ToTable("execution_closeouts", "moon");
        entity.HasKey(x => x.Id);
        entity.Property(x => x.ClosedBySubject).HasMaxLength(200).IsRequired();
        entity.Property(x => x.Note).HasMaxLength(4000).IsRequired();
        entity.HasIndex(x => x.ProjectId).IsUnique();
        entity.HasOne(x => x.Project).WithMany().HasForeignKey(x => x.ProjectId).OnDelete(DeleteBehavior.Restrict);
    }
}
