using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Phase3ExecutionControls : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ledger_journals_funding_payments_PaymentId",
                schema: "moon",
                table: "ledger_journals");

            migrationBuilder.AlterColumn<Guid>(
                name: "PaymentId",
                schema: "moon",
                table: "ledger_journals",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddColumn<Guid>(
                name: "ExecutionDisbursementId",
                schema: "moon",
                table: "ledger_journals",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DisbursementCurrency",
                schema: "moon",
                table: "execution_stages",
                type: "character varying(3)",
                maxLength: 3,
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DisbursementLimitMinor",
                schema: "moon",
                table: "execution_stages",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "execution_disbursements",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    StageId = table.Column<Guid>(type: "uuid", nullable: false),
                    AmountMinor = table.Column<long>(type: "bigint", nullable: false),
                    Currency = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: false),
                    IdempotencyKey = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    ReleasedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    ReleasedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_disbursements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_disbursements_execution_stages_StageId",
                        column: x => x.StageId,
                        principalSchema: "moon",
                        principalTable: "execution_stages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_execution_disbursements_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "execution_expenses",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    StageId = table.Column<Guid>(type: "uuid", nullable: false),
                    AmountMinor = table.Column<long>(type: "bigint", nullable: false),
                    Currency = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: false),
                    Category = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                    Description = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: false),
                    EvidenceReference = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    SubmittedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    SubmittedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    ReviewedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    ReviewedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    ReviewNote = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_expenses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_expenses_execution_stages_StageId",
                        column: x => x.StageId,
                        principalSchema: "moon",
                        principalTable: "execution_stages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_execution_expenses_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "execution_freeze_events",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    SequenceNumber = table.Column<int>(type: "integer", nullable: false),
                    Action = table.Column<string>(type: "character varying(16)", maxLength: 16, nullable: false),
                    Reason = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: false),
                    ActorSubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    OccurredAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_freeze_events", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_freeze_events_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "execution_risks",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    StageId = table.Column<Guid>(type: "uuid", nullable: false),
                    Severity = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    Title = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Description = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: false),
                    Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    ReportedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    ReportedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    MitigatedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    MitigatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    MitigationNote = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true),
                    ClosedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    ClosedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CloseNote = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_execution_risks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_execution_risks_execution_stages_StageId",
                        column: x => x.StageId,
                        principalSchema: "moon",
                        principalTable: "execution_stages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_execution_risks_projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "moon",
                        principalTable: "projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ledger_journals_ExecutionDisbursementId",
                schema: "moon",
                table: "ledger_journals",
                column: "ExecutionDisbursementId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_execution_disbursements_ProjectId_StageId_Currency",
                schema: "moon",
                table: "execution_disbursements",
                columns: new[] { "ProjectId", "StageId", "Currency" });

            migrationBuilder.CreateIndex(
                name: "IX_execution_disbursements_ReleasedBySubject_IdempotencyKey",
                schema: "moon",
                table: "execution_disbursements",
                columns: new[] { "ReleasedBySubject", "IdempotencyKey" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_execution_disbursements_StageId",
                schema: "moon",
                table: "execution_disbursements",
                column: "StageId");

            migrationBuilder.CreateIndex(
                name: "IX_execution_expenses_ProjectId_StageId_Status",
                schema: "moon",
                table: "execution_expenses",
                columns: new[] { "ProjectId", "StageId", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_execution_expenses_StageId",
                schema: "moon",
                table: "execution_expenses",
                column: "StageId");

            migrationBuilder.CreateIndex(
                name: "IX_execution_freeze_events_ProjectId_OccurredAtUtc",
                schema: "moon",
                table: "execution_freeze_events",
                columns: new[] { "ProjectId", "OccurredAtUtc" });

            migrationBuilder.CreateIndex(
                name: "IX_execution_freeze_events_ProjectId_SequenceNumber",
                schema: "moon",
                table: "execution_freeze_events",
                columns: new[] { "ProjectId", "SequenceNumber" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_execution_risks_ProjectId_Severity_Status",
                schema: "moon",
                table: "execution_risks",
                columns: new[] { "ProjectId", "Severity", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_execution_risks_ProjectId_StageId_Status",
                schema: "moon",
                table: "execution_risks",
                columns: new[] { "ProjectId", "StageId", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_execution_risks_StageId",
                schema: "moon",
                table: "execution_risks",
                column: "StageId");

            migrationBuilder.AddForeignKey(
                name: "FK_ledger_journals_funding_payments_PaymentId",
                schema: "moon",
                table: "ledger_journals",
                column: "PaymentId",
                principalSchema: "moon",
                principalTable: "funding_payments",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ledger_journals_funding_payments_PaymentId",
                schema: "moon",
                table: "ledger_journals");

            migrationBuilder.DropTable(
                name: "execution_disbursements",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "execution_expenses",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "execution_freeze_events",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "execution_risks",
                schema: "moon");

            migrationBuilder.DropIndex(
                name: "IX_ledger_journals_ExecutionDisbursementId",
                schema: "moon",
                table: "ledger_journals");

            migrationBuilder.DropColumn(
                name: "ExecutionDisbursementId",
                schema: "moon",
                table: "ledger_journals");

            migrationBuilder.DropColumn(
                name: "DisbursementCurrency",
                schema: "moon",
                table: "execution_stages");

            migrationBuilder.DropColumn(
                name: "DisbursementLimitMinor",
                schema: "moon",
                table: "execution_stages");

            migrationBuilder.AlterColumn<Guid>(
                name: "PaymentId",
                schema: "moon",
                table: "ledger_journals",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ledger_journals_funding_payments_PaymentId",
                schema: "moon",
                table: "ledger_journals",
                column: "PaymentId",
                principalSchema: "moon",
                principalTable: "funding_payments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
