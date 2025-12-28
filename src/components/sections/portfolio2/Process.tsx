import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Consultation & Requirement Analysis",
      description:
        "We begin by understanding the client’s vision, space requirements, budget expectations, and timeline. This stage helps us align design intent with practical execution from the start.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Based on the consultation, we develop detailed design concepts, layouts, and material selections. Technical planning and cost estimation are carried out to ensure feasibility and transparency.",
    },
    {
      step: "03",
      title: "Execution & Project Management",
      description:
        "Our experienced team manages on-site execution with strict quality checks, coordinated scheduling, and regular progress updates to ensure smooth and disciplined project delivery.",
    },
    {
      step: "04",
      title: "Final Review & Handover",
      description:
        "Once the work is completed, we conduct a detailed inspection to ensure all specifications are met before handing over a finished space ready for use.",
    },
  ];

  return (
    <Box
      id="process"
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
            Our Process
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
            A Clear, Disciplined Approach to Every Project
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
            At Creative Design, our process is structured, transparent, and
            client-focused. Every project is managed through a well-defined
            workflow that ensures design clarity, cost control, and timely
            execution. From the initial discussion to final handover, we
            maintain close coordination and clear communication at every stage.
          </Typography>
        </Box>

        {/* Timeline */}
        <Box
          sx={{
            position: "relative",
            pl: { xs: 3, md: 6 },
            borderLeft: "1px solid #ddd",
            maxWidth: "900px",
          }}
        >
          {steps.map((item, index) => (
            <Box key={index} sx={{ mb: index === steps.length - 1 ? 0 : 8 }}>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.15em",
                  color: "#999",
                  mb: 1,
                }}
              >
                Step {item.step}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.35rem",
                  color: "#111",
                  mb: 2,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "#444",
                  maxWidth: 750,
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

export default Process;
