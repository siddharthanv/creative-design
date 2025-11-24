import { Box, Typography } from "@mui/material";
import VisitFormFields from "./VisitFormFields";
import { SITE_CONFIG } from "@/constants/SiteConfig";

export default function VisitForm() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0D0D0D",
        color: "white",
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 8,
        justifyContent: "center",
        alignItems: { xs: "start", md: "center" },
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ flex: 1, maxWidth: 600 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, lineHeight: 1.2, mb: 3 }}
        >
          Let’s Build Something Extraordinary
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            color: "#cccccc",
            mb: 5,
            maxWidth: 380,
          }}
        >
          Share your requirements and our team will contact you immediately.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box>
            <Typography sx={{ fontSize: "14px", color: "#999" }}>
              Email
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              {SITE_CONFIG.CONTACT.EMAIL}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "14px", color: "#999" }}>
              Call or WhatsApp Us
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              {SITE_CONFIG.CONTACT.PHONE}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "14px", color: "#999" }}>
              Location
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              {SITE_CONFIG.CONTACT.ADDRESS_FULL}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "14px", color: "#999" }}>
              Business Hours
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              {SITE_CONFIG.CONTACT.BUSINESS_HOURS}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE FORM */}
      <VisitFormFields />
    </Box>
  );
}
