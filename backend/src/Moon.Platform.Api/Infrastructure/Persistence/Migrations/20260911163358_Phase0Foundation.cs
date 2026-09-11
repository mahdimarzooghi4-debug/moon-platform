using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Phase0Foundation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "moon");

            migrationBuilder.CreateTable(
                name: "audit_events",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ActorSubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Action = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    SubjectType = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    SubjectId = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    OrganizationId = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: true),
                    ProjectId = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: true),
                    BeforeJson = table.Column<string>(type: "text", nullable: true),
                    AfterJson = table.Column<string>(type: "text", nullable: true),
                    IpAddress = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: true),
                    CorrelationId = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    OccurredAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_audit_events", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "organizations",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Type = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    CreatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_organizations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "roles",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Code = table.Column<string>(type: "character varying(80)", maxLength: 80, nullable: false),
                    Name = table.Column<string>(type: "character varying(160)", maxLength: 160, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExternalSubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    DisplayName = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "memberships",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    OrganizationId = table.Column<Guid>(type: "uuid", nullable: false),
                    RoleId = table.Column<Guid>(type: "uuid", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_memberships", x => x.Id);
                    table.ForeignKey(
                        name: "FK_memberships_organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalSchema: "moon",
                        principalTable: "organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_memberships_roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "moon",
                        principalTable: "roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_memberships_users_UserId",
                        column: x => x.UserId,
                        principalSchema: "moon",
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                schema: "moon",
                table: "roles",
                columns: new[] { "Id", "Code", "Name" },
                values: new object[,]
                {
                    { new Guid("00000000-0000-0000-0000-000000000001"), "product_owner", "مدیر محصول / خانه خالق" },
                    { new Guid("00000000-0000-0000-0000-000000000002"), "evaluator", "ارزیاب" },
                    { new Guid("00000000-0000-0000-0000-000000000003"), "company", "شرکت تأمین‌کننده" },
                    { new Guid("00000000-0000-0000-0000-000000000004"), "startup", "استارتاپ مجری" },
                    { new Guid("00000000-0000-0000-0000-000000000005"), "finance", "کارشناس مالی ماه" },
                    { new Guid("00000000-0000-0000-0000-000000000006"), "supervisor", "نهاد ناظر" },
                    { new Guid("00000000-0000-0000-0000-000000000007"), "auditor", "ممیز" },
                    { new Guid("00000000-0000-0000-0000-000000000008"), "system_admin", "مدیر سامانه" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_audit_events_CorrelationId",
                schema: "moon",
                table: "audit_events",
                column: "CorrelationId");

            migrationBuilder.CreateIndex(
                name: "IX_audit_events_OccurredAtUtc",
                schema: "moon",
                table: "audit_events",
                column: "OccurredAtUtc");

            migrationBuilder.CreateIndex(
                name: "IX_audit_events_SubjectType_SubjectId",
                schema: "moon",
                table: "audit_events",
                columns: new[] { "SubjectType", "SubjectId" });

            migrationBuilder.CreateIndex(
                name: "IX_memberships_OrganizationId_IsActive",
                schema: "moon",
                table: "memberships",
                columns: new[] { "OrganizationId", "IsActive" });

            migrationBuilder.CreateIndex(
                name: "IX_memberships_RoleId",
                schema: "moon",
                table: "memberships",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_memberships_UserId_OrganizationId_RoleId",
                schema: "moon",
                table: "memberships",
                columns: new[] { "UserId", "OrganizationId", "RoleId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_organizations_Type_Status",
                schema: "moon",
                table: "organizations",
                columns: new[] { "Type", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_roles_Code",
                schema: "moon",
                table: "roles",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_users_ExternalSubject",
                schema: "moon",
                table: "users",
                column: "ExternalSubject",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "audit_events",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "memberships",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "organizations",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "roles",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "users",
                schema: "moon");
        }
    }
}
