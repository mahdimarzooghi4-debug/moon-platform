#!/usr/bin/env bash
set -euo pipefail

require() {
  local name="$1"
  if [[ -z "${!name:-}" ]]; then
    echo "Missing required environment variable: ${name}" >&2
    exit 2
  fi
}

for variable in \
  KEYCLOAK_BASE_URL \
  KEYCLOAK_ADMIN_USERNAME \
  KEYCLOAK_ADMIN_PASSWORD \
  API_BASE_URL \
  POSTGRES_HOST \
  POSTGRES_DB \
  POSTGRES_USER \
  POSTGRES_PASSWORD; do
  require "${variable}"
done

for command in curl jq openssl; do
  if ! command -v "${command}" >/dev/null 2>&1; then
    echo "Required command not found: ${command}" >&2
    exit 3
  fi
done

KEYCLOAK_ADMIN_REALM="${KEYCLOAK_ADMIN_REALM:-master}"
MOON_REALM="${MOON_REALM:-moon}"
KEYCLOAK_BASE_URL="${KEYCLOAK_BASE_URL%/}"
API_BASE_URL="${API_BASE_URL%/}"
CLIENT_ID="moon-phase0-e2e-${GITHUB_RUN_ID:-local}-$$"
CLIENT_SECRET="$(openssl rand -hex 32)"
client_uuid=""

admin_token="$({
  curl --fail --silent --show-error \
    --request POST \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'client_id=admin-cli' \
    --data-urlencode "username=${KEYCLOAK_ADMIN_USERNAME}" \
    --data-urlencode "password=${KEYCLOAK_ADMIN_PASSWORD}" \
    --data-urlencode 'grant_type=password' \
    "${KEYCLOAK_BASE_URL}/realms/${KEYCLOAK_ADMIN_REALM}/protocol/openid-connect/token"
} | jq -r '.access_token // empty')"

if [[ -z "${admin_token}" ]]; then
  echo "Failed to obtain Keycloak admin token." >&2
  exit 4
fi

auth_header="Authorization: Bearer ${admin_token}"
cleanup() {
  if [[ -n "${client_uuid}" ]]; then
    curl --silent --show-error \
      --request DELETE \
      --header "${auth_header}" \
      "${KEYCLOAK_BASE_URL}/admin/realms/${MOON_REALM}/clients/${client_uuid}" >/dev/null || true
  fi
}
trap cleanup EXIT

client_payload="$(jq -n \
  --arg clientId "${CLIENT_ID}" \
  --arg secret "${CLIENT_SECRET}" \
  '{
    clientId: $clientId,
    name: "Moon Phase 0 E2E",
    enabled: true,
    protocol: "openid-connect",
    publicClient: false,
    secret: $secret,
    serviceAccountsEnabled: true,
    standardFlowEnabled: false,
    directAccessGrantsEnabled: false,
    protocolMappers: [
      {
        name: "moon-e2e-realm-roles",
        protocol: "openid-connect",
        protocolMapper: "oidc-usermodel-realm-role-mapper",
        consentRequired: false,
        config: {
          "multivalued": "true",
          "claim.name": "roles",
          "jsonType.label": "String",
          "access.token.claim": "true",
          "id.token.claim": "false",
          "userinfo.token.claim": "false"
        }
      },
      {
        name: "moon-e2e-api-audience",
        protocol: "openid-connect",
        protocolMapper: "oidc-audience-mapper",
        consentRequired: false,
        config: {
          "included.client.audience": "moon-api",
          "access.token.claim": "true",
          "id.token.claim": "false"
        }
      }
    ]
  }')"

curl --fail --silent --show-error \
  --request POST \
  --header "${auth_header}" \
  --header 'Content-Type: application/json' \
  --data "${client_payload}" \
  "${KEYCLOAK_BASE_URL}/admin/realms/${MOON_REALM}/clients" >/dev/null

client_uuid="$(curl --fail --silent --show-error \
  --header "${auth_header}" \
  --get \
  --data-urlencode "clientId=${CLIENT_ID}" \
  "${KEYCLOAK_BASE_URL}/admin/realms/${MOON_REALM}/clients" | jq -r '.[0].id // empty')"

if [[ -z "${client_uuid}" ]]; then
  echo "Temporary Keycloak client was not created." >&2
  exit 5
fi

