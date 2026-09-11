using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Phase1EvaluationDecision : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "project_evaluations",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectVersionId = table.Column<Guid>(type: "uuid", nullable: false),
                    EvaluatorSubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    AssignedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    HasConflict = table.Column<bool>(type: "boolean", nullable: true),
                    ConflictReason = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    ConflictDeclaredAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    Recommendation = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: true),
                    Rationale = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true),
                    AssignedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    CompletedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_project_evaluations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_project_evaluations_project_versions_ProjectVersionId",
                        column: x => x.ProjectVersionId,
                        principalSchema: "moon",
                        principalTable: "project_versions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_project_evaluations_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "project_decisions",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    EvaluationId = table.Column<Guid>(type: "uuid", nullable: false),
                    Outcome = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    Reason = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: false),
                    DecidedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    DecidedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_project_decisions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_project_decisions_project_evaluations_EvaluationId",
                        column: x => x.EvaluationId,
                        principalSchema: "moon",
                        principalTable: "project_evaluations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_project_decisions_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_project_decisions_EvaluationId",
                schema: "moon",
                table: "project_decisions",
                column: "EvaluationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_project_decisions_ProjectId",
                schema: "moon",
                table: "project_decisions",
                column: "ProjectId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_project_evaluations_EvaluatorSubject_Status",
                schema: "moon",
                table: "project_evaluations",
                columns: new[] { "EvaluatorSubject", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_project_evaluations_ProjectId_ProjectVersionId_Status",
                schema: "moon",
                table: "project_evaluations",
                columns: new[] { "ProjectId", "ProjectVersionId", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_project_evaluations_ProjectVersionId",
                schema: "moon",
                table: "project_evaluations",
                column: "ProjectVersionId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "project_decisions",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "project_evaluations",
                schema: "moon");
        }
    }
}
