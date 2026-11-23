#!/usr/bin/env bash
# Operator-triggered, two-database logical backup. Do NOT replace off-host backups.
set -Eeuo pipefail
if [ "$#" -ne 1 ]; then
  echo "Usage: bash deploy/production/backup-databases.sh /absolute/backup/directory" >&2
  exit 2
fi
output_dir="$1"
case "$output_dir" in
  /*) ;;
  *) echo "Backup destination must be an absolute path." >&2; exit 2 ;;
esac

script_dir="$(cd -- "$(dirname -- "$0")" && pwd)"
env_file="$script_dir/.env.production"
if [ ! -f "$env_file" ]; then
  echo "Missing protected deployment environment." >&2
  exit 1
fi

umask 077
mkdir -p -- "$output_dir"
now="$(date -u +%Y%m%dT%H%M%SZ)"
moon_file="$output_dir/moon-$now.dump"
identity_file="$output_dir/keycloak-$now.dump"
tmp_moon="$moon_file.partial"
tmp_identity="$identity_file.partial"
trap 'rm -f -- "$tmp_moon" "$tmp_identity"' EXIT

docker compose --env-file "$env_file" -f "$script_dir/compose.yaml" \
  exec -T moon-db pg_dump -U moon -d moon -Fc > "$tmp_moon"
test -s "$tmp_moon"
docker compose --env-file "$env_file" -f "$script_dir/compose.yaml" \
  exec -T keycloak-db pg_dump -U keycloak -d keycloak -Fc > "$tmp_identity"
test -s "$tmp_identity"

mv -- "$tmp_moon" "$moon_file"
mv -- "$tmp_identity" "$identity_file"
sha256sum "$moon_file" "$identity_file" > "$output_dir/sha256-$now.txt"
echo "Both logical backups completed. Store encrypted copies off-host."
echo "A restore drill and RPO/RTO policy are mandatory before live traffic."
