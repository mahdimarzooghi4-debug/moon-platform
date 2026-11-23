using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;

public partial class AddMehradSsoHandoffs : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "mehrad_sso_handoffs",
            schema: "moon",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "uuid", nullable: false),
                MerchantId = table.Column<Guid>(type: "uuid", nullable: false),
                MehradSubject = table.Column<Guid>(type: "uuid", nullable: false),
                ProofSha256 = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                CreatedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                ExpiresAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                ConsumedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_mehrad_sso_handoffs", x => x.Id);
                table.CheckConstraint(
                    "CK_mehrad_sso_handoffs_consumed_after_created",
                    "\"ConsumedAtUtc\" IS NULL OR \"ConsumedAtUtc\" >= \"CreatedAtUtc\"");
            });
        migrationBuilder.CreateIndex(
            name: "IX_mehrad_sso_handoffs_ExpiresAtUtc",
            schema: "moon",
            table: "mehrad_sso_handoffs",
            column: "ExpiresAtUtc");
        migrationBuilder.CreateIndex(
            name: "IX_mehrad_sso_handoffs_MerchantId_MehradSubject",
            schema: "moon",
            table: "mehrad_sso_handoffs",
            columns: new[] { "MerchantId", "MehradSubject" });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
        => migrationBuilder.DropTable(name: "mehrad_sso_handoffs", schema: "moon");
}
