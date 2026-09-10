import { QueryClient } from "@tanstack/react-query";

/**
 * A single client-side server-state cache prevents duplicate requests between
 * screens/components. Mutations are never retried automatically because Moon
 * contains financial and workflow commands that require explicit idempotency.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      gcTime: 5 * 60_000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: false,
    },
  },
});
