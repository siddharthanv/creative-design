import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PortfolioWelcome = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="900px">
          {/* Accent Line */}
          <Box
            sx={{
              width: 60,
              height: 3,
              backgroundColor: "#111",
              mb: 4,
            }}
          />

          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.02em",
              mb: 4,
              color: "#111",
              fontSize: { xs: "2.4rem", md: "3.2rem" },
            }}
          >
            Welcome to Creative Design
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#666",
              mb: 5,
              maxWidth: 700,
            }}
          >
            A Chennai-based interior and construction company shaping
            purposeful, enduring spaces through thoughtful design and precise
            execution.
          </Typography>

          {/* Body Content */}
          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#333",
              mb: 4,
              maxWidth: 850,
            }}
          >
            Creative Design is built on the belief that exceptional spaces
            emerge from clarity, craftsmanship, and collaboration. With a strong
            foundation in design excellence and construction expertise, we
            deliver end-to-end solutions that seamlessly balance aesthetics,
            functionality, and durability.
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#333",
              mb: 4,
              maxWidth: 850,
            }}
          >
            From refined residential interiors to well-engineered commercial
            construction projects, our process is driven by transparent
            communication, meticulous planning, and disciplined execution. We
            work closely with our clients to understand their vision and
            translate it into environments that inspire comfort, efficiency, and
            long-term value.
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#333",
              maxWidth: 850,
            }}
          >
            Rooted in Chennai and guided by industry best practices, Creative
            Design is committed to delivering spaces that not only look refined
            but perform reliably for years to come. We invite you to explore our
            portfolio and experience our approach to thoughtful, enduring
            design.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioWelcome;
