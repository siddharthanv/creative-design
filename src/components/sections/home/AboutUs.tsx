import { SITE_CONFIG } from "@/constants/SiteConfig";
import { Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box
      id="about"
      sx={{
        padding: { xs: "60px 20px", md: "40px 80px" },
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box sx={{ margin: "0 auto" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 3,
            textAlign: { xs: "center", md: "left" },
            color: "#222",
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#444",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {SITE_CONFIG.COMPANY_NAME} is a Chennai-based construction and
          interior company dedicated to delivering spaces that are modern,
          functional, and long-lasting. We handle both residential and
          commercial projects with complete end-to-end execution. Our focus is
          on quality craftsmanship, transparent communication, and on-time
          completion. We blend creativity with practical design to craft spaces
          that feel truly personal and meaningful. Every project we take on aims
          to build trust, add value, and exceed our clients’ expectations.
        </Typography>
      </Box>
    </Box>
  );
}
