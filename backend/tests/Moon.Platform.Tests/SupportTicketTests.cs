using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Support;
using Xunit;
namespace Moon.Platform.Tests;
public sealed class SupportTicketTests : IAsyncLifetime
{
    private readonly string connection = Environment.GetEnvironmentVariable("TEST_POSTGRES") ?? "Host=localhost;Port=5432;Database=moon;Username=moon;Password=moon-local-only";
    private MoonDbContext CreateDb() => new(new DbContextOptionsBuilder<MoonDbContext>().UseNpgsql(connection).Options);
    public async Task InitializeAsync(){await using var db = CreateDb();await db.Database.EnsureDeletedAsync();await db.Database.MigrateAsync();}
    public async Task DisposeAsync(){await using var db = CreateDb();await db.Database.EnsureDeletedAsync();}
    [Fact]
    public async Task Verified_request_projection_has_unique_receipt_and_concurrent_updates_fail_closed()
    {
        var input = new SubmitSupportRequest(Guid.NewGuid(), "Contact", "09123456789", null, "company", "contact", "Title", "Message", null);
        Assert.True(SupportValidation.TryCreate(input, out var ticket));
        Assert.True(SupportValidation.SameSubmission(ticket, ticket));
        Assert.True(SupportValidation.TryCreate(input with { Title = "Changed" }, out var altered));
        Assert.False(SupportValidation.SameSubmission(ticket, altered));
        Assert.False(SupportValidation.TryCreate(input with { Mobile = "123" }, out _));
        Assert.False(SupportValidation.ValidUpdate(new UpdateSupportRequest(1, "closed", "", false)));
        Assert.False(SupportEndpoints.MayManage(null));
        await using var db = CreateDb();db.Set<SupportTicket>().Add(ticket);await db.SaveChangesAsync();
        await using var another = CreateDb();var stale = await another.Set<SupportTicket>().SingleAsync(x => x.Id == ticket.Id);
        ticket.Status = "in_review";ticket.Revision++;await db.SaveChangesAsync();
        stale.Status = "closed";stale.ResponseNote = "Done";stale.Revision++;
        await Assert.ThrowsAsync<DbUpdateConcurrencyException>(() => another.SaveChangesAsync());
    }
}
