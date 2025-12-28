import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Mission = () => {
  return (
    <Box
      id="mission"
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
            Our Mission
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
            Designing with Intent. Building with Responsibility.
          </Typography>

          {/* Mission Statement */}
          <Typography
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "#333",
              mb: 8,
              maxWidth: 850,
            }}
          >
            Our mission at Creative Design is to deliver thoughtfully designed
            and well-executed interior and construction solutions that balance
            aesthetics, functionality, and durability. We are committed to
            building spaces that meet our clients’ needs, respect their
            investment, and stand the test of time through quality workmanship
            and transparent processes.
          </Typography>
        </Box>

        {/* Mission Pillars */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: 8,
            rowGap: 6,
            maxWidth: "1000px",
          }}
        >
          {/* Pillar 01 */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                color: "#999",
                mb: 1,
              }}
            >
              01
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.2rem",
                color: "#111",
                mb: 1.5,
              }}
            >
              Design with Purpose
            </Typography>
            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#444",
                maxWidth: 420,
              }}
            >
              Create interior and construction solutions that are functional,
              timeless, and aligned with the client’s lifestyle or business
              goals.
            </Typography>
          </Box>

          {/* Pillar 02 */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                color: "#999",
                mb: 1,
              }}
            >
              02
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.2rem",
                color: "#111",
                mb: 1.5,
              }}
            >
              Quality in Execution
            </Typography>
            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#444",
                maxWidth: 420,
              }}
            >
              Maintain high standards in materials, craftsmanship, and site
              practices to ensure long-lasting and reliable outcomes.
            </Typography>
          </Box>

          {/* Pillar 03 */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                color: "#999",
                mb: 1,
              }}
            >
              03
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.2rem",
                color: "#111",
                mb: 1.5,
              }}
            >
              Transparency & Trust
            </Typography>
            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#444",
                maxWidth: 420,
              }}
            >
              Follow clear communication, honest pricing, and disciplined
              project management at every stage of the project.
            </Typography>
          </Box>

          {/* Pillar 04 */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                color: "#999",
                mb: 1,
              }}
            >
              04
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.2rem",
                color: "#111",
                mb: 1.5,
              }}
            >
              Timely & Responsible Delivery
            </Typography>
            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#444",
                maxWidth: 420,
              }}
            >
              Execute projects efficiently with realistic timelines,
              accountability, and minimal disruption to clients.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Mission;
