using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;

[DbContext(typeof(MoonDbContext))]
[Migration("20261126110000_StartupApplicationAttachments")]
public sealed class StartupApplicationAttachments : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>("NationalId", "startup_applications", maxLength: 10, schema: "moon", nullable: true);
        migrationBuilder.AddColumn<byte[]>("Logo", "startup_applications", type: "bytea", schema: "moon", nullable: true);
        migrationBuilder.AddColumn<byte[]>("LegalDocument", "startup_applications", type: "bytea", schema: "moon", nullable: true);
        migrationBuilder.AddColumn<byte[]>("IdentityDocument", "startup_applications", type: "bytea", schema: "moon", nullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn("NationalId", "startup_applications", schema: "moon");
        migrationBuilder.DropColumn("Logo", "startup_applications", schema: "moon");
        migrationBuilder.DropColumn("LegalDocument", "startup_applications", schema: "moon");
        migrationBuilder.DropColumn("IdentityDocument", "startup_applications", schema: "moon");
    }
}
