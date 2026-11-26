#!/usr/bin/env bash
set -Eeuo pipefail
: "${MOON_LOGIN_OTP_DB_PASSWORD:?restricted application password is required}"
psql --no-psqlrc --set=ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" \
  --set=app_password="$MOON_LOGIN_OTP_DB_PASSWORD" <<'SQL'
CREATE ROLE moon_login_otp
  LOGIN PASSWORD :'app_password'
  NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOREPLICATION NOBYPASSRLS;
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
GRANT CONNECT ON DATABASE moon_login_otp TO moon_login_otp;
GRANT USAGE ON SCHEMA public TO moon_login_otp;
SQL
