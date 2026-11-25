using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;

[DbContext(typeof(MoonDbContext))]
[Migration("20261125160000_StartupApplications")]
public sealed class StartupApplications : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "startup_applications",
            schema: "moon",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "uuid", nullable: false),
                TrackingCode = table.Column<string>(maxLength: 48, nullable: false),
                Name = table.Column<string>(maxLength: 160, nullable: false),
                ContactName = table.Column<string>(maxLength: 120, nullable: false),
                Mobile = table.Column<string>(maxLength: 11, nullable: false),
                Email = table.Column<string>(maxLength: 254, nullable: false),
                Description = table.Column<string>(maxLength: 4000, nullable: false),
                Team = table.Column<string>(maxLength: 4000, nullable: true),
                Product = table.Column<string>(maxLength: 4000, nullable: true),
                Audience = table.Column<string>(maxLength: 200, nullable: true),
                PitchDeck = table.Column<byte[]>(type: "bytea", nullable: true),
                ActivationSubject = table.Column<string>(maxLength: 36, nullable: true),
                Status = table.Column<string>(maxLength: 32, nullable: false),
                SubmittedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
            },
            constraints: table => table.PrimaryKey("PK_startup_applications", application => application.Id));

        migrationBuilder.CreateIndex(
            name: "IX_startup_applications_TrackingCode",
            schema: "moon",
            table: "startup_applications",
            column: "TrackingCode",
            unique: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "startup_applications", schema: "moon");
    }
}
