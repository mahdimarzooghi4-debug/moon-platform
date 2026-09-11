using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Phase2Payment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "funding_payments",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CommitmentId = table.Column<Guid>(type: "uuid", nullable: false),
                    InitiatedBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    AmountMinor = table.Column<long>(type: "bigint", nullable: false),
                    Currency = table.Column<string>(type: "character varying(3)", maxLength: 3, nullable: false),
                    Status = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    IdempotencyKey = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Provider = table.Column<string>(type: "character varying(80)", maxLength: 80, nullable: false),
                    ProviderReference = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    RedirectUrl = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    IntentFailureCode = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: true),
                    CreatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    ProviderNotifiedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    VerifiedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    ReconciledAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    ReconciliationIdempotencyKey = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true),
                    ReconciledBySubject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_funding_payments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_funding_payments_funding_commitments_CommitmentId",
                        column: x => x.CommitmentId,
                        principalSchema: "moon",
                        principalTable: "funding_commitments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "payment_webhook_receipts",
                schema: "moon",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PaymentId = table.Column<Guid>(type: "uuid", nullable: false),
                    Provider = table.Column<string>(type: "character varying(80)", maxLength: 80, nullable: false),
                    EventId = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    ProviderReference = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    PayloadVersion = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    PayloadSha256 = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                    ProviderTimestampUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    ReceivedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payment_webhook_receipts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_payment_webhook_receipts_funding_payments_PaymentId",
                        column: x => x.PaymentId,
                        principalSchema: "moon",
                        principalTable: "funding_payments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_funding_payments_CommitmentId_Status",
                schema: "moon",
                table: "funding_payments",
                columns: new[] { "CommitmentId", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_funding_payments_InitiatedBySubject_IdempotencyKey",
                schema: "moon",
                table: "funding_payments",
                columns: new[] { "InitiatedBySubject", "IdempotencyKey" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_funding_payments_Provider_ProviderReference",
                schema: "moon",
                table: "funding_payments",
                columns: new[] { "Provider", "ProviderReference" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_payment_webhook_receipts_PaymentId",
                schema: "moon",
                table: "payment_webhook_receipts",
                column: "PaymentId");

            migrationBuilder.CreateIndex(
                name: "IX_payment_webhook_receipts_Provider_EventId",
                schema: "moon",
                table: "payment_webhook_receipts",
                columns: new[] { "Provider", "EventId" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "payment_webhook_receipts",
                schema: "moon");

            migrationBuilder.DropTable(
                name: "funding_payments",
                schema: "moon");
        }
    }
}
