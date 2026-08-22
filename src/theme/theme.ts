import { createTheme } from "@mui/material/styles";
import { mahTokens } from "./tokens";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: mahTokens.colors.brand.blue,
      dark: mahTokens.colors.brand.blueDark,
      light: mahTokens.colors.brand.blueSoft,
      contrastText: mahTokens.colors.white,
    },
    secondary: { main: mahTokens.colors.brand.teal },
    success: {
      main: mahTokens.colors.status.success,
      light: mahTokens.colors.status.successSoft,
    },
    warning: {
      main: mahTokens.colors.status.warning,
      light: mahTokens.colors.status.warningSoft,
    },
    error: {
      main: mahTokens.colors.status.error,
      light: mahTokens.colors.status.errorSoft,
    },
    text: {
      primary: mahTokens.colors.neutral.ink,
      secondary: mahTokens.colors.neutral.muted,
    },
    divider: mahTokens.colors.neutral.border,
    background: {
      default: mahTokens.colors.neutral.page,
      paper: mahTokens.colors.white,
    },
  },
  typography: {
    fontFamily: '"Vazirmatn Variable", "Vazirmatn", Tahoma, sans-serif',
    h1: { fontWeight: 800, fontSize: "48px", lineHeight: "68px" },
    h2: { fontWeight: 800, fontSize: "32px", lineHeight: "48px" },
    h3: { fontWeight: 700, fontSize: "20px", lineHeight: "32px" },
    body1: { fontWeight: 400, fontSize: "16px", lineHeight: "28px" },
    body2: { fontWeight: 400, fontSize: "14px", lineHeight: "24px" },
    caption: { fontWeight: 400, fontSize: "12px", lineHeight: "20px" },
    button: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "22px",
      textTransform: "none",
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { direction: "rtl", scrollBehavior: "smooth" },
        body: {
          margin: 0,
          direction: "rtl",
          backgroundColor: mahTokens.colors.neutral.page,
          color: mahTokens.colors.neutral.ink,
        },
        "*": { boxSizing: "border-box" },
        img: { maxWidth: "100%" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          minHeight: 44,
          borderRadius: 12,
          paddingInline: 20,
          paddingBlock: 11,
          textTransform: "none",
        },
      },
    },
    MuiLink: { styleOverrides: { root: { textDecoration: "none" } } },
  },
});
