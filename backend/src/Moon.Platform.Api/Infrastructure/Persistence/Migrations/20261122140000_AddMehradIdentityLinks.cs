using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;

public partial class AddMehradIdentityLinks : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "mehrad_identity_links",
            schema: "moon",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "uuid", nullable: false),
                MerchantId = table.Column<Guid>(type: "uuid", nullable: false),
                MehradSubject = table.Column<Guid>(type: "uuid", nullable: false),
                UserId = table.Column<Guid>(type: "uuid", nullable: false),
                LinkedAtUtc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_mehrad_identity_links", x => x.Id);
                table.ForeignKey(
                    name: "FK_mehrad_identity_links_users_UserId",
                    column: x => x.UserId,
                    principalSchema: "moon",
                    principalTable: "users",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Restrict);
            });
        migrationBuilder.CreateIndex(
            name: "IX_mehrad_identity_links_MerchantId_MehradSubject",
            schema: "moon",
            table: "mehrad_identity_links",
            columns: new[] { "MerchantId", "MehradSubject" },
            unique: true);
        migrationBuilder.CreateIndex(
            name: "IX_mehrad_identity_links_MerchantId_UserId",
            schema: "moon",
            table: "mehrad_identity_links",
            columns: new[] { "MerchantId", "UserId" },
            unique: true);
        migrationBuilder.CreateIndex(
            name: "IX_mehrad_identity_links_UserId",
            schema: "moon",
            table: "mehrad_identity_links",
            column: "UserId");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
        => migrationBuilder.DropTable(name: "mehrad_identity_links", schema: "moon");
}
