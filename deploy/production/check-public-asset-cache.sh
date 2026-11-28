#!/usr/bin/env bash
# Exercise the actual candidate web image, without connecting to production.
set -euo pipefail
image="$1"
tmp="$(mktemp -d)"
cid=""
trap 'if [ -n "$cid" ]; then docker rm -f "$cid" >/dev/null; fi; rm -rf "$tmp"' EXIT
cid="$(docker run -d -p 127.0.0.1::8080 "$image")"
address="$(docker port "$cid" 8080/tcp)"
base="http://$address"
curl -fsS --retry 10 --retry-connrefused --retry-delay 1 --max-time 5 "$base/healthz" >/dev/null
for name in landing startups companies about; do
  curl -fsS -D "$tmp/headers" -o "$tmp/image" "$base/assets/mah-hero/$name.webp"
  grep -Eqi '^Content-Type: image/webp' "$tmp/headers"
  grep -Eqi '^Cache-Control: max-age=86400' "$tmp/headers"
  grep -Eqi '^X-Content-Type-Options: nosniff' "$tmp/headers"
  test "$(head -c 4 "$tmp/image")" = RIFF
done
curl -fsS -D "$tmp/headers" -o /dev/null "$base/about"
grep -Eqi '^Cache-Control: no-cache' "$tmp/headers"
test "$(curl -sS -o /dev/null -w '%{http_code}' "$base/assets/mah-hero/missing.webp")" = 404
echo "PUBLIC_ASSET_CACHE_CONTRACT_VERIFIED"
