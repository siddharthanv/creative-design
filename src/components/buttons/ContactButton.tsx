import { SITE_CONFIG } from "@/constants/SiteConfig";
import { Button } from "@mui/material";

export default function ContactButton() {
  return (
    <Button
      variant="contained"
      href={SITE_CONFIG.CONTACT.PHONE_DIAL} // ← Replace with your real number
      sx={{
        ml: 2,
        borderRadius: "30px",
        fontWeight: "bold",
        paddingX: 3,
      }}
    >
      Call Now
    </Button>
  );
}
