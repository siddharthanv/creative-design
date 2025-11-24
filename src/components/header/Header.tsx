import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import ContactButton from "../buttons/ContactButton";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import Logo from "../common/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 64, md: 70 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={() => setOpen(true)} sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Logo />

          <NavMenu />

          <ContactButton />

          <MobileMenu open={open} onClose={() => setOpen(false)} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
