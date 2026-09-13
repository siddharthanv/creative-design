import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton, Tooltip } from "@mui/material";

import { SITE_CONFIG } from "@/constants/SiteConfig";

const socialItems = [
  {
    label: "Instagram",
    icon: <InstagramIcon fontSize="small" />,
    url: SITE_CONFIG.SOCIAL.INSTAGRAM,
  },
  {
    label: "Facebook",
    icon: <FacebookRoundedIcon fontSize="small" />,
    url: SITE_CONFIG.SOCIAL.FACEBOOK,
  },
  {
    label: "Google",
    icon: <GoogleIcon fontSize="small" />,
    url: SITE_CONFIG.SOCIAL.GOOGLE,
  },
];

export default function SocialMediaSpeedDial() {
  return (
    <Box
      component="aside"
      aria-label="Creative Design social links"
      sx={{
        position: "fixed",
        right: { xs: 10, sm: 14, md: 18 },
        top: { xs: "auto", md: "50%" },
        bottom: { xs: 18, md: "auto" },
        transform: { xs: "none", md: "translateY(-50%)" },
        zIndex: (theme) => theme.zIndex.tooltip + 1,
        display: "flex",
        flexDirection: "column",
        gap: { xs: 0.7, md: 0.85 },
        p: { xs: 0.55, md: 0.65 },
        borderRadius: 99,
        bgcolor: "rgba(10,9,7,.82)",
        border: "1px solid rgba(227,180,78,.32)",
        boxShadow: "0 14px 35px rgba(0,0,0,.28)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {socialItems.map((item) => (
        <Tooltip key={item.label} title={item.label} placement="left" arrow>
          <IconButton
            component="a"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open Creative Design on ${item.label}`}
            sx={{
              width: { xs: 38, md: 42 },
              height: { xs: 38, md: 42 },
              color: "#fff",
              bgcolor: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.08)",
              transition: "all .22s ease",
              "&:hover": {
                color: "#120f09",
                bgcolor: "secondary.light",
                borderColor: "secondary.light",
                transform: "translateX(-2px)",
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}
