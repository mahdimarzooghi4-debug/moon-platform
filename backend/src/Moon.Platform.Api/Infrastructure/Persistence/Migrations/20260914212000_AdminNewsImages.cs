using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Moon.Platform.Api.Infrastructure.Persistence;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    [DbContext(typeof(MoonDbContext))]
    [Migration("20260914212000_AdminNewsImages")]
    public partial class AdminNewsImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageFileName",
                schema: "moon",
                table: "admin_news_articles",
                type: "character varying(240)",
                maxLength: 240,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageContentType",
                schema: "moon",
                table: "admin_news_articles",
                type: "character varying(120)",
                maxLength: 120,
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ImageSize",
                schema: "moon",
                table: "admin_news_articles",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "ImageData",
                schema: "moon",
                table: "admin_news_articles",
                type: "bytea",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "ImageFileName", schema: "moon", table: "admin_news_articles");
            migrationBuilder.DropColumn(name: "ImageContentType", schema: "moon", table: "admin_news_articles");
            migrationBuilder.DropColumn(name: "ImageSize", schema: "moon", table: "admin_news_articles");
            migrationBuilder.DropColumn(name: "ImageData", schema: "moon", table: "admin_news_articles");
        }
    }
}
