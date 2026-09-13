import { SITE_CONFIG } from "@/constants/SiteConfig";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/creative-design-logo.png";
import lightLogo from "../../assets/images/creative-design-logo-light.png";

interface LogoProps {
  variant?: "default" | "light";
  footer?: boolean;
}

export default function Logo({
  variant = "default",
  footer = false,
}: LogoProps) {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        lineHeight: 0,
      }}
    >
      <Box
        component="img"
        src={variant === "light" ? lightLogo : logo}
        alt={`${SITE_CONFIG.COMPANY_NAME} logo`}
        sx={{
          width: "auto",
          height: footer
            ? { xs: 72, sm: 82, md: 88 }
            : { xs: 50, sm: 54, md: 62 },
          maxWidth: footer
            ? { xs: 250, md: 310 }
            : { xs: 190, sm: 210, md: 250 },
          objectFit: "contain",
          display: "block",
        }}
      />
    </Box>
  );
}
