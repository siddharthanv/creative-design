import { Box, Typography, IconButton, Divider, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import Logo from "../common/Logo";
import { SITE_CONFIG } from "@/constants/SiteConfig";
import { menuItems } from "../header/menuItems";

const SERVICES = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Painting",
  "Roofing Solutions",
  "Carpentry & Woodwork",
  "Plumbing Works",
  "Electrical Works",
  "Foundation & Structure",
  "False Ceiling",
  "Architecture Design",
];

export default function Footer() {
  const { INSTAGRAM, FACEBOOK, WHATSAPP } = SITE_CONFIG.SOCIAL;

  return (
    <Box sx={{ background: "#111", color: "#eee", pt: 6, pb: 2 }}>
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "auto",
          px: { xs: 3, md: 4 },

          // ⭐ MOBILE → FLEX COLUMN
          display: {
            xs: "flex",
            md: "grid",
          },
          flexDirection: {
            xs: "column",
          },

          // ⭐ DESKTOP → GRID
          gridTemplateColumns: {
            md: "3fr 1fr 1.5fr 1fr",
          },

          gap: 5,
        }}
      >
        {/* COLUMN 1 — LOGO + ABOUT */}
        <Box>
          <Logo />
          <Typography
            sx={{
              fontSize: 14,
              color: "#bbb",
              lineHeight: 1.6,
              mt: 4,
            }}
          >
            We are a Chennai-based Construction, Interior and Renovation company
            delivering premium quality residential and commercial projects.
          </Typography>
        </Box>

        {/* ⭐ MOBILE ONLY — PAGES + SERVICES SIDE BY SIDE (50% EACH) */}
        <Grid
          container
          spacing={3}
          sx={{
            display: { xs: "flex", md: "none" },
            flexWrap: "wrap",
          }}
        >
          {/* Pages Column */}
          <Grid size={{ xs: 6 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Pages</Typography>

            {menuItems.map((item) => (
              <Typography
                key={item.label}
                component="a"
                href={`/${item.path}`}
                sx={{
                  display: "block",
                  mb: 1,
                  fontSize: 14,
                  color: "#bbb",
                  textDecoration: "none",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Grid>

          {/* Services Column */}
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Services</Typography>

            {SERVICES.map((service, index) => (
              <Typography
                key={index}
                sx={{
                  mb: 1,
                  fontSize: 14,
                  color: "#bbb",
                }}
              >
                {service}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* ⭐ DESKTOP ONLY — PAGES */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Pages</Typography>

          {menuItems.map((item) => (
            <Typography
              key={item.label}
              component="a"
              href={item.path}
              sx={{
                display: "block",
                mb: 1,
                fontSize: 14,
                color: "#bbb",
                textDecoration: "none",
                "&:hover": { color: "secondary.main" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* ⭐ DESKTOP ONLY — SERVICES */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Services</Typography>

          {SERVICES.map((service, index) => (
            <Typography
              key={index}
              sx={{
                mb: 1,
                fontSize: 14,
                color: "#bbb",
              }}
            >
              {service}
            </Typography>
          ))}
        </Box>

        {/* FOLLOW US (Always bottom on mobile) */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Follow Us</Typography>

          <IconButton onClick={() => window.open(INSTAGRAM, "_blank")}>
            <InstagramIcon sx={{ color: "#E4405F" }} />
          </IconButton>

          <IconButton onClick={() => window.open(FACEBOOK, "_blank")}>
            <FacebookIcon sx={{ color: "#1877F2" }} />
          </IconButton>

          {/* <IconButton onClick={() => window.open(YOUTUBE, "_blank")}>
            <YouTubeIcon sx={{ color: "#FF0000" }} />
          </IconButton> */}

          <IconButton onClick={() => window.open(WHATSAPP, "_blank")}>
            <WhatsAppIcon sx={{ color: "#25D366" }} />
          </IconButton>

          <IconButton onClick={() => window.open(WHATSAPP, "_blank")}>
            <EmailIcon sx={{ color: "#D44638" }} />
          </IconButton>
        </Box>
      </Box>

      {/* DIVIDER */}
      <Divider sx={{ my: 3, borderColor: "#333" }} />

      {/* BOTTOM BAR */}
      <Typography
        sx={{ textAlign: "center", fontSize: 13, color: "#aaa", mb: 1 }}
      >
        © {new Date().getFullYear()} {SITE_CONFIG.COMPANY_NAME}. All rights
        reserved.
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 12,
          color: "secondary.main",
        }}
      >
        Made by Siddharthan❤️
      </Typography>
    </Box>
  );
}
