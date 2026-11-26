import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import ts from "typescript";

const source = await readFile(new URL("../src/auth/oidc.ts", import.meta.url), "utf8");
const js = ts.transpileModule(source.replace("import.meta.env", "({})"), {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
}).outputText;
const auth = await import("data:text/javascript;base64," + Buffer.from(js).toString("base64"));
const storage = new Map();
globalThis.sessionStorage = { setItem: (k,v) => storage.set(k,v), getItem: k => storage.get(k) ?? null, removeItem: k => storage.delete(k) };
let destination;
globalThis.window = { location: { origin: "https://mahcsr.ir", assign: v => { destination=v; } } };
for (const accountType of ["company","startup","internal"]) {
  await auth.beginLogin({accountType,mobile:"۰۹۱۲۰۰۰۰۰۰۰",returnTo:"/panel/startup/projects"});
  const url=new URL(destination);
  const q=url.searchParams;
  const pending=JSON.parse(storage.get("moon.auth.pending"));
  assert.equal(url.pathname,"/realms/moon/protocol/openid-connect/auth");
  assert.equal(q.get("login_hint"),"09120000000");
  assert.equal(q.get("response_type"),"code");
  assert.equal(q.get("prompt"),"login");
  assert.equal(q.get("code_challenge_method"),"S256");
  assert.equal(q.get("code_challenge"),createHash("sha256").update(pending.verifier).digest("base64url"));
  assert.equal(q.get("state"),pending.state);
  assert.equal(q.get("nonce"),pending.nonce);
  assert.equal(q.get("redirect_uri"),"https://mahcsr.ir/auth/callback");
  assert.equal(q.has("role"),false);
  assert.equal(q.has("otp"),false);
  assert.equal(pending.accountType,accountType);
}
await assert.rejects(auth.beginLogin({accountType:"internal",mobile:"invalid"}),/invalid_mobile/);
for(const v of ["https://evil.example/panel/admin","//evil.example/panel/admin","/panel/unknown","/panel/startup/../../auth","/panel/startup/%2e%2e/admin","/panel/startup\\evil","/panel/startup#fragment"]) {
  assert.equal(auth.safePanelReturnTo(v),undefined,v);
}
assert.equal(auth.safePanelReturnTo("/panel/startup/projects?q=1"),"/panel/startup/projects?q=1");
assert.equal(auth.canAccessPanelPath(["startup"],"/panel/admin"),false);
assert.equal(auth.canAccessPanelPath(["auditor"],"/panel/admin"),false);
assert.equal(auth.canAccessPanelPath(["startup"],"/panel/unknown"),false);
for(const [role,panel] of Object.entries({company:"company",startup:"startup",system_admin:"admin",product_owner:"creative-house",evaluator:"creative-house",finance:"fund-manager",supervisor:"emdad"})) {
  assert.equal(auth.defaultPanelForRoles([role]),"/panel/"+panel);
  assert.equal(auth.canAccessPanelPath([role],"/panel/"+panel),true);
}
console.log("Moon OIDC entry and existing role routing tests passed");
