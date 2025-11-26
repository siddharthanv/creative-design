import { Box, Typography, IconButton, Divider, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import Logo from "../common/Logo";
import { SITE_CONFIG } from "@/constants/SiteConfig";
import { menuItems } from "../header/menuItems";

function FooterLinks({
  heading,
  items,
  hrefPrefix,
}: {
  heading: string;
  items: { label?: string; title?: string; path?: string }[];
  hrefPrefix?: string;
}) {
  return (
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 2 }}>{heading}</Typography>
      {items.map((item, i) => {
        const text = item.label ?? item.title ?? "";
        const path = item.path ?? item.path ?? "";
        const href = hrefPrefix ? `${hrefPrefix}${path}` : undefined;

        return (
          <Typography
            key={i}
            component={href ? "a" : "p"}
            href={href}
            sx={{
              display: "block",
              mb: 1,
              fontSize: 14,
              color: "#bbb",
              textDecoration: "none",
              "&:hover": { color: "secondary.main" },
            }}
          >
            {text}
          </Typography>
        );
      })}
    </Box>
  );
}

export default function Footer() {
  const { INSTAGRAM, FACEBOOK, WHATSAPP, EMAIL_LINK } = SITE_CONFIG.SOCIAL;
  const pagesHref = "/#/";

  return (
    <Box sx={{ background: "#111", color: "#eee", pt: 6, pb: 2 }}>
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "auto",
          px: { xs: 3, md: 4 },
          display: { xs: "flex", md: "grid" },
          flexDirection: { xs: "column" },
          gridTemplateColumns: { md: "3fr 1fr 1.5fr 1fr" },
          gap: 5,
        }}
      >
        {/* LOGO + ABOUT */}
        <Box>
          <Logo />
          <Typography
            sx={{ fontSize: 14, color: "#bbb", lineHeight: 1.6, mt: 4 }}
          >
            {SITE_CONFIG.BRANDING.SHORT_ABOUT}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "secondary.main",
              lineHeight: 1.6,
              mt: 2,
            }}
          >
            GST Registration Number: {SITE_CONFIG.GST_REG_NUM}
          </Typography>
        </Box>

        {/* MOBILE: Pages + Services side-by-side */}
        <Grid
          container
          spacing={3}
          sx={{ display: { xs: "flex", md: "none" }, flexWrap: "wrap" }}
        >
          <Grid size={{ xs: 6 }}>
            <FooterLinks
              heading="Pages"
              items={menuItems}
              hrefPrefix={pagesHref}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <FooterLinks heading="Services" items={SITE_CONFIG.SERVICES} />
          </Grid>
        </Grid>

        {/* DESKTOP: Pages */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <FooterLinks
            heading="Pages"
            items={menuItems}
            hrefPrefix={pagesHref}
          />
        </Box>

        {/* DESKTOP: Services */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <FooterLinks heading="Services" items={SITE_CONFIG.SERVICES} />
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

          <IconButton component="a" href={EMAIL_LINK}>
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
        sx={{ textAlign: "center", fontSize: 12, color: "secondary.main" }}
      >
        Made by Siddharthan ❤️
      </Typography>
    </Box>
  );
}