service_user_json="$(curl --fail --silent --show-error \
  --header "${auth_header}" \
  "${KEYCLOAK_BASE_URL}/admin/realms/${MOON_REALM}/clients/${client_uuid}/service-account-user")"
service_user_id="$(jq -r '.id // empty' <<<"${service_user_json}")"

role_json="$(curl --fail --silent --show-error \
  --header "${auth_header}" \
  "${KEYCLOAK_BASE_URL}/admin/realms/${MOON_REALM}/roles/system_admin")"

curl --fail --silent --show-error \
  --request POST \
  --header "${auth_header}" \
  --header 'Content-Type: application/json' \
  --data "[$(jq -c '{id,name,description,composite,clientRole,containerId}' <<<"${role_json}")]" \
  "${KEYCLOAK_BASE_URL}/admin/realms/${MOON_REALM}/users/${service_user_id}/role-mappings/realm" >/dev/null

access_token="$({
  curl --fail --silent --show-error \
    --request POST \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'grant_type=client_credentials' \
    --data-urlencode "client_id=${CLIENT_ID}" \
    --data-urlencode "client_secret=${CLIENT_SECRET}" \
    "${KEYCLOAK_BASE_URL}/realms/${MOON_REALM}/protocol/openid-connect/token"
} | jq -r '.access_token // empty')"

if [[ -z "${access_token}" ]]; then
  echo "Failed to obtain application access token." >&2
  exit 6
fi

bearer="Authorization: Bearer ${access_token}"

sync_json="$(curl --fail --silent --show-error \
  --request POST \
  --header "${bearer}" \
  --header 'Accept: application/json' \
  "${API_BASE_URL}/api/v1/session/sync")"

user_id="$(jq -r '.userId // empty' <<<"${sync_json}")"
if [[ -z "${user_id}" ]]; then
  echo "Identity sync did not return a userId." >&2
  exit 7
fi

roles_json="$(curl --fail --silent --show-error \
  --header "${bearer}" \
  "${API_BASE_URL}/api/v1/admin/roles")"

if ! jq -e 'any(.[]; .code == "system_admin")' <<<"${roles_json}" >/dev/null; then
  echo "Admin API did not expose the expected system_admin role." >&2
  exit 8
fi

organization_name="Phase0 E2E ${GITHUB_RUN_ID:-local} $$"
organization_json="$(curl --fail --silent --show-error \
  --request POST \
  --header "${bearer}" \
  --header 'Content-Type: application/json' \
  --data "$(jq -n --arg name "${organization_name}" '{name:$name,type:"platform"}')" \
  "${API_BASE_URL}/api/v1/admin/organizations")"

organization_id="$(jq -r '.organizationId // empty' <<<"${organization_json}")"
if [[ -z "${organization_id}" ]]; then
  echo "Admin organization creation did not return an organizationId." >&2
  exit 9
fi

sql="select count(*) from moon.audit_events where \"ActorSubject\" = '${service_user_id}' and \"Action\" in ('identity.user.created','identity.organization.created');"
if command -v psql >/dev/null 2>&1; then
  audit_count="$(PGPASSWORD="${POSTGRES_PASSWORD}" psql \
    --host "${POSTGRES_HOST}" \
    --port "${POSTGRES_PORT:-5432}" \
    --dbname "${POSTGRES_DB}" \
    --username "${POSTGRES_USER}" \
    --tuples-only --no-align \
    --command "${sql}" | tr -d '[:space:]')"
elif command -v docker >/dev/null 2>&1; then
  audit_count="$(docker run --rm --network host \
    --env PGPASSWORD="${POSTGRES_PASSWORD}" \
    postgres:18-alpine psql \
    --host "${POSTGRES_HOST}" \
    --port "${POSTGRES_PORT:-5432}" \
    --dbname "${POSTGRES_DB}" \
    --username "${POSTGRES_USER}" \
    --tuples-only --no-align \
    --command "${sql}" | tr -d '[:space:]')"
else
  echo "Neither psql nor docker is available for audit verification." >&2
  exit 10
fi

if [[ "${audit_count}" -lt 2 ]]; then
  echo "Expected identity and organization audit events were not persisted." >&2
  exit 11
fi

echo "Phase 0 E2E passed: Keycloak token -> identity sync -> system_admin authorization -> PostgreSQL -> audit."
