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
      <Typography sx={{ fontWeight: 700, mb: 2, color: "secondary.light" }}>
        {heading}
      </Typography>
      {items.map((item, i) => {
        const text = item.label ?? item.title ?? "";
        const path = item.path ?? "";
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
              color: "rgba(255,255,255,0.70)",
              textDecoration: "none",
              transition: "color .2s ease",
              "&:hover": { color: "secondary.light" },
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
    <Box
      sx={{
        background: "linear-gradient(180deg, #0B0B0B 0%, #050505 100%)",
        color: "#fff",
        pt: 7,
        pb: 2,
        borderTop: "2px solid",
        borderColor: "secondary.dark",
      }}
    >
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
        <Box>
          <Logo variant="light" footer />
          <Typography
            sx={{
              fontSize: 14,
              color: "rgba(255,255,255,0.70)",
              lineHeight: 1.7,
              mt: 3,
              maxWidth: 480,
            }}
          >
            {SITE_CONFIG.BRANDING.SHORT_ABOUT}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: "secondary.light",
              lineHeight: 1.6,
              mt: 2,
            }}
          >
            GST Registration Number: {SITE_CONFIG.GST_REG_NUM}
          </Typography>
        </Box>

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

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <FooterLinks
            heading="Pages"
            items={menuItems}
            hrefPrefix={pagesHref}
          />
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <FooterLinks heading="Services" items={SITE_CONFIG.SERVICES} />
        </Box>

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={{ fontWeight: 700, mb: 2, color: "secondary.light" }}>
            Follow Us
          </Typography>

          <IconButton onClick={() => window.open(INSTAGRAM, "_blank")}>
            <InstagramIcon sx={{ color: "secondary.light" }} />
          </IconButton>
          <IconButton onClick={() => window.open(FACEBOOK, "_blank")}>
            <FacebookIcon sx={{ color: "secondary.light" }} />
          </IconButton>
          <IconButton onClick={() => window.open(WHATSAPP, "_blank")}>
            <WhatsAppIcon sx={{ color: "secondary.light" }} />
          </IconButton>
          <IconButton component="a" href={EMAIL_LINK}>
            <EmailIcon sx={{ color: "secondary.light" }} />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ my: 3, borderColor: "rgba(183,131,41,0.28)" }} />

      <Typography
        sx={{
          textAlign: "center",
          fontSize: 13,
          color: "rgba(255,255,255,0.60)",
          mb: 1,
        }}
      >
        © {new Date().getFullYear()} {SITE_CONFIG.COMPANY_NAME}. All rights
        reserved.
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: 12, color: "secondary.light" }}
      >
        Made by Siddharthan ❤️
      </Typography>
    </Box>
  );
}
