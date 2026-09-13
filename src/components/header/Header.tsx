import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { SITE_CONFIG } from "@/constants/SiteConfig";
import Logo from "../common/Logo";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: { xs: 68, md: 78 },
        justifyContent: "center",
        backgroundColor: "rgba(8,7,5,0.91)",
        color: "#fff",
        borderBottom: "1px solid rgba(227,180,78,0.16)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: { xs: "68px !important", md: "78px !important" },
          width: "100%",
          maxWidth: 1600,
          mx: "auto",
          px: { xs: 1.5, sm: 2.5, md: 3, lg: 4 },
          gap: { xs: 1.25, md: 1.5, lg: 2 },
        }}
      >
        <Box sx={{ display: { xs: "flex", md: "none" }, flexShrink: 0 }}>
          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            sx={{ color: "#fff" }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            flex: { xs: 1, md: "0 0 auto" },
          }}
        >
          <Logo variant="light" />
        </Box>

        <NavMenu />

        <Box
          sx={{
            display: { xs: "none", xl: "flex" },
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
            pr: 0.5,
          }}
        >
          <PhoneRoundedIcon sx={{ color: "secondary.light", fontSize: 21 }} />
          <Box>
            <Typography
              sx={{ fontSize: 13, fontWeight: 800, lineHeight: 1.05 }}
            >
              {SITE_CONFIG.CONTACT.PHONE}
            </Typography>
            <Typography
              sx={{ fontSize: 10.5, color: "rgba(255,255,255,.55)", mt: 0.35 }}
            >
              Call or WhatsApp
            </Typography>
          </Box>
        </Box>

        <Button
          href={SITE_CONFIG.CONTACT.PHONE_DIAL}
          aria-label="Get a free consultation"
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            flexShrink: 0,
            minHeight: { sm: 40, md: 44 },
            px: { sm: 1.8, lg: 2.4 },
            borderRadius: 1.5,
            bgcolor: "secondary.light",
            color: "#100d08",
            fontSize: { sm: 12.5, lg: 13.5 },
            fontWeight: 800,
            textTransform: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 10px 24px rgba(183,131,41,.18)",
            "&:hover": {
              bgcolor: "#f1c15b",
              transform: "translateY(-1px)",
            },
          }}
        >
          Free Consultation
        </Button>

        <IconButton
          href={SITE_CONFIG.CONTACT.PHONE_DIAL}
          aria-label="Call Creative Design"
          sx={{
            display: { xs: "inline-flex", sm: "none" },
            flexShrink: 0,
            width: 40,
            height: 40,
            bgcolor: "secondary.light",
            color: "#100d08",
            "&:hover": { bgcolor: "#f1c15b" },
          }}
        >
          <PhoneRoundedIcon fontSize="small" />
        </IconButton>

        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </Toolbar>
    </AppBar>
  );
}
