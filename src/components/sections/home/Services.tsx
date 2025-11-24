// src/components/GoldServicesSection.tsx
import { Box, Typography, Paper } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import RoofingIcon from "@mui/icons-material/Roofing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import BoltIcon from "@mui/icons-material/Bolt";
import FoundationsIcon from "@mui/icons-material/PrecisionManufacturing";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import ArchitectureIcon from "@mui/icons-material/Architecture";

const services = [
  { title: "Interior Design", icon: <FormatPaintIcon fontSize="large" /> },
  {
    title: "Commercial Construction",
    icon: <EngineeringIcon fontSize="large" />,
  },
  {
    title: "Residential Construction",
    icon: <HomeWorkIcon fontSize="large" />,
  },
  { title: "Carpentry & Woodwork", icon: <CarpenterIcon fontSize="large" /> },

  { title: "Plumbing Works", icon: <PlumbingIcon fontSize="large" /> },
  { title: "Electrical Works", icon: <BoltIcon fontSize="large" /> },
  {
    title: "Foundation & Structure",
    icon: <FoundationsIcon fontSize="large" />,
  },
  { title: "False Ceiling", icon: <WallpaperIcon fontSize="large" /> },
  { title: "Roofing Solutions", icon: <RoofingIcon fontSize="large" /> },
  { title: "Architecture Design", icon: <ArchitectureIcon fontSize="large" /> },
];

export default function GoldServicesSection(): JSX.Element {
  return (
    <Box
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
          color: "#D4AF37",
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
        {services.map((s) => (
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
              border: "1px solid rgba(212,175,55,0.12)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              boxShadow: "0 6px 22px rgba(203,161,53,0.06)",
              transition: "transform .28s ease, box-shadow .28s ease",
              cursor: "default",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 14px 44px rgba(203,161,53,0.16)",
                borderColor: "rgba(212,175,55,0.28)",
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
                  "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.18), rgba(212,175,55,0.06) 35%, transparent 50%)",
                border: "1px solid rgba(212,175,55,0.12)",
              }}
            >
              <Box sx={{ color: "#F5D27A" }}>{s.icon}</Box>
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
