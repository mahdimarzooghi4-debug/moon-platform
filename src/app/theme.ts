import { createTheme } from "@mui/material/styles";

/**
 * Shared Moon design-system theme.
 *
 * Figma remains the visual source of truth. These tokens intentionally mirror
 * the existing generated screens so introducing MUI does not redesign them.
 */
export const moonTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#2094E3",
    },
    success: {
      main: "#159455",
    },
    error: {
      main: "#E53E3E",
    },
    text: {
      primary: "#1A202C",
      secondary: "#718096",
    },
    background: {
      default: "#F6F9FB",
      paper: "#FFFFFF",
    },
    divider: "#E4EBF1",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Vazirmatn", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
