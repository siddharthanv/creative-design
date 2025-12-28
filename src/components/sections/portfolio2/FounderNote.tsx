import { Box, Container, Typography } from "@mui/material";

const FoundersNote = () => {
  return (
    <Box
      id="founder-note"
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

          {/* Section Label */}
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.85rem",
              color: "#777",
              mb: 2,
            }}
          >
            Founder’s Note
          </Typography>

          {/* Heading */}
          <Typography
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.02em",
              mb: 5,
              color: "#111",
              fontSize: { xs: "2.1rem", md: "2.8rem" },
            }}
          >
            Design Must Serve People, Not Just Aesthetics
          </Typography>

          {/* Body */}
          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#333",
              mb: 4,
              maxWidth: 850,
            }}
          >
            At Creative Design, our foundation is built on a simple belief—good
            design must serve people, not just aesthetics. Having spent years
            working closely with construction sites, craftsmen, and clients, I
            understood early on that successful projects require more than
            attractive drawings.
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
            They demand clear communication, realistic planning, and
            accountability at every stage. Creative Design was established to
            bridge the gap between design intent and execution reality, ensuring
            that ideas translate seamlessly into well-built spaces.
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
            Our focus has always been on delivering honest work—spaces that are
            thoughtfully designed, structurally sound, and built to last.
            Whether it is a family home, a commercial workspace, or a renovation
            project, we approach every assignment with the same level of
            responsibility and attention to detail.
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#333",
              mb: 6,
              maxWidth: 850,
            }}
          >
            As a Chennai-based interior and construction company, we take pride
            in contributing to the city’s growing architectural landscape while
            maintaining trust, transparency, and quality as our core values. Our
            goal is not just to complete projects, but to create spaces that our
            clients can confidently rely on for years to come.
          </Typography>

          {/* Signature */}
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "#111",
            }}
          >
            — Ashok (Founder, Creative Design)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FoundersNote;
