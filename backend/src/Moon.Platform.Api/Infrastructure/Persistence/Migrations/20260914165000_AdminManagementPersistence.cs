using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    public partial class AdminManagementPersistence : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admin_hero_video",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false),
                    FileName = table.Column<string>(type: "character varying(240)", maxLength: 240, nullable: false),
                    ContentType = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    Size = table.Column<long>(type: "bigint", nullable: false),
                    Data = table.Column<byte[]>(type: "bytea", nullable: false),
                    UpdatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table => table.PrimaryKey("PK_admin_hero_video", x => x.Id));

            migrationBuilder.CreateTable(
                name: "admin_managed_projects",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Province = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    Track = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    FundingPercent = table.Column<int>(type: "integer", nullable: false),
                    FundingTarget = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    Status = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: false),
                    Stage = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    UpdatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table => table.PrimaryKey("PK_admin_managed_projects", x => x.Id));

            migrationBuilder.CreateTable(
                name: "admin_news_articles",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    Title = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: false),
                    Summary = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: false),
                    Status = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    UpdatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table => table.PrimaryKey("PK_admin_news_articles", x => x.Id));

            migrationBuilder.CreateTable(
                name: "admin_organization_profiles",
                schema: "moon",
                columns: table => new
                {
                    OrganizationId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Manager = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Mobile = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    ActivityArea = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: false),
                    UpdatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admin_organization_profiles", x => x.OrganizationId);
                    table.ForeignKey(
                        name: "FK_admin_organization_profiles_organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalSchema: "moon",
                        principalTable: "organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_admin_managed_projects_Status_Province",
                schema: "moon",
                table: "admin_managed_projects",
                columns: new[] { "Status", "Province" });

            migrationBuilder.CreateIndex(
                name: "IX_admin_news_articles_Status_UpdatedAtUtc",
                schema: "moon",
                table: "admin_news_articles",
                columns: new[] { "Status", "UpdatedAtUtc" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "admin_hero_video", schema: "moon");
            migrationBuilder.DropTable(name: "admin_managed_projects", schema: "moon");
            migrationBuilder.DropTable(name: "admin_news_articles", schema: "moon");
            migrationBuilder.DropTable(name: "admin_organization_profiles", schema: "moon");
        }
    }
}
