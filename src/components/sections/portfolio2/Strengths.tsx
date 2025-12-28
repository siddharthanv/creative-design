import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Strengths = () => {
  const strengths = [
    {
      title: "Proven Industry Experience",
      description:
        "Backed by years of hands-on experience in interior design and construction, we bring practical knowledge and informed decision-making to every project.",
    },
    {
      title: "End-to-End Expertise",
      description:
        "From design and planning to execution and final handover, we manage the entire project lifecycle with a single point of accountability.",
    },
    {
      title: "Quality Workmanship",
      description:
        "We use reliable materials, skilled craftsmanship, and systematic quality checks to deliver durable and refined outcomes.",
    },
    {
      title: "Transparent Processes",
      description:
        "Clear communication, realistic timelines, and honest pricing ensure trust and clarity throughout the project journey.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We listen carefully to our clients’ needs and translate their vision into functional, well-designed spaces.",
    },
    {
      title: "Timely & Disciplined Execution",
      description:
        "Structured planning and active site management help us deliver projects on schedule without compromising quality.",
    },
  ];

  return (
    <Box
      id="strengths"
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
            Our Strengths
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
            What Sets Us Apart
          </Typography>

          {/* Intro */}
          <Typography
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "#333",
              mb: 10,
              maxWidth: 850,
            }}
          >
            At Creative Design, our strength lies in combining design clarity
            with execution excellence. We approach every project with
            responsibility, experience, and attention to detail, ensuring
            consistent quality and long-term value for our clients.
          </Typography>
        </Box>

        {/* Strengths Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: 8,
            rowGap: 6,
            maxWidth: "1000px",
          }}
        >
          {strengths.map((item, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "#111",
                  mb: 1.5,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  color: "#444",
                  maxWidth: 420,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Strengths;
