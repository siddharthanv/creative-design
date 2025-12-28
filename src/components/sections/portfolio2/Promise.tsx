import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const Promise = () => {
  const commitments = [
    {
      title: "Quality Without Compromise",
      description:
        "We promise consistent quality in materials, workmanship, and finishing across every project we undertake.",
    },
    {
      title: "Honest & Transparent Practices",
      description:
        "Clear communication, fair pricing, and realistic timelines form the foundation of our working relationship.",
    },
    {
      title: "Responsible Project Execution",
      description:
        "Each project is managed with structured planning, regular supervision, and attention to detail from start to finish.",
    },
    {
      title: "Client-Focused Delivery",
      description:
        "We listen, adapt, and respond to our clients’ needs to ensure outcomes that meet expectations and deliver lasting value.",
    },
  ];

  return (
    <Box
      id="promise"
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 9, md: 16 },
      }}
    >
      <Container maxWidth="md">
        {/* Centered Header */}
        <Box textAlign="center">
          {/* Accent */}
          <Box
            sx={{
              width: 60,
              height: 3,
              backgroundColor: "#111",
              mx: "auto",
              mb: 4,
            }}
          />

          {/* Label */}
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.85rem",
              color: "#777",
              mb: 2,
            }}
          >
            Our Promise
          </Typography>

          {/* Heading */}
          <Typography
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#111",
              mb: 4,
              fontSize: { xs: "2.1rem", md: "2.8rem" },
            }}
          >
            A Commitment You Can Rely On
          </Typography>

          {/* Intro */}
          <Typography
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "#333",
              mb: 10,
              maxWidth: 720,
              mx: "auto",
            }}
          >
            At Creative Design, our promise is to deliver interior and
            construction solutions with integrity, quality, and accountability.
            We commit to building spaces that reflect our clients’ vision while
            maintaining high standards in design, execution, and service.
          </Typography>
        </Box>

        {/* Commitments */}
        <Box>
          {commitments.map((item, index) => (
            <Box
              key={index}
              sx={{ mb: index !== commitments.length - 1 ? 6 : 0 }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.3rem",
                  color: "#111",
                  mb: 1.5,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "#444",
                  maxWidth: 700,
                }}
              >
                {item.description}
              </Typography>

              {index !== commitments.length - 1 && <Divider sx={{ mt: 5 }} />}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Promise;
