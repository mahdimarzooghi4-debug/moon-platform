import { env } from "../../config/env";

export type ApiErrorPayload = {
  message?: string;
  code?: string;
  id_correlation?: string;
  errors?: unknown;
};

export class ApiError extends Error {
  readonly status: number;
  readonly code?: string;
  readonly correlationId?: string;
  readonly details?: unknown;

  constructor(status: number, payload: ApiErrorPayload = {}) {
    super(payload.message || `Request failed with status ${status}`);
    this.name = "ApiError";
    this.status = status;
    this.code = payload.code;
    this.correlationId = payload.id_correlation;
    this.details = payload.errors;
  }
}

type ApiRequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  accessToken?: string;
  timeoutMs?: number;
};

const resolveUrl = (path: string) => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${env.apiBaseUrl}/${path.replace(/^\/+/, "")}`;
};

export async function apiRequest<T>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const controller = new AbortController();
  const timeout = window.setTimeout(
    () => controller.abort(),
    options.timeoutMs ?? env.requestTimeoutMs,
  );

  const headers = new Headers(options.headers);
  headers.set("Accept", "application/json");

  if (options.accessToken) {
    headers.set("Authorization", `Bearer ${options.accessToken}`);
  }

  const isFormData = options.body instanceof FormData;
  if (options.body !== undefined && !isFormData) {
    headers.set("Content-Type", "application/json");
  }

  try {
    const response = await fetch(resolveUrl(path), {
      ...options,
      headers,
      body:
        options.body === undefined
          ? undefined
          : isFormData
            ? (options.body as FormData)
            : JSON.stringify(options.body),
      signal: controller.signal,
    });

    if (!response.ok) {
      let payload: ApiErrorPayload = {};
      try {
        payload = (await response.json()) as ApiErrorPayload;
      } catch {
        payload = {
          message: response.statusText,
          id_correlation:
            response.headers.get("x-correlation-id") ?? undefined,
        };
      }

      if (!payload.id_correlation) {
        payload.id_correlation =
          response.headers.get("x-correlation-id") ?? undefined;
      }

      throw new ApiError(response.status, payload);
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await response.json()) as T;
  } finally {
    window.clearTimeout(timeout);
  }
}
