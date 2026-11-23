/**
 * OIDC browser callback correlation guards. These are app-level binding checks
 * only, NOT JWT signature verification. Moon API independently validates JWTs.
 * The ID token is obtained via HTTPS from the pinned Keycloak token endpoint.
 */

const nonEmpty = (value) => typeof value === "string" && value.trim().length > 0;
const finite = (value) => typeof value === "number" && Number.isFinite(value);

function reject(code) {
  throw new Error(code);
}

export function parseOidcCallback(search, pending) {
  const query = new URLSearchParams(search);
  if (query.has("error")) reject("oidc_authorization_error");

  const codes = query.getAll("code");
  const states = query.getAll("state");
  if (codes.length !== 1 || states.length !== 1 ||
      !nonEmpty(codes[0]) || !nonEmpty(states[0]) ||
      codes[0].length > 2048 || states[0].length > 512) {
    reject("missing_or_ambiguous_authorization_code");
  }
  if (!pending || typeof pending !== "object" ||
      !nonEmpty(pending.state) || !nonEmpty(pending.nonce) ||
      !nonEmpty(pending.verifier) || pending.verifier.length < 43) {
    reject("invalid_pending_login");
  }
  if (states[0] !== pending.state) reject("invalid_login_state");
  return codes[0];
}

/**
 * Exact binding between the initiated Moon OIDC PKCE flow, Keycloak ID Token,
 * and Keycloak access token. Claims are decoded from Keycloak's HTTPS response:
 * no claim is trusted to authorize access in Moon; API verifies the JWT.
 */
export function checkOidcTokenBinding({
  accessClaims, idClaims, expectedNonce, expectedIssuer, expectedClientId,
  nowSeconds = Date.now() / 1000,
}) {
  if (!accessClaims || !idClaims ||
      typeof accessClaims !== "object" || typeof idClaims !== "object" ||
      !nonEmpty(expectedNonce) || !nonEmpty(expectedIssuer) ||
      !nonEmpty(expectedClientId) || !finite(nowSeconds)) {
    reject("invalid_oidc_context");
  }

  if (idClaims.nonce !== expectedNonce) reject("invalid_nonce");
  if (idClaims.iss !== expectedIssuer || accessClaims.iss !== expectedIssuer)
    reject("invalid_issuer");

  const audiences = typeof idClaims.aud === "string"
    ? [idClaims.aud] : Array.isArray(idClaims.aud) ? idClaims.aud : [];
  if (!audiences.includes(expectedClientId) ||
      (audiences.length > 1 && idClaims.azp !== expectedClientId) ||
      (idClaims.azp !== undefined && idClaims.azp !== expectedClientId)) {
    reject("invalid_id_token_audience");
  }

  if (!nonEmpty(idClaims.sub) || !nonEmpty(accessClaims.sub) ||
      idClaims.sub !== accessClaims.sub) reject("invalid_token_subject");

  // A short grace window avoids retaining a token that expires during sync.
  if (!finite(idClaims.exp) || !finite(accessClaims.exp) ||
      idClaims.exp <= nowSeconds + 15 || accessClaims.exp <= nowSeconds + 15) {
    reject("expired_oidc_token");
  }

  // ID Token 'iat' is required by OIDC; reject tokens from the future.
  if (!finite(idClaims.iat) || idClaims.iat > nowSeconds + 60 ||
      (idClaims.nbf !== undefined &&
        (!finite(idClaims.nbf) || idClaims.nbf > nowSeconds + 60))) {
    reject("invalid_id_token_time");
  }
}
