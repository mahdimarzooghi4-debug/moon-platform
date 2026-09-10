import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { moonTheme } from "./theme";
import { queryClient } from "./queryClient";

const rtlCache = createCache({
  key: "moon-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={moonTheme}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
