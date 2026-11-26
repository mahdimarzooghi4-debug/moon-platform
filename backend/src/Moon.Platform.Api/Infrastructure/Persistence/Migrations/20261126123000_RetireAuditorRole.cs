using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations;

[DbContext(typeof(MoonDbContext))]
[Migration("20261126123000_RetireAuditorRole")]
public sealed class RetireAuditorRole : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        // Preserve every historical role and membership record. Never silently
        // reactivate a legacy role. Stop deployment if reconciliation is needed.
        migrationBuilder.Sql("""
            DO $$
            BEGIN
                IF EXISTS (
                    SELECT 1 FROM moon.memberships m
                    JOIN moon.roles r ON r."Id" = m."RoleId"
                    WHERE m."IsActive" AND (r."Code" = 'auditor'
                        OR r."Id" = '00000000-0000-0000-0000-000000000007'::uuid)
                ) THEN
                    RAISE EXCEPTION 'Retired auditor memberships remain active; deactivate through audited administration before migration';
                END IF;
            END $$;
            ALTER TABLE moon.memberships ADD CONSTRAINT ck_membership_retired_auditor
                CHECK (NOT "IsActive" OR "RoleId" <> '00000000-0000-0000-0000-000000000007'::uuid);
            """);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.Sql("ALTER TABLE moon.memberships DROP CONSTRAINT ck_membership_retired_auditor;");
        // No restoration or reassignment of memberships.
    }
}
