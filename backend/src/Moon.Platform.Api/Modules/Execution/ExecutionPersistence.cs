using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Moon.Platform.Api.Modules.Execution;

public sealed class MoonExecutionModelCustomizer(ModelCustomizerDependencies dependencies)
    : ModelCustomizer(dependencies)
{
    public override void Customize(ModelBuilder modelBuilder, DbContext context)
    {
        base.Customize(modelBuilder, context);
        ConfigureExecution(modelBuilder);
    }

    private static void ConfigureExecution(ModelBuilder modelBuilder)
    {
        ConfigureStage(modelBuilder.Entity<ExecutionStage>());
        ConfigureReport(modelBuilder.Entity<ProgressReport>());
    }

    private static void ConfigureStage(EntityTypeBuilder<ExecutionStage> entity)
    {
        entity.ToTable("execution_stages", "moon");
        entity.HasKey(x => x.Id);
        entity.Property(x => x.Title).HasMaxLength(200).IsRequired();
        entity.Property(x => x.Description).HasMaxLength(4000).IsRequired();
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
}
