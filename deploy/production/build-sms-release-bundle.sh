#!/usr/bin/env bash
# Offline candidate build only; does not connect to production or load images there.
set -Eeuo pipefail
if [ "$#" -ne 2 ]; then echo "Usage: build-sms-release-bundle.sh exact-sha output-dir" >&2; exit 2; fi
sha="$1"
out="$2"
[[ "$sha" =~ ^[a-f0-9]{40}$ ]]
root="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$root"
test "$(git rev-parse HEAD)" = "$sha"
git diff --quiet
git diff --cached --quiet
mkdir -p "$out"
out="$(cd "$out" && pwd)"
archive="$out/moon-sms-release-$sha.tar.gz"
manifest="$out/manifest.json"
test ! -e "$archive" && test ! -e "$manifest" && test ! -e "$archive.partial"
trap 'rm -f -- "$archive.partial"' EXIT
mvn -B -q -f backend/keycloak/sms-login/pom.xml -Dmaven.test.skip=true package
docker build -t "moon-platform/keycloak:$sha" backend/keycloak/sms-login
docker build -t "moon-platform/api:$sha" -f backend/Dockerfile backend
docker build --build-arg VITE_OIDC_AUTHORITY=https://mahcsr.ir/identity/realms/moon \
  --build-arg VITE_OIDC_CLIENT_ID=moon-web --build-arg VITE_API_BASE_URL=https://mahcsr.ir \
  --build-arg NODE_OPTIONS=--max-old-space-size=5120 -t "moon-platform/web:$sha" .
docker save "moon-platform/api:$sha" "moon-platform/web:$sha" "moon-platform/keycloak:$sha" | gzip -1 > "$archive.partial"
mv "$archive.partial" "$archive"
python3 deploy/production/sms-release-bundle.py create --release-sha "$sha" --archive "$archive" --manifest "$manifest"
python3 deploy/production/sms-release-bundle.py verify --release-sha "$sha" --archive "$archive" --manifest "$manifest"
