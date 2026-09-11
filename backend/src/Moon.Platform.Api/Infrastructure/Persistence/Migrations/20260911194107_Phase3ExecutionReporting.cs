using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Phase3ExecutionReporting : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "execution_stages",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    SequenceNumber = table.Column<int>(type: "integer", nullable: false),
                    Title = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Description = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: false),
                    Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    CreatedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    CreatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    ActivatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CompletedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_stages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_stages_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "progress_reports",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    StageId = table.Column<Guid>(type: "uuid", nullable: false),
                    AttemptNumber = table.Column<int>(type: "integer", nullable: false),
                    SubmittedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Summary = table.Column<string>(type: "character varying(8000)", maxLength: 8000, nullable: false),
                    Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    SubmittedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    ReviewedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    ReviewedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    ReviewNote = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_progress_reports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_progress_reports_execution_stages_StageId",
                        column: x => x.StageId,
                        principalSchema: "moon",
                        principalTable: "execution_stages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_progress_reports_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_execution_stages_ProjectId_SequenceNumber",
                schema: "moon",
                table: "execution_stages",
                columns: new[] { "ProjectId", "SequenceNumber" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_execution_stages_ProjectId_Status",
                schema: "moon",
                table: "execution_stages",
                columns: new[] { "ProjectId", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_progress_reports_ProjectId_Status",
                schema: "moon",
                table: "progress_reports",
                columns: new[] { "ProjectId", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_progress_reports_StageId_AttemptNumber",
                schema: "moon",
                table: "progress_reports",
                columns: new[] { "StageId", "AttemptNumber" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "progress_reports",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "execution_stages",
                schema: "moon");
        }
    }
}
