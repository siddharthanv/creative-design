import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#080808",
      light: "#2B2B2B",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#B78329",
      light: "#E3B44E",
      dark: "#8F651C",
      contrastText: "#080808",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111111",
      secondary: "#5F5A52",
    },
    divider: "#E8E1D5",
    success: {
      main: "#2E7D32",
    },
    warning: {
      main: "#ED6C02",
    },
    error: {
      main: "#D32F2F",
    },
    greyBg: {
      main: "#FAF9F6",
    },
    gold: {
      main: "#B78329",
      light: "#E3B44E",
      dark: "#8F651C",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.4rem", fontWeight: 700 },
    h3: { fontSize: "2rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        color: "secondary",
      },
    },
  },
});

export default theme;
