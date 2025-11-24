import { Box, Typography } from "@mui/material";

export default function HeroPortfolio() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "30vh", md: "50vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "900px", p: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Our Projects
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 300, fontSize: { xs: "1rem", md: "1.4rem" } }}
        >
          Premium residential & commercial construction delivered with quality.
        </Typography>
      </Box>
    </Box>
  );
}
