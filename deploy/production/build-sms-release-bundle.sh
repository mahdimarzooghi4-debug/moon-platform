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
# The release runner uses the same Node 22 / npm ci / WebP build as Release
# Verify. Package its fresh output in the unchanged Nginx runtime stage;
# this removes the public ECR Node manifest lookup from candidate builds.
# The normal server Dockerfile is unchanged.
test "$(node -p 'process.versions.node.split(".")[0]')" = 22
command -v cwebp >/dev/null
test ! -e dist
web_context="$(mktemp -d)"
trap 'rm -f -- "$archive.partial" "$maven_log"; rm -rf -- "$web_context"' EXIT
npm ci --no-audit --no-fund
VITE_OIDC_AUTHORITY=https://mahcsr.ir/identity/realms/moon \
  VITE_OIDC_CLIENT_ID=moon-web VITE_API_BASE_URL=https://mahcsr.ir \
  NODE_OPTIONS=--max-old-space-size=5120 npm run build
git diff --quiet
git diff --cached --quiet
test -s dist/index.html
mv dist "$web_context/dist"
mkdir -p "$web_context/deploy"
cp deploy/nginx.conf "$web_context/deploy/nginx.conf"
# Derive the runtime recipe from the reviewed Dockerfile, rather than
# maintaining a second runtime configuration. Reject unexpected changes.
python3 - "$web_context/Dockerfile" <<'PY'
from pathlib import Path
import sys

source = Path("Dockerfile").read_text()
runtime = "FROM ghcr.io/nginx/nginx-unprivileged:stable-alpine AS runtime\n"
assert source.count(runtime) == 1
expected = (
    runtime
    + "COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf\n"
    + "COPY --from=build /app/dist /usr/share/nginx/html\n\n"
    + "EXPOSE 8080"
)
actual = runtime + source.split(runtime, 1)[1].strip() 
assert actual == expected, "Unexpected runtime Dockerfile; review candidate packaging"
Path(sys.argv[1]).write_text(
    actual.replace("COPY --from=build /app/dist ", "COPY dist ") + "\n"
)
PY
docker build -t "moon-platform/web:$sha" "$web_context"
bash deploy/production/check-public-asset-cache.sh "moon-platform/web:$sha"
docker save "moon-platform/api:$sha" "moon-platform/web:$sha" "moon-platform/keycloak:$sha" | gzip -1 > "$archive.partial"
mv "$archive.partial" "$archive"
python3 deploy/production/sms-release-bundle.py create --release-sha "$sha" --archive "$archive" --manifest "$manifest"
python3 deploy/production/sms-release-bundle.py verify --release-sha "$sha" --archive "$archive" --manifest "$manifest"
