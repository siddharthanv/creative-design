import { Box, Link, Typography } from "@mui/material";
import type { ReactNode } from "react";
import VisitFormFields from "./VisitFormFields";
import { SITE_CONFIG } from "@/constants/SiteConfig";

export default function VisitForm() {
  const contact = SITE_CONFIG.CONTACT;

  return (
    <Box
      id="visit-form"
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        color: "white",
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 6, md: 8 },
        justifyContent: "center",
        alignItems: { xs: "stretch", md: "center" },
      }}
    >
      <Box sx={{ flex: 1, maxWidth: 620 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.12,
            mb: 2.5,
            fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3rem" },
          }}
        >
          Let’s Build Something Extraordinary
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 16, sm: 18 },
            color: "rgba(255,255,255,.72)",
            mb: 5,
            maxWidth: 460,
          }}
        >
          Share your requirements and our team will contact you immediately.
        </Typography>

        <Box sx={{ display: "grid", gap: 3.5 }}>
          <ContactBlock label="Email">
            <ContactLink href={`mailto:${contact.EMAIL}`}>
              {contact.EMAIL}
            </ContactLink>
          </ContactBlock>

          <ContactBlock label="Call or WhatsApp">
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
              <ContactLink href={contact.PHONE_DIAL}>
                {contact.PHONE}
              </ContactLink>
              <Typography sx={{ color: "rgba(255,255,255,.4)" }}>•</Typography>
              <ContactLink href={contact.PHONE_SECONDARY_DIAL}>
                {contact.PHONE_SECONDARY}
              </ContactLink>
            </Box>
          </ContactBlock>

          <ContactBlock label="Location">
            <Typography
              sx={{
                fontSize: { xs: 17, sm: 19 },
                fontWeight: 600,
                lineHeight: 1.55,
                maxWidth: 560,
              }}
            >
              {contact.ADDRESS_FULL}
            </Typography>
          </ContactBlock>

          <ContactBlock label="Business Hours">
            <Typography sx={{ fontSize: { xs: 17, sm: 19 }, fontWeight: 600 }}>
              {contact.BUSINESS_HOURS}
            </Typography>
          </ContactBlock>
        </Box>
      </Box>

      <VisitFormFields />
    </Box>
  );
}

function ContactBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 12,
          color: "secondary.light",
          textTransform: "uppercase",
          letterSpacing: ".14em",
          fontWeight: 800,
          mb: 0.65,
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}

function ContactLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        color: "#fff",
        fontSize: { xs: 17, sm: 19 },
        fontWeight: 700,
        lineHeight: 1.4,
        transition: "color .2s ease",
        "&:hover": { color: "secondary.light" },
      }}
    >
      {children}
    </Link>
  );
}
