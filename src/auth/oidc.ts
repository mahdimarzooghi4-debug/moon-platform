export type AccountType = "company" | "startup" | "internal";

export type AuthSession = {
  accessToken: string;
  idToken?: string;
  refreshToken?: string;
  expiresAt: number;
  roles: string[];
  panelRoles?: string[];
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

export function toPersianLoginDigits(value: string) {
  const persian = "۰۱۲۳۴۵۶۷۸۹";
  const arabic = "٠١٢٣٤٥٦٧٨٩";
  return value.replace(/[0-9٠-٩]/g, (digit) => {
    const index = arabic.indexOf(digit);
    return persian[index >= 0 ? index : Number(digit)];
  });
}

// Preserve selection while replacing digits in text and tel inputs.
export function localizePersianNumericInput(input: HTMLInputElement): string {
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const direction = input.selectionDirection;
  const display = toPersianLoginDigits(input.value);
  if (input.value !== display) {
    input.value = display;
    if (start !== null && end !== null) {
      input.setSelectionRange(start, end, direction ?? "none");
    }
  }
  return display;
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
  const mobile = normalizeIranMobile(options.mobile);
  if (!isValidIranMobile(mobile)) throw new Error("invalid_mobile");
  const verifier = randomValue(64);
  const challenge = await sha256(verifier);
  const state = randomValue();
  const nonce = randomValue();
  const redirectUri = `${window.location.origin}/auth/callback`;

  const pending: PendingLogin = {
    state,
    nonce,
    verifier,
    returnTo: safePanelReturnTo(options.returnTo),
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
    login_hint: mobile,
    prompt: "login",
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
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) throw new Error("token_exchange_failed");
  const tokens = (await response.json()) as {
    access_token: string;
    id_token?: string;
    refresh_token?: string;
    expires_in?: number;
  };

  if (typeof tokens.access_token !== "string" || typeof tokens.id_token !== "string")
    throw new Error("missing_token");
  const accessPayload = decodeJwt(tokens.access_token);
  const idPayload = decodeJwt(tokens.id_token);
  if (typeof pending.nonce !== "string" || !pending.nonce || idPayload.nonce !== pending.nonce)
    throw new Error("invalid_nonce");
  if (typeof accessPayload.sub !== "string" || !accessPayload.sub || idPayload.sub !== accessPayload.sub)
    throw new Error("invalid_subject");

  const expiresAt = accessPayload.exp
    ? accessPayload.exp * 1000
    : Date.now() + (tokens.expires_in ?? 300) * 1000;

  const session: AuthSession = {
    accessToken: tokens.access_token,
    idToken: tokens.id_token,
    refreshToken: tokens.refresh_token,
    expiresAt,
    roles: rolesFromPayload(accessPayload),
    subject: accessPayload.sub,
  };

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  sessionStorage.removeItem(PENDING_KEY);
  return { session, pending };
}

function readStoredSession(): AuthSession | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) as AuthSession : null;
  } catch {
    clearSession();
    return null;
  }
}

let refreshing: Promise<AuthSession | null> | undefined;

export async function getValidSession(): Promise<AuthSession | null> {
  const session = readStoredSession();
  if (!session?.accessToken) return null;
  if (session.expiresAt > Date.now() + 15_000) return session;
  if (!session.refreshToken) {
    if (session.expiresAt > Date.now()) return session;
    clearSession();
    return null;
  }

  if (!refreshing) {
    refreshing = refreshSession(session, session.refreshToken).finally(() => {
      refreshing = undefined;
    });
  }
  return refreshing;
}

async function refreshSession(session: AuthSession, refreshToken: string): Promise<AuthSession | null> {
  const isSameSession = () => readStoredSession()?.refreshToken === refreshToken;
  try {
    const response = await fetch(`${authority}/protocol/openid-connect/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        client_id: clientId,
        refresh_token: refreshToken,
      }),
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      const failure = await response.json().catch(() => null);
      if (failure?.error === "invalid_grant" && isSameSession()) clearSession();
      return null;
    }
    const tokens = (await response.json()) as {
      access_token?: string;
      id_token?: string;
      refresh_token?: string;
      expires_in?: number;
    };
    if (!tokens.access_token || !isSameSession()) return null;

    const payload = decodeJwt(tokens.access_token);
    if (!payload.sub || payload.sub !== session.subject) return null;
    const latest = readStoredSession();
    const next: AuthSession = {
      ...session,
      panelRoles: latest?.panelRoles,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token ?? refreshToken,
      idToken: tokens.id_token ?? session.idToken,
      expiresAt: payload.exp ? payload.exp * 1000 : Date.now() + (tokens.expires_in ?? 300) * 1000,
      roles: rolesFromPayload(payload),
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(next));
    return next;
  } catch {
    return isSameSession() && session.expiresAt > Date.now() ? session : null;
  }
}

export function setSessionPanelRoles(panelRoles: string[]) {
  const session = readStoredSession();
  if (!session) return null;

  const next: AuthSession = {
    ...session,
    panelRoles: [...new Set(panelRoles)],
  };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(next));
  return next;
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
  return Boolean(rule?.roles.some((role) => roles.includes(role)));
}

// A navigation preference is never an authorization decision.
export function safePanelReturnTo(value?: string): string | undefined {
  if (!value || !value.startsWith("/panel/") || /[\\\u0000-\u0020\u007f]/.test(value)) return undefined;
  try {
    const rawPath = value.split(/[?#]/, 1)[0];
    if (/%2f|%5c|%2e/i.test(rawPath) || /(?:^|\/)\.{1,2}(?:\/|$)/.test(rawPath)) return undefined;
    const parsed = new URL(value, "https://moon.invalid");
    if (parsed.origin !== "https://moon.invalid" || parsed.hash ||
        /%2f|%5c|%2e/i.test(parsed.pathname)) return undefined;
    if (!PANEL_RULES.some(rule => parsed.pathname === rule.prefix || parsed.pathname.startsWith(rule.prefix + "/"))) return undefined;
    return parsed.pathname + parsed.search;
  } catch {
    return undefined;
  }
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
