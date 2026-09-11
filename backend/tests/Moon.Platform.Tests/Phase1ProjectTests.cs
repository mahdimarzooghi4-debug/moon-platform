using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase1ProjectTests : IAsyncLifetime
{
    private readonly string _connectionString = Environment.GetEnvironmentVariable("TEST_POSTGRES")
        ?? "Host=localhost;Port=5432;Database=moon;Username=moon;Password=moon-local-only";

    public async Task InitializeAsync()
    {
        await using var db = CreateDbContext();
        await db.Database.EnsureDeletedAsync();
        await db.Database.MigrateAsync();
    }

    public async Task DisposeAsync()
    {
        await using var db = CreateDbContext();
        await db.Database.EnsureDeletedAsync();
    }

    [Fact]
    public async Task Project_versions_lock_and_submit_is_non_bypassable()
    {
        await using var db = CreateDbContext();
        var writer = new AuditWriter(db);
        var service = new ProjectService(db, writer);

        var organization = new Organization
        {
            Name = "Project Owner Organization",
            Type = "startup"
        };
        var user = new AppUser
        {
            ExternalSubject = "project-owner-subject",
            DisplayName = "Project Owner"
        };
        db.Organizations.Add(organization);
        db.Users.Add(user);
        db.Memberships.Add(new Membership
        {
            UserId = user.Id,
            OrganizationId = organization.Id,
            RoleId = SystemRoles.StartupId
        });
        await db.SaveChangesAsync();

        var created = await service.CreateAsync(
            organization.Id,
            "نسخه اول پروژه",
            "شرح نسخه اول",
            user.ExternalSubject,
            "project-create",
            "127.0.0.1");

        Assert.True(created.Succeeded);
        Assert.NotNull(created.Project);
        Assert.Equal(ProjectStatuses.Draft, created.Project!.Status);
        Assert.Equal(1, created.Project.CurrentVersionNumber);
        var firstVersion = Assert.Single(created.Project.Versions);
        Assert.False(firstVersion.IsLocked);

        var versioned = await service.AddVersionAsync(
            created.Project.ProjectId,
            "نسخه دوم پروژه",
            "شرح نسخه دوم",
            user.ExternalSubject,
            "project-version",
            "127.0.0.1");

        Assert.True(versioned.Succeeded);
        Assert.NotNull(versioned.Project);
        Assert.Equal(2, versioned.Project!.CurrentVersionNumber);
        Assert.Equal(2, versioned.Project.Versions.Count);
        Assert.True(versioned.Project.Versions.Single(x => x.VersionNumber == 1).IsLocked);
        Assert.False(versioned.Project.Versions.Single(x => x.VersionNumber == 2).IsLocked);

        var submitted = await service.SubmitAsync(
            created.Project.ProjectId,
            user.ExternalSubject,
            "project-submit",
            "127.0.0.1");

        Assert.True(submitted.Succeeded);
        Assert.NotNull(submitted.Project);
        Assert.Equal(ProjectStatuses.Submitted, submitted.Project!.Status);
        Assert.NotNull(submitted.Project.SubmittedAtUtc);
        Assert.True(submitted.Project.Versions.Single(x => x.VersionNumber == 2).IsLocked);

        var afterSubmitVersionAttempt = await service.AddVersionAsync(
            created.Project.ProjectId,
            "نسخه غیرمجاز",
            "نباید ثبت شود",
            user.ExternalSubject,
            "project-version-after-submit",
            "127.0.0.1");
        Assert.False(afterSubmitVersionAttempt.Succeeded);
        Assert.Equal("project_version_locked", afterSubmitVersionAttempt.ErrorCode);

        var afterSubmitAgain = await service.SubmitAsync(
            created.Project.ProjectId,
            user.ExternalSubject,
            "project-submit-again",
            "127.0.0.1");
        Assert.False(afterSubmitAgain.Succeeded);
        Assert.Equal("project_invalid_state", afterSubmitAgain.ErrorCode);

        var storedVersion = await db.ProjectVersions.SingleAsync(
            x => x.ProjectId == created.Project.ProjectId && x.VersionNumber == 2);
        storedVersion.IsLocked = false;
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());

        var actions = await db.AuditEvents
            .Where(x => x.ProjectId == created.Project.ProjectId.ToString())
            .Select(x => x.Action)
            .ToListAsync();
        Assert.Contains("project.created", actions);
        Assert.Contains("project.version.created", actions);
        Assert.Contains("project.submitted", actions);
    }

    [Fact]
    public async Task Project_creation_requires_active_organization_membership()
    {
        await using var db = CreateDbContext();
        var service = new ProjectService(db, new AuditWriter(db));
        var organization = new Organization
        {
            Name = "Restricted Organization",
            Type = "startup"
        };
        db.Organizations.Add(organization);
        await db.SaveChangesAsync();

        var result = await service.CreateAsync(
            organization.Id,
            "Unauthorized Project",
            "No membership",
            "unknown-subject",
            "project-forbidden",
            "127.0.0.1");

        Assert.False(result.Succeeded);
        Assert.Equal("project_access_denied", result.ErrorCode);
        Assert.Empty(await db.Projects.ToListAsync());
        Assert.Empty(await db.ProjectVersions.ToListAsync());
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .Options;

        return new MoonDbContext(options);
    }
}
