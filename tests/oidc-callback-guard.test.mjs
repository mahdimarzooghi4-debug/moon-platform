import assert from "node:assert/strict";
import test from "node:test";
import { checkOidcTokenBinding, parseOidcCallback } from "../src/auth/oidcCallbackGuard.mjs";

const now = 2_000_000_000;
const issuer = "https://keycloak.example/realms/moon";
const clientId = "moon-web";
const nonce = "moon-generated-nonce";
const pending = { state: "moon-pkce-state", nonce, verifier: "x".repeat(64) };

function claims() {
  return {
    idClaims: {
      sub: "known-keycloak-sub", nonce, iss: issuer, aud: clientId,
      azp: clientId, exp: now + 300, iat: now - 5,
    },
    accessClaims: {
      sub: "known-keycloak-sub", iss: issuer, exp: now + 300,
    },
    expectedNonce: nonce,
    expectedIssuer: issuer,
    expectedClientId: clientId,
    nowSeconds: now,
  };
}

test("single unambiguous PKCE code and exact state are accepted", () => {
  assert.equal(parseOidcCallback("?code=one-use-code&state=moon-pkce-state", pending), "one-use-code");
});

test("state collision or missing state is rejected before token exchange", () => {
  assert.throws(() => parseOidcCallback("?code=one-use-code&state=other", pending), /invalid_login_state/);
  assert.throws(() => parseOidcCallback("?code=one-use-code", pending), /missing_or_ambiguous/);
  assert.throws(() => parseOidcCallback("?code=one-use-code&state=moon-pkce-state&state=other", pending), /missing_or_ambiguous/);
});

test("duplicate codes and malformed pending nonce/verifier fail closed", () => {
  assert.throws(() => parseOidcCallback("?code=a&code=b&state=moon-pkce-state", pending), /missing_or_ambiguous/);
  assert.throws(() => parseOidcCallback("?code=a&state=moon-pkce-state", { ...pending, nonce: "" }), /invalid_pending_login/);
  assert.throws(() => parseOidcCallback("?code=a&state=moon-pkce-state", { ...pending, verifier: "short" }), /invalid_pending_login/);
  assert.throws(() => parseOidcCallback("?code=a&state=moon-pkce-state", null), /invalid_pending_login/);
  assert.throws(() => parseOidcCallback("?code=a&state=moon-pkce-state&error=access_denied", pending), /oidc_authorization_error/);
});

test("a fully correlated Keycloak ID/access token pair is accepted", () => {
  assert.doesNotThrow(() => checkOidcTokenBinding(claims()));
});

test("ID token missing nonce or a different nonce must be rejected", () => {
  const missing = claims();
  delete missing.idClaims.nonce;
  assert.throws(() => checkOidcTokenBinding(missing), /invalid_nonce/);
  const wrong = claims();
  wrong.idClaims.nonce = "another-browser";
  assert.throws(() => checkOidcTokenBinding(wrong), /invalid_nonce/);
});

test("an ID token cannot silently be absent from the callback", () => {
  assert.throws(() => checkOidcTokenBinding({ ...claims(), idClaims: null }), /invalid_oidc_context/);
});

test("Keycloak issuer must match on both tokens", () => {
  const otherId = claims();
  otherId.idClaims.iss = "https://another-keycloak.example/realms/moon";
  assert.throws(() => checkOidcTokenBinding(otherId), /invalid_issuer/);
  const otherAccess = claims();
  otherAccess.accessClaims.iss = "https://another-keycloak.example/realms/moon";
  assert.throws(() => checkOidcTokenBinding(otherAccess), /invalid_issuer/);
});

test("ID token audience must include the exact moon-web client ID", () => {
  const other = claims();
  other.idClaims.aud = "another-client";
  assert.throws(() => checkOidcTokenBinding(other), /invalid_id_token_audience/);
});

test("multi-audience ID tokens require matching authorized party", () => {
  const allowed = claims();
  allowed.idClaims.aud = ["moon-web", "another-client"];
  assert.doesNotThrow(() => checkOidcTokenBinding(allowed));
  const wrong = claims();
  wrong.idClaims.aud = ["moon-web", "another-client"];
  wrong.idClaims.azp = "another-client";
  assert.throws(() => checkOidcTokenBinding(wrong), /invalid_id_token_audience/);
  const missingAzp = claims();
  missingAzp.idClaims.aud = ["moon-web", "another-client"];
  delete missingAzp.idClaims.azp;
  assert.throws(() => checkOidcTokenBinding(missingAzp), /invalid_id_token_audience/);
});

test("ID and access token subjects must exactly match", () => {
  const mixed = claims();
  mixed.accessClaims.sub = "different-keycloak-account";
  assert.throws(() => checkOidcTokenBinding(mixed), /invalid_token_subject/);
  const missing = claims();
  delete missing.idClaims.sub;
  assert.throws(() => checkOidcTokenBinding(missing), /invalid_token_subject/);
});

test("expired or nearly expired tokens are never stored as a browser session", () => {
  const idExpired = claims();
  idExpired.idClaims.exp = now - 1;
  assert.throws(() => checkOidcTokenBinding(idExpired), /expired_oidc_token/);
  const accessExpired = claims();
  accessExpired.accessClaims.exp = now + 1;
  assert.throws(() => checkOidcTokenBinding(accessExpired), /expired_oidc_token/);
});

test("ID token issued-at must exist and not be in the future", () => {
  const missing = claims();
  delete missing.idClaims.iat;
  assert.throws(() => checkOidcTokenBinding(missing), /invalid_id_token_time/);
  const future = claims();
  future.idClaims.iat = now + 90;
  assert.throws(() => checkOidcTokenBinding(future), /invalid_id_token_time/);
});

test("a future not-before boundary is rejected", () => {
  const future = claims();
  future.idClaims.nbf = now + 120;
  assert.throws(() => checkOidcTokenBinding(future), /invalid_id_token_time/);
});
