using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Phase3ImpactCloseout : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "execution_closeouts",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    ClosedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    ClosedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    Note = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_closeouts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_closeouts_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "execution_impact_reports",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    StageId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProgressReportId = table.Column<Guid>(type: "uuid", nullable: false),
                    AttemptNumber = table.Column<int>(type: "integer", nullable: false),
                    SupersedesImpactReportId = table.Column<Guid>(type: "uuid", nullable: true),
                    Title = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: false),
                    Summary = table.Column<string>(type: "character varying(8000)", maxLength: 8000, nullable: false),
                    Methodology = table.Column<string>(type: "character varying(8000)", maxLength: 8000, nullable: false),
                    Geography = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true),
                    Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    SubmittedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    SubmittedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    ReviewedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    ReviewedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    ReviewNote = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true),
                    PublishedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    PublishedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_impact_reports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_impact_reports_execution_impact_reports_Supersede~",
                        column: x => x.SupersedesImpactReportId,
                        principalSchema: "moon",
                        principalTable: "execution_impact_reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_execution_impact_reports_execution_stages_StageId",
                        column: x => x.StageId,
                        principalSchema: "moon",
                        principalTable: "execution_stages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_execution_impact_reports_progress_reports_ProgressReportId",
                        column: x => x.ProgressReportId,
                        principalSchema: "moon",
                        principalTable: "progress_reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_execution_impact_reports_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "execution_impact_financial_snapshots",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ImpactReportId = table.Column<Guid>(type: "uuid", nullable: false),
                    Currency = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: false),
                    ApprovedExpenseMinor = table.Column<long>(type: "bigint", nullable: false),
                    ReleasedMinor = table.Column<long>(type: "bigint", nullable: false),
                    CapturedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_impact_financial_snapshots", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_impact_financial_snapshots_execution_impact_repor~",
                        column: x => x.ImpactReportId,
                        principalSchema: "moon",
                        principalTable: "execution_impact_reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "execution_impact_metrics",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ImpactReportId = table.Column<Guid>(type: "uuid", nullable: false),
                    Key = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    Label = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Unit = table.Column<string>(type: "character varying(80)", maxLength: 80, nullable: false),
                    Aggregation = table.Column<string>(type: "character varying(16)", maxLength: 16, nullable: false),
                    TargetValue = table.Column<decimal>(type: "numeric(20,4)", precision: 20, scale: 4, nullable: true),
                    ActualValue = table.Column<decimal>(type: "numeric(20,4)", precision: 20, scale: 4, nullable: false),
                    SortOrder = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_impact_metrics", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_impact_metrics_execution_impact_reports_ImpactRep~",
                        column: x => x.ImpactReportId,
                        principalSchema: "moon",
                        principalTable: "execution_impact_reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_execution_closeouts_ProjectId",
                schema: "moon",
                table: "execution_closeouts",
                column: "ProjectId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_execution_impact_financial_snapshots_ImpactReportId_Currency",
                schema: "moon",
                table: "execution_impact_financial_snapshots",
                columns: new[] { "ImpactReportId", "Currency" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_execution_impact_metrics_ImpactReportId_Key",
                schema: "moon",
                table: "execution_impact_metrics",
                columns: new[] { "ImpactReportId", "Key" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_execution_impact_reports_ProgressReportId",
                schema: "moon",
                table: "execution_impact_reports",
                column: "ProgressReportId");

            migrationBuilder.CreateIndex(
                name: "IX_execution_impact_reports_ProjectId_Status",
                schema: "moon",
                table: "execution_impact_reports",
                columns: new[] { "ProjectId", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_execution_impact_reports_PublishedAtUtc",
                schema: "moon",
                table: "execution_impact_reports",
                column: "PublishedAtUtc");

            migrationBuilder.CreateIndex(
                name: "IX_execution_impact_reports_StageId_AttemptNumber",
                schema: "moon",
                table: "execution_impact_reports",
                columns: new[] { "StageId", "AttemptNumber" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_execution_impact_reports_SupersedesImpactReportId",
                schema: "moon",
                table: "execution_impact_reports",
                column: "SupersedesImpactReportId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "execution_closeouts",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "execution_impact_financial_snapshots",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "execution_impact_metrics",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "execution_impact_reports",
                schema: "moon");
        }
    }
}
