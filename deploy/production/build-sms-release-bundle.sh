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
maven_log="$(mktemp)"
trap 'rm -f -- "$archive.partial" "$maven_log"' EXIT
# Maven Central returned HTTP 429 in CI. Retry only this transient failure,
# with a bounded attempt count; any other build failure remains fatal.
for attempt in 1 2 3; do
  if mvn -B -q -f backend/keycloak/sms-login/pom.xml -Dmaven.test.skip=true package >"$maven_log" 2>&1; then
    cat "$maven_log"
    break
  else
    status=$?
    cat "$maven_log"
    if [ "$attempt" -eq 3 ] || ! grep -Eqi 'HTTP Status: 429|status code: 429|429 Too Many Requests' "$maven_log"; then
      exit "$status"
    fi
    echo "Maven Central rate limited candidate build; retry $((attempt + 1))/3" >&2
    sleep "$((attempt * 30))"
  fi
done
docker build -t "moon-platform/keycloak:$sha" backend/keycloak/sms-login
docker build -t "moon-platform/api:$sha" -f backend/Dockerfile backend
# Public ECR has repeatedly returned HTTP 429 for the pinned Node base image.
# Retry only a registry rate-limit error; preserve the selected image source and
# fail closed on every other build failure or on exhausted attempts.
web_build_log="$(mktemp)"
trap 'rm -f -- "$archive.partial" "$maven_log" "$web_build_log"' EXIT
for attempt in 1 2 3 4; do
  if docker build --build-arg VITE_OIDC_AUTHORITY=https://mahcsr.ir/identity/realms/moon \
      --build-arg VITE_OIDC_CLIENT_ID=moon-web --build-arg VITE_API_BASE_URL=https://mahcsr.ir \
      --build-arg NODE_OPTIONS=--max-old-space-size=5120 -t "moon-platform/web:$sha" . 2>&1 | tee "$web_build_log"; then
    break
  else
    status=$?
    if [ "$attempt" -eq 4 ] || ! grep -Eqi 'public\.ecr\.aws.*(429 Too Many Requests|toomanyrequests|Data limit exceeded)' "$web_build_log"; then
      exit "$status"
    fi
    delay=$((60 * (2 ** (attempt - 1))))
    echo "Public ECR rate limited the web build; retry $((attempt + 1))/4 in ${delay}s" >&2
    sleep "$delay"
  fi
done
bash deploy/production/check-public-asset-cache.sh "moon-platform/web:$sha"
docker save "moon-platform/api:$sha" "moon-platform/web:$sha" "moon-platform/keycloak:$sha" | gzip -1 > "$archive.partial"
mv "$archive.partial" "$archive"
python3 deploy/production/sms-release-bundle.py create --release-sha "$sha" --archive "$archive" --manifest "$manifest"
python3 deploy/production/sms-release-bundle.py verify --release-sha "$sha" --archive "$archive" --manifest "$manifest"
