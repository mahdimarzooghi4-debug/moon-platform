#!/usr/bin/env bash
set -euo pipefail

require() {
  local name="$1"
  if [[ -z "${!name:-}" ]]; then
    echo "Missing required environment variable: ${name}" >&2
    exit 2
  fi
}

require KEYCLOAK_BASE_URL
require KEYCLOAK_ADMIN_USERNAME
require KEYCLOAK_ADMIN_PASSWORD
require SYSTEM_ADMIN_USERNAME

KEYCLOAK_ADMIN_REALM="${KEYCLOAK_ADMIN_REALM:-master}"
MOON_REALM="${MOON_REALM:-moon}"
ALLOW_INSECURE_KEYCLOAK="${ALLOW_INSECURE_KEYCLOAK:-false}"

if [[ "${KEYCLOAK_BASE_URL}" != https://* && "${ALLOW_INSECURE_KEYCLOAK}" != "true" ]]; then
  echo "Refusing non-HTTPS Keycloak URL. Set ALLOW_INSECURE_KEYCLOAK=true only for local/dev." >&2
  exit 3
fi

if [[ "${KEYCLOAK_ADMIN_PASSWORD}" == "change-me" || "${KEYCLOAK_ADMIN_PASSWORD}" == "admin-local-only" ]]; then
  echo "Refusing known placeholder Keycloak admin password." >&2
  exit 4
fi

for command in curl jq; do
  if ! command -v "${command}" >/dev/null 2>&1; then
    echo "Required command not found: ${command}" >&2
    exit 5
  fi
done

base="${KEYCLOAK_BASE_URL%/}"
admin_token="$({
  curl --fail --silent --show-error \
    --request POST \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'client_id=admin-cli' \
    --data-urlencode "username=${KEYCLOAK_ADMIN_USERNAME}" \
    --data-urlencode "password=${KEYCLOAK_ADMIN_PASSWORD}" \
    --data-urlencode 'grant_type=password' \
    "${base}/realms/${KEYCLOAK_ADMIN_REALM}/protocol/openid-connect/token"
} | jq -r '.access_token // empty')"

if [[ -z "${admin_token}" ]]; then
  echo "Failed to obtain Keycloak admin token." >&2
  exit 6
fi

auth_header="Authorization: Bearer ${admin_token}"
users_json="$(curl --fail --silent --show-error \
  --header "${auth_header}" \
  --get \
  --data-urlencode "username=${SYSTEM_ADMIN_USERNAME}" \
  --data-urlencode 'exact=true' \
  "${base}/admin/realms/${MOON_REALM}/users")"

user_id="$(jq -r '.[0].id // empty' <<<"${users_json}")"
if [[ -z "${user_id}" ]]; then
  echo "User '${SYSTEM_ADMIN_USERNAME}' does not exist in realm '${MOON_REALM}'." >&2
  echo "Provision the identity first, then rerun this one-time bootstrap." >&2
  exit 7
fi

role_json="$(curl --fail --silent --show-error \
  --header "${auth_header}" \
  "${base}/admin/realms/${MOON_REALM}/roles/system_admin")"

curl --fail --silent --show-error \
  --request POST \
  --header "${auth_header}" \
  --header 'Content-Type: application/json' \
  --data "[$(jq -c '{id,name,description,composite,clientRole,containerId}' <<<"${role_json}")]" \
  "${base}/admin/realms/${MOON_REALM}/users/${user_id}/role-mappings/realm" >/dev/null

user_json="$(curl --fail --silent --show-error \
  --header "${auth_header}" \
  "${base}/admin/realms/${MOON_REALM}/users/${user_id}")"

updated_user="$(jq '.requiredActions = (((.requiredActions // []) + ["CONFIGURE_TOTP"]) | unique)' <<<"${user_json}")"

curl --fail --silent --show-error \
  --request PUT \
  --header "${auth_header}" \
  --header 'Content-Type: application/json' \
  --data "${updated_user}" \
  "${base}/admin/realms/${MOON_REALM}/users/${user_id}" >/dev/null

echo "system_admin role assigned to '${SYSTEM_ADMIN_USERNAME}'."
echo "CONFIGURE_TOTP is required on the user's next interactive login."
echo "Run this bootstrap only through an audited operator session and rotate the Keycloak admin credential afterward."
