import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#030303", // your main color (rich black)
      light: "#3d3d3d", // soft grey tint (clean + modern)
      dark: "#000000", // pure black for hover/active states
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FF6D00",
      light: "#FF9E40",
      dark: "#C43E00",
      contrastText: "#ffffff",
    },

    // Custom colors
    success: {
      main: "#2E7D32",
    },
    warning: {
      main: "#ED6C02",
    },
    error: {
      main: "#D32F2F",
    },

    // Optional: Custom palette extension
    greyBg: {
      main: "#f5f5f5",
    },
    gold: {
      main: "#D4AF37",
      light: "#F5D27A",
      dark: "#8B6F28",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.4rem", fontWeight: 700 },
    h3: { fontSize: "2rem", fontWeight: 600 },

    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },

    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
