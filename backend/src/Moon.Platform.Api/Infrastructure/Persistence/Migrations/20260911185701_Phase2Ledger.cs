using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Phase2Ledger : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ledger_journals",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PaymentId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    Currency = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: false),
                    Kind = table.Column<string>(type: "character varying(48)", maxLength: 48, nullable: false),
                    IdempotencyKey = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    CreatedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    CreatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    ReversesJournalId = table.Column<Guid>(type: "uuid", nullable: true),
                    Reason = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ledger_journals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ledger_journals_funding_payments_PaymentId",
                        column: x => x.PaymentId,
                        principalSchema: "moon",
                        principalTable: "funding_payments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ledger_journals_ledger_journals_ReversesJournalId",
                        column: x => x.ReversesJournalId,
                        principalSchema: "moon",
                        principalTable: "ledger_journals",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ledger_entries",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    JournalId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProjectId = table.Column<Guid>(type: "uuid", nullable: false),
                    AccountCode = table.Column<string>(type: "character varying(96)", maxLength: 96, nullable: false),
                    Side = table.Column<string>(type: "character varying(8)", maxLength: 8, nullable: false),
                    AmountMinor = table.Column<long>(type: "bigint", nullable: false),
                    Currency = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: false),
                    CreatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ledger_entries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ledger_entries_ledger_journals_JournalId",
                        column: x => x.JournalId,
                        principalSchema: "moon",
                        principalTable: "ledger_journals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ledger_entries_JournalId",
                schema: "moon",
                table: "ledger_entries",
                column: "JournalId");

            migrationBuilder.CreateIndex(
                name: "IX_ledger_entries_ProjectId_Currency_AccountCode",
                schema: "moon",
                table: "ledger_entries",
                columns: new[] { "ProjectId", "Currency", "AccountCode" });

            migrationBuilder.CreateIndex(
                name: "IX_ledger_journals_CreatedBySubject_IdempotencyKey",
                schema: "moon",
                table: "ledger_journals",
                columns: new[] { "CreatedBySubject", "IdempotencyKey" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ledger_journals_PaymentId_Kind",
                schema: "moon",
                table: "ledger_journals",
                columns: new[] { "PaymentId", "Kind" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ledger_journals_ProjectId_Currency",
                schema: "moon",
                table: "ledger_journals",
                columns: new[] { "ProjectId", "Currency" });

            migrationBuilder.CreateIndex(
                name: "IX_ledger_journals_ReversesJournalId",
                schema: "moon",
                table: "ledger_journals",
                column: "ReversesJournalId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ledger_entries",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "ledger_journals",
                schema: "moon");
        }
    }
}
