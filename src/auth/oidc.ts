export type AccountType = "company" | "startup" | "internal";

export type AuthSession = {
  accessToken: string;
  idToken?: string;
  expiresAt: number;
  roles: string[];
  subject?: string;
};

type JwtPayload = {
  sub?: string;
  exp?: number;
  nonce?: string;
  roles?: string[];
  realm_access?: { roles?: string[] };
};

type PendingLogin = {
  state: string;
  nonce: string;
  verifier: string;
  returnTo?: string;
  accountType: AccountType;
};

const SESSION_KEY = "moon.auth.session";
const PENDING_KEY = "moon.auth.pending";

const env = import.meta.env as Record<string, string | undefined>;
const authority = (env.VITE_OIDC_AUTHORITY ?? "http://localhost:8081/realms/moon").replace(/\/$/, "");
const clientId = env.VITE_OIDC_CLIENT_ID ?? "moon-web";

function toBase64Url(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function randomValue(length = 32) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return toBase64Url(bytes);
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return toBase64Url(new Uint8Array(digest));
}

function decodeJwt(token: string): JwtPayload {
  const part = token.split(".")[1];
  if (!part) throw new Error("invalid_jwt");
  const normalized = part.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return JSON.parse(atob(padded)) as JwtPayload;
}

function rolesFromPayload(payload: JwtPayload) {
  const values = [...(payload.roles ?? []), ...(payload.realm_access?.roles ?? [])];
  return [...new Set(values)];
}

export function normalizeIranMobile(value: string) {
  const persian = "۰۱۲۳۴۵۶۷۸۹";
  const arabic = "٠١٢٣٤٥٦٧٨٩";
  return value
    .trim()
    .split("")
    .map((char) => {
      const p = persian.indexOf(char);
      if (p >= 0) return String(p);
      const a = arabic.indexOf(char);
      return a >= 0 ? String(a) : char;
    })
    .join("")
    .replace(/[\s-]/g, "");
}

export function isValidIranMobile(value: string) {
  return /^09\d{9}$/.test(normalizeIranMobile(value));
}

export async function beginLogin(options: {
  accountType: AccountType;
  mobile: string;
  returnTo?: string;
}) {
  const verifier = randomValue(64);
  const challenge = await sha256(verifier);
  const state = randomValue();
  const nonce = randomValue();
  const redirectUri = `${window.location.origin}/auth/callback`;

  const pending: PendingLogin = {
    state,
    nonce,
    verifier,
    returnTo: options.returnTo,
    accountType: options.accountType,
  };
  sessionStorage.setItem(PENDING_KEY, JSON.stringify(pending));

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid profile",
    code_challenge: challenge,
    code_challenge_method: "S256",
    state,
    nonce,
    login_hint: normalizeIranMobile(options.mobile),
    ui_locales: "fa",
  });

  window.location.assign(`${authority}/protocol/openid-connect/auth?${params.toString()}`);
}

export async function completeLogin(search: string) {
  const query = new URLSearchParams(search);
  const code = query.get("code");
  const returnedState = query.get("state");
  const error = query.get("error");
  if (error) throw new Error(error);
  if (!code || !returnedState) throw new Error("missing_authorization_code");

  const rawPending = sessionStorage.getItem(PENDING_KEY);
  if (!rawPending) throw new Error("missing_login_state");
  const pending = JSON.parse(rawPending) as PendingLogin;
  if (pending.state !== returnedState) throw new Error("invalid_login_state");

  const redirectUri = `${window.location.origin}/auth/callback`;
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: clientId,
    code,
    redirect_uri: redirectUri,
    code_verifier: pending.verifier,
  });

  const response = await fetch(`${authority}/protocol/openid-connect/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) throw new Error("token_exchange_failed");
  const tokens = (await response.json()) as {
    access_token: string;
    id_token?: string;
    expires_in?: number;
  };

  const accessPayload = decodeJwt(tokens.access_token);
  if (tokens.id_token) {
    const idPayload = decodeJwt(tokens.id_token);
    if (idPayload.nonce && idPayload.nonce !== pending.nonce) throw new Error("invalid_nonce");
  }

  const expiresAt = accessPayload.exp
    ? accessPayload.exp * 1000
    : Date.now() + (tokens.expires_in ?? 300) * 1000;

  const session: AuthSession = {
    accessToken: tokens.access_token,
    idToken: tokens.id_token,
    expiresAt,
    roles: rolesFromPayload(accessPayload),
    subject: accessPayload.sub,
  };

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  sessionStorage.removeItem(PENDING_KEY);
  return { session, pending };
}

export function getSession(): AuthSession | null {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    const session = JSON.parse(raw) as AuthSession;
    if (!session.accessToken || session.expiresAt <= Date.now() + 15_000) {
      clearSession();
      return null;
    }
    return session;
  } catch {
    clearSession();
    return null;
  }
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(PENDING_KEY);
}

const PANEL_RULES: Array<{ prefix: string; roles: string[] }> = [
  { prefix: "/panel/startup", roles: ["startup"] },
  { prefix: "/panel/company", roles: ["company"] },
  { prefix: "/panel/admin", roles: ["system_admin"] },
  { prefix: "/panel/creative-house", roles: ["product_owner", "evaluator"] },
  { prefix: "/panel/fund-manager", roles: ["finance"] },
  { prefix: "/panel/emdad", roles: ["supervisor"] },
];

export function canAccessPanelPath(roles: string[], pathname: string) {
  const rule = PANEL_RULES.find((item) => pathname === item.prefix || pathname.startsWith(`${item.prefix}/`));
  return !rule || rule.roles.some((role) => roles.includes(role));
}

export function defaultPanelForRoles(roles: string[]) {
  if (roles.includes("system_admin")) return "/panel/admin";
  if (roles.includes("product_owner") || roles.includes("evaluator")) return "/panel/creative-house";
  if (roles.includes("finance")) return "/panel/fund-manager";
  if (roles.includes("supervisor")) return "/panel/emdad";
  if (roles.includes("company")) return "/panel/company";
  if (roles.includes("startup")) return "/panel/startup";
  return null;
}
