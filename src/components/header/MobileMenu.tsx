import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { SITE_CONFIG } from "@/constants/SiteConfig";
import Logo from "../common/Logo";
import { getMenuItemTarget, menuItems } from "./menuItems";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  const location = useLocation();
  const activeSection = new URLSearchParams(location.search).get("section");

  const isItemActive = (path: string, section?: string) => {
    if (section) {
      return location.pathname === path && activeSection === section;
    }
    if (path === "/") {
      return location.pathname === "/" && !activeSection;
    }
    return location.pathname === path;
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "min(88vw, 340px)",
          color: "#fff",
          background:
            "linear-gradient(180deg, #0a0907 0%, #12100c 58%, #17130d 100%)",
          borderRight: "1px solid rgba(227,180,78,0.18)",
        },
      }}
    >
      <Box
        sx={{
          px: 2.25,
          py: 2,
          minHeight: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Logo variant="light" />
        <IconButton
          aria-label="Close navigation"
          onClick={onClose}
          sx={{ color: "rgba(255,255,255,.86)" }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(227,180,78,0.16)" }} />

      <List sx={{ px: 1.5, pt: 2 }}>
        {menuItems.map((item) => {
          const active = isItemActive(item.path, item.section);

          return (
            <ListItemButton
              component={Link}
              to={getMenuItemTarget(item)}
              key={`${item.label}-${item.section ?? item.path}`}
              onClick={onClose}
              sx={{
                minHeight: 50,
                borderRadius: 1.5,
                mb: 0.5,
                px: 2,
                color: active ? "secondary.light" : "rgba(255,255,255,.9)",
                borderLeft: "3px solid",
                borderColor: active ? "secondary.light" : "transparent",
                bgcolor: active ? "rgba(227,180,78,.08)" : "transparent",
                "&:hover": {
                  bgcolor: "rgba(227,180,78,.08)",
                  color: "secondary.light",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: active ? 700 : 600 }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ mt: "auto", p: 2.25 }}>
        <Box
          sx={{
            p: 2,
            mb: 1.5,
            borderRadius: 2,
            border: "1px solid rgba(227,180,78,.18)",
            bgcolor: "rgba(255,255,255,.035)",
          }}
        >
          <Typography
            sx={{ color: "rgba(255,255,255,.55)", fontSize: 12, mb: 0.4 }}
          >
            Call or WhatsApp
          </Typography>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
            {SITE_CONFIG.CONTACT.PHONE}
          </Typography>
        </Box>
        <Button
          fullWidth
          href={SITE_CONFIG.CONTACT.PHONE_DIAL}
          startIcon={<PhoneRoundedIcon />}
          sx={{
            minHeight: 48,
            bgcolor: "secondary.light",
            color: "#120f09",
            fontWeight: 800,
            textTransform: "none",
            "&:hover": { bgcolor: "#f1c15b" },
          }}
        >
          Call for Free Consultation
        </Button>
      </Box>
    </Drawer>
  );
}
