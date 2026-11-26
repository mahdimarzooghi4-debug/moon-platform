#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
fixture="$(mktemp -d)"
cleanup() {
  docker rm -f moon-ci-keycloak moon-ci-sms moon-ci-pg >/dev/null 2>&1 || true
  docker network rm moon-ci-otp >/dev/null 2>&1 || true
  rm -rf "$fixture"
}
trap cleanup EXIT
chmod 755 "$fixture"
# CI only. Trust a temporary cert for a local container with the SMS.ir DNS alias.
openssl req -x509 -newkey rsa:2048 -nodes -days 1 -subj '/CN=api.sms.ir' \
  -addext 'subjectAltName=DNS:api.sms.ir,IP:127.0.0.1' \
  -keyout "$fixture/sms.key" -out "$fixture/sms.crt" >/dev/null 2>&1
keytool -importcert -noprompt -alias ci-sms -file "$fixture/sms.crt" \
  -keystore "$fixture/trust.p12" -storetype PKCS12 -storepass ci-only-trust >/dev/null 2>&1
chmod 644 "$fixture/trust.p12" "$fixture/sms.crt"
cp "$root/integration/mock_sms.py" "$fixture/mock_sms.py"
python "$root/integration/make_realm.py" "$root/../moon-realm-production.json" "$fixture/moon-realm.json"
chmod 644 "$fixture/moon-realm.json"
mvn -B -q -f "$root/pom.xml" -Dmaven.test.skip=true package
jar="$root/target/moon-sms-login-1.0.0.jar"
chmod a+r "$jar"
docker network create moon-ci-otp >/dev/null
docker run -d --name moon-ci-pg --network moon-ci-otp -e POSTGRES_USER=moonci \
  -e POSTGRES_PASSWORD=ci-only-db -e POSTGRES_DB=keycloak postgres:18 >/dev/null
for i in $(seq 1 60); do
  if docker exec moon-ci-pg pg_isready -U moonci -d keycloak >/dev/null 2>&1; then break; fi
  sleep 1
done
docker exec moon-ci-pg createdb -U moonci otp
docker exec -i moon-ci-pg psql -U moonci -d otp -v ON_ERROR_STOP=1 < "$root/schema.sql"
docker run -d --name moon-ci-sms --network moon-ci-otp --network-alias api.sms.ir \
  -p 127.0.0.1:18443:443 -v "$fixture:/fixture:ro" python:3.13-alpine \
  python /fixture/mock_sms.py >/dev/null
hmac="$(openssl rand -base64 32)"
docker run -d --name moon-ci-keycloak --network moon-ci-otp -p 127.0.0.1:18081:8080 \
  -e KC_DB=postgres -e KC_DB_URL=jdbc:postgresql://moon-ci-pg:5432/keycloak \
  -e KC_DB_USERNAME=moonci -e KC_DB_PASSWORD=ci-only-db \
  -e KC_HOSTNAME=http://127.0.0.1:18081 \
  -e MOON_LOGIN_OTP_JDBC_URL=jdbc:postgresql://moon-ci-pg:5432/otp \
  -e MOON_LOGIN_OTP_DB_USER=moonci -e MOON_LOGIN_OTP_DB_PASSWORD=ci-only-db \
  -e MOON_LOGIN_OTP_HMAC_KEY="$hmac" \
  -e MOON_SMS_IR_API_KEY=ci-only-not-a-real-sms-key \
  -e MOON_SMS_IR_STARTUP_TEMPLATE_ID=743974 -e MOON_SMS_IR_STARTUP_CODE_PARAMETER=CODE \
  -e 'JAVA_OPTS_APPEND=-Djavax.net.ssl.trustStore=/fixture/trust.p12 -Djavax.net.ssl.trustStorePassword=ci-only-trust -Djavax.net.ssl.trustStoreType=PKCS12' \
  -v "$fixture/trust.p12:/fixture/trust.p12:ro" \
  -v "$fixture/moon-realm.json:/opt/keycloak/data/import/moon-realm.json:ro" \
  -v "$jar:/opt/keycloak/providers/moon-sms-login.jar:ro" \
  quay.io/keycloak/keycloak:26.7.3 start-dev --import-realm >/dev/null
ready=0
for i in $(seq 1 180); do
  if curl -fsS http://127.0.0.1:18081/realms/moon/.well-known/openid-configuration >/dev/null 2>&1; then ready=1; break; fi
  sleep 2
done
if [ "$ready" != 1 ]; then docker logs --tail 100 moon-ci-keycloak; exit 1; fi
python "$root/integration/browser_test.py" "$fixture"
