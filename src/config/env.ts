const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const env = {
  apiBaseUrl: trimTrailingSlash(
    import.meta.env.VITE_API_BASE_URL?.trim() || "/api/v1",
  ),
  requestTimeoutMs: 15_000,
} as const;
