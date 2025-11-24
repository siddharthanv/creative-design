import { SITE_CONFIG } from "@/constants/SiteConfig";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Creative Design.jpg";

export default function Logo() {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: "inline-block",
        textDecoration: "none",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        component="img"
        src={logo} // <-- Place your logo here
        alt={SITE_CONFIG.COMPANY_NAME}
        sx={{
          height: { xs: 40, md: 55 }, // Responsive logo size
          width: "auto",
          display: "block",
        }}
      />
    </Box>
  );
}
