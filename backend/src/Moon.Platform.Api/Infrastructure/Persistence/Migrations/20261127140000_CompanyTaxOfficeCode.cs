using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;

[DbContext(typeof(MoonDbContext))]
[Migration("20261127140000_CompanyTaxOfficeCode")]
public sealed class CompanyTaxOfficeCode : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
        => migrationBuilder.AddColumn<string>("TaxOfficeCode", "company_applications", maxLength: 50, schema: "moon", nullable: true);

    protected override void Down(MigrationBuilder migrationBuilder)
        => migrationBuilder.DropColumn("TaxOfficeCode", "company_applications", schema: "moon");
}
