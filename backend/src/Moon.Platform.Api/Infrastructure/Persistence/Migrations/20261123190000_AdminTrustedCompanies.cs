using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Moon.Platform.Api.Infrastructure.Persistence;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    [DbContext(typeof(MoonDbContext))]
    [Migration("20261123190000_AdminTrustedCompanies")]
    public partial class AdminTrustedCompanies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admin_trusted_companies",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", Npgsql.EntityFrameworkCore.PostgreSQL.Metadata.NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    SortOrder = table.Column<int>(type: "integer", nullable: false),
                    IsPublished = table.Column<bool>(type: "boolean", nullable: false),
                    LogoFileName = table.Column<string>(type: "character varying(240)", maxLength: 240, nullable: true),
                    LogoContentType = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: true),
                    LogoSize = table.Column<long>(type: "bigint", nullable: true),
                    LogoData = table.Column<byte[]>(type: "bytea", nullable: true),
                    UpdatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table => table.PrimaryKey("PK_admin_trusted_companies", x => x.Id));

            migrationBuilder.CreateIndex(
                name: "IX_admin_trusted_companies_IsPublished_SortOrder",
                schema: "moon",
                table: "admin_trusted_companies",
                columns: new[] { "IsPublished", "SortOrder" });

            migrationBuilder.Sql("""
                INSERT INTO moon.admin_trusted_companies ("Name", "SortOrder", "IsPublished", "UpdatedAtUtc") VALUES
                ('راهکار نو', 1, TRUE, CURRENT_TIMESTAMP),
                ('پیشرو', 2, TRUE, CURRENT_TIMESTAMP),
                ('هم‌آفرین', 3, TRUE, CURRENT_TIMESTAMP),
                ('فردای روشن', 4, TRUE, CURRENT_TIMESTAMP),
                ('توسعه آریا', 5, TRUE, CURRENT_TIMESTAMP),
                ('سپهر نو', 6, TRUE, CURRENT_TIMESTAMP);
                """);
        }

        protected override void Down(MigrationBuilder migrationBuilder) =>
            migrationBuilder.DropTable(name: "admin_trusted_companies", schema: "moon");
    }
}
