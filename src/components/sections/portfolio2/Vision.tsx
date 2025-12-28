import { Box, Container, Typography, Divider } from "@mui/material";

const Vision = () => {
  return (
    <Box
      id="vision"
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
            Our Vision
          </Typography>

          {/* Heading */}
          <Typography
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.02em",
              mb: 4,
              color: "#111",
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}
          >
            Shaping Spaces with Purpose and Longevity
          </Typography>

          {/* Vision Statement */}
          <Typography
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "#333",
              mb: 8,
              maxWidth: 850,
            }}
          >
            At Creative Design, our vision is to create meaningful spaces that
            reflect quality, purpose, and long-term value. We aspire to shape
            interiors and structures that enhance everyday living and working
            experiences while maintaining design integrity, functional
            excellence, and responsible construction practices.
          </Typography>

          {/* Vision Statements */}
          <Box>
            {/* Statement 01 */}
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  letterSpacing: "0.12em",
                  color: "#999",
                  mb: 1,
                }}
              >
                Vision 01
              </Typography>

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  color: "#111",
                  mb: 2,
                }}
              >
                To Be a Trusted Design & Construction Brand
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "#444",
                  maxWidth: 700,
                }}
              >
                Establish Creative Design as a reliable interior and
                construction company known for consistency, transparency, and
                quality craftsmanship in every project we deliver.
              </Typography>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Statement 02 */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  letterSpacing: "0.12em",
                  color: "#999",
                  mb: 1,
                }}
              >
                Vision 02
              </Typography>

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  color: "#111",
                  mb: 2,
                }}
              >
                To Build Timeless & Functional Spaces
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "#444",
                  maxWidth: 700,
                }}
              >
                Create interiors and buildings that remain relevant over
                time—spaces designed with clarity, durability, and thoughtful
                attention to how people live and work.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Vision;
