using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;

[DbContext(typeof(MoonDbContext))]
[Migration("20261127120000_CompanyApplications")]
public sealed class CompanyApplications : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "company_applications",
            schema: "moon",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "uuid", nullable: false),
                SubmittedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                NationalIdentifier = table.Column<string>(maxLength: 11, nullable: false),
                Name = table.Column<string>(maxLength: 200, nullable: false),
                RegistrationNumber = table.Column<string>(maxLength: 40, nullable: false),
                LegalForm = table.Column<string>(maxLength: 100, nullable: false),
                RegistrationDate = table.Column<string>(maxLength: 40, nullable: false),
                ActivityField = table.Column<string>(maxLength: 200, nullable: false),
                Website = table.Column<string>(maxLength: 254, nullable: true),
                Province = table.Column<string>(maxLength: 100, nullable: false),
                City = table.Column<string>(maxLength: 100, nullable: false),
                Address = table.Column<string>(maxLength: 1000, nullable: false),
                PostalCode = table.Column<string>(maxLength: 10, nullable: false),
                RepresentativeFirstName = table.Column<string>(maxLength: 100, nullable: false),
                RepresentativeLastName = table.Column<string>(maxLength: 100, nullable: false),
                RepresentativeNationalId = table.Column<string>(maxLength: 10, nullable: false),
                RepresentativePosition = table.Column<string>(maxLength: 120, nullable: false),
                Mobile = table.Column<string>(maxLength: 11, nullable: false),
                Email = table.Column<string>(maxLength: 254, nullable: false),
                Telephone = table.Column<string>(maxLength: 40, nullable: true),
                EconomicCode = table.Column<string>(maxLength: 50, nullable: false),
                TaxIdentifier = table.Column<string>(maxLength: 50, nullable: false),
                TaxFileStatus = table.Column<string>(maxLength: 100, nullable: false),
                TaxOffice = table.Column<string>(maxLength: 200, nullable: true),
                Notes = table.Column<string>(maxLength: 4000, nullable: true),
                TrackingCode = table.Column<string>(maxLength: 10, nullable: false),
                Status = table.Column<string>(maxLength: 32, nullable: false),
                RepresentativeLetter = table.Column<byte[]>(type: "bytea", nullable: false),
                EstablishmentNotice = table.Column<byte[]>(type: "bytea", nullable: false),
                ArticlesOfAssociation = table.Column<byte[]>(type: "bytea", nullable: false),
                LatestChangesNotice = table.Column<byte[]>(type: "bytea", nullable: false)
            },
            constraints: table => table.PrimaryKey("PK_company_applications", application => application.Id));
        migrationBuilder.CreateIndex(
            name: "IX_company_applications_TrackingCode",
            schema: "moon", table: "company_applications", column: "TrackingCode", unique: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
        => migrationBuilder.DropTable(name: "company_applications", schema: "moon");
}
