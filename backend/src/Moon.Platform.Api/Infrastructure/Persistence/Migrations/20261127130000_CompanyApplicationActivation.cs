using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;

[DbContext(typeof(MoonDbContext))]
[Migration("20261127130000_CompanyApplicationActivation")]
public sealed class CompanyApplicationActivation : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<string>("ActivationSubject", "company_applications", maxLength: 36, schema: "moon", nullable: true);
        migrationBuilder.AddColumn<Guid>("ActivatedOrganizationId", "company_applications", type: "uuid", schema: "moon", nullable: true);
    }
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropColumn("ActivationSubject", "company_applications", schema: "moon");
        migrationBuilder.DropColumn("ActivatedOrganizationId", "company_applications", schema: "moon");
    }
}
