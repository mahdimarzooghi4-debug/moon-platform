#!/usr/bin/env bash
# Read-only checks: no Docker deployments, migrations, DNS or firewall changes.
set -Eeuo pipefail
script_dir="$(cd -- "$(dirname -- "$0")" && pwd)"
env_file="$script_dir/.env.production"

if [ ! -f "$env_file" ]; then
  echo "Missing local .env.production; copy env.example and provide credentials." >&2
  exit 1
fi

if [ "$(stat -c %a "$env_file")" != "600" ]; then
  echo ".env.production must have mode 600 (chmod 600)." >&2
  exit 1
fi

for command in docker openssl; do
  if ! command -v "$command" >/dev/null 2>&1; then
    echo "Missing required tool: $command" >&2
    exit 1
  fi
done

if grep -Eq '(^|=)REPLACE_' "$env_file"; then
  echo "Replace all example values in .env.production before proceeding." >&2
  exit 1
fi

if ! docker compose --env-file "$env_file" -f "$script_dir/compose.yaml" config --quiet; then
  echo "Compose validation failed. Review the private configuration." >&2
  exit 1
fi

echo "Compose syntax and environment presence verified (read-only)."
echo "NOT verified: TLS issuance, server capacity, backups, Keycloak accounts,"
echo "external SSO, SMS, payments, production security review or launch approval."
