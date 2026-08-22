import React from "react";
import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource-variable/vazirmatn";
import "./styles/global.css";
import { MahLandingPage } from "./pages/MahLandingPage";
import { rtlCache } from "./theme/rtlCache";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MahLandingPage />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
);
