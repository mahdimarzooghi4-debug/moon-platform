using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;
[DbContext(typeof(MoonDbContext))]
[Migration("20261127150000_SupportTickets")]
public sealed class SupportTickets : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(name: "support_tickets", schema: "moon", columns: table => new
        {
            Id = table.Column<Guid>(type: "uuid", nullable: false),
            TrackingCode = table.Column<string>(type: "character varying(36)", maxLength: 36, nullable: false),
            Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
            Mobile = table.Column<string>(type: "character varying(11)", maxLength: 11, nullable: false),
            Email = table.Column<string>(type: "character varying(254)", maxLength: 254, nullable: true),
            Audience = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
            Topic = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
            Title = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
            Description = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: false),
            Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
            ResponseNote = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true),
            AssignedToSubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
            Revision = table.Column<int>(type: "integer", nullable: false),
            SubmittedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
            UpdatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
        }, constraints: table => table.PrimaryKey("PK_support_tickets", x => x.Id));
        migrationBuilder.CreateIndex("IX_support_tickets_TrackingCode", "support_tickets", "TrackingCode", schema: "moon", unique: true);
        migrationBuilder.CreateIndex("IX_support_tickets_SubmittedAtUtc", "support_tickets", "SubmittedAtUtc", schema: "moon");
    }
    protected override void Down(MigrationBuilder migrationBuilder) => migrationBuilder.DropTable("support_tickets", schema: "moon");
}
