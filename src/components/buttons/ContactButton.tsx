import { SITE_CONFIG } from "@/constants/SiteConfig";
import { Button } from "@mui/material";

export default function ContactButton() {
  return (
    <Button
      variant="contained"
      color="secondary"
      href={SITE_CONFIG.CONTACT.PHONE_DIAL}
      sx={{
        ml: { xs: 0, md: 2 },
        minWidth: { xs: 92, md: 112 },
        borderRadius: "30px",
        fontWeight: 700,
        px: { xs: 2, md: 3 },
        py: 1,
        color: "secondary.contrastText",
        "&:hover": {
          backgroundColor: "secondary.dark",
          color: "#fff",
        },
      }}
    >
      Call Now
    </Button>
  );
}
