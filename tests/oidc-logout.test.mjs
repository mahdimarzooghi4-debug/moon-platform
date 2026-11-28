import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import ts from "typescript";

function storage() {
  const entries = new Map();
  return {
    getItem: (key) => entries.get(key) ?? null,
    setItem: (key, value) => entries.set(key, String(value)),
    removeItem: (key) => entries.delete(key),
  };
}

test("explicit logout clears the local session and requests Keycloak logout", async () => {
  const source = readFileSync(new URL("../src/auth/oidc.ts", import.meta.url), "utf8");
  const js = ts.transpileModule(source.replace("import.meta.env", '({ VITE_OIDC_AUTHORITY: "https://mahcsr.ir/identity/realms/moon", VITE_OIDC_CLIENT_ID: "moon-web" })'), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const { logout } = await import("data:text/javascript;base64," + Buffer.from(js).toString("base64"));
  globalThis.sessionStorage = storage();
  globalThis.localStorage = storage();
  let destination;
  globalThis.window = { location: { origin: "https://mahcsr.ir", replace: (value) => { destination = value; } } };
  const sessionKey = "moon.auth.session";
  const pendingKey = "moon.auth.pending";
  const previewKey = "moon.auth.dev-panel-preview";

  sessionStorage.setItem(sessionKey, JSON.stringify({ accessToken: "access-secret", idToken: "id-hint", refreshToken: "refresh-secret" }));
  sessionStorage.setItem(pendingKey, "pending");
  sessionStorage.setItem(previewKey, "internal");
  localStorage.setItem(previewKey, "internal");
  logout();
  const url = new URL(destination);
  assert.equal(url.origin + url.pathname, "https://mahcsr.ir/identity/realms/moon/protocol/openid-connect/logout");
  assert.equal(url.searchParams.get("client_id"), "moon-web");
  assert.equal(url.searchParams.get("id_token_hint"), "id-hint");
  assert.equal(url.searchParams.get("post_logout_redirect_uri"), "https://mahcsr.ir/auth");
  assert.ok(!destination.includes("access-secret") && !destination.includes("refresh-secret"));
  for (const key of [sessionKey, pendingKey, previewKey]) assert.equal(sessionStorage.getItem(key), null);
  assert.equal(localStorage.getItem(previewKey), null);

  sessionStorage.setItem(sessionKey, JSON.stringify({ accessToken: "access-secret" }));
  logout();
  assert.equal(new URL(destination).searchParams.has("id_token_hint"), false);
  assert.equal(sessionStorage.getItem(sessionKey), null);

  logout();
  assert.equal(destination, "/auth");
});
