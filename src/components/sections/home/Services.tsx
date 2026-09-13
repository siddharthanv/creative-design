// src/components/GoldServicesSection.tsx
import { SITE_CONFIG } from "@/constants/SiteConfig";
import { Box, Typography, Paper } from "@mui/material";

export default function GoldServicesSection() {
  return (
    <Box
      id="services"
      component="section"
      sx={{
        background: "linear-gradient(180deg,#0b0b0b 0%, #111213 100%)",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "secondary.light",
          fontWeight: 800,
          mb: { xs: 4, md: 6 },
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}
      >
        Our Services
      </Typography>

      {/* Grid: 2 cols xs, 3 cols sm, 5 cols md+ */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gap: { xs: 2, sm: 3, md: 4 },
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },
          // ensures every cell has same height baseline and aligns columns
          alignItems: "stretch",
        }}
      >
        {SITE_CONFIG.SERVICES.map((s) => (
          <Paper
            key={s.title}
            elevation={0}
            sx={{
              // fixed, equal card height so top and bottom align perfectly
              height: { xs: 140, sm: 150, md: 160 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 2,
              borderRadius: 2,
              border: "1px solid rgba(183,131,41,0.18)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              boxShadow: "0 6px 22px rgba(183,131,41,0.08)",
              transition: "transform .28s ease, box-shadow .28s ease",
              cursor: "default",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 14px 44px rgba(183,131,41,0.20)",
                borderColor: "rgba(183,131,41,0.38)",
              },
            }}
          >
            {/* gold circular icon backdrop */}
            <Box
              sx={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                mb: 1.2,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(183,131,41,0.22), rgba(183,131,41,0.08) 35%, transparent 50%)",
                border: "1px solid rgba(183,131,41,0.18)",
              }}
            >
              <Box sx={{ color: "secondary.light" }}>{s.icon}</Box>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: "0.90rem", md: "0.95rem" },
                px: 1,
                lineHeight: 1.1,
              }}
            >
              {s.title}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
