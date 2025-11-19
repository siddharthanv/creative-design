import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    greyBg: Palette["primary"];
  }
  interface PaletteOptions {
    greyBg?: PaletteOptions["primary"];
  }
}
