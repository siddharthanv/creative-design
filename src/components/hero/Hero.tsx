import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import CarpenterRoundedIcon from "@mui/icons-material/CarpenterRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import FactoryRoundedIcon from "@mui/icons-material/FactoryRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import heroImage from "../../assets/images/creative-design-custom-hero.webp";

const SERVICES = [
  {
    label: "Residential Interiors",
    icon: <HomeWorkRoundedIcon />,
  },
  {
    label: "Commercial Interiors",
    icon: <BusinessRoundedIcon />,
  },
  {
    label: "Construction Services",
    icon: <ConstructionRoundedIcon />,
  },
  {
    label: "Own Woodwork Factory",
    icon: <CarpenterRoundedIcon />,
  },
];

const HIGHLIGHTS = [
  ["Design → Execution", "One accountable team"],
  ["Own Factory", "Quality under our control"],
  ["Transparent Pricing", "Clear scope before work"],
  ["Chennai", "Residential & commercial"],
];

export default function Hero() {
  const location = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section");
    if (!section) return;

    const timeout = window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: section === "factory" ? "center" : "start",
      });
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [location.search]);

  const scrollToVisitForm = () => {
    document
      .getElementById("visit-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box component="section" sx={{ bgcolor: "#0A0907", overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 700, sm: 720, md: 620 },
          height: { xs: "auto", md: "calc(100svh - 78px)" },
          maxHeight: { md: 760 },
          display: "flex",
          alignItems: "stretch",
          isolation: "isolate",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "48% center",
            sm: "54% center",
            md: "center center",
          },
          "&::before": {
            content: '\"\"',
            position: "absolute",
            inset: 0,
            zIndex: -2,
            background: {
              xs: "linear-gradient(90deg, rgba(6,5,4,.96) 0%, rgba(6,5,4,.83) 52%, rgba(6,5,4,.45) 100%)",
              md: "linear-gradient(90deg, rgba(7,6,5,.98) 0%, rgba(7,6,5,.95) 29%, rgba(7,6,5,.71) 49%, rgba(7,6,5,.20) 76%, rgba(7,6,5,.08) 100%)",
            },
          },
          "&::after": {
            content: '\"\"',
            position: "absolute",
            inset: 0,
            zIndex: -1,
            background: {
              xs: "linear-gradient(180deg, rgba(7,6,5,.08) 0%, rgba(7,6,5,.28) 44%, rgba(7,6,5,.96) 100%)",
              md: "linear-gradient(180deg, rgba(7,6,5,.03) 0%, rgba(7,6,5,.05) 58%, rgba(7,6,5,.70) 100%)",
            },
          },
          "@media (min-width: 900px) and (max-height: 760px)": {
            minHeight: 610,
            maxHeight: 690,
          },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            maxWidth: 1600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            px: { xs: 2.25, sm: 4, md: 5, lg: 7 },
            py: { xs: 4.5, sm: 5.5, md: "clamp(28px, 5vh, 52px)" },
            pb: { md: "clamp(102px, 15vh, 132px)" },
            "@media (min-width: 900px) and (max-height: 760px)": {
              py: 3.25,
              pb: 11.25,
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "88%", md: "58%", lg: "52%" },
              maxWidth: 760,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{ mb: { xs: 2, md: 1.8 } }}
            >
              <Box
                sx={{
                  width: { xs: 36, sm: 52 },
                  height: 2,
                  bgcolor: "secondary.light",
                  borderRadius: 999,
                }}
              />
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  fontWeight: 700,
                  letterSpacing: { xs: 2.2, sm: 3.2 },
                  textTransform: "uppercase",
                  fontSize: { xs: 11, sm: 12 },
                }}
              >
                Spaces that inspire
              </Typography>
            </Stack>

            <Typography
              component="h1"
              sx={{
                color: "#FFFFFF",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 400,
                fontSize: {
                  xs: "clamp(2.65rem, 12vw, 4rem)",
                  sm: "clamp(3.35rem, 8vw, 4.8rem)",
                  md: "clamp(3.55rem, 5.2vw, 5.35rem)",
                },
                lineHeight: { xs: 0.98, md: 0.96 },
                letterSpacing: "-0.035em",
                mb: { xs: 2.35, md: 2.2 },
                "@media (min-width: 900px) and (max-height: 760px)": {
                  fontSize: "clamp(3rem, 4.6vw, 4.35rem)",
                  mb: 1.7,
                },
              }}
            >
              Design. Build.
              <Box
                component="span"
                sx={{
                  display: "block",
                  mt: { xs: 0.55, md: 0.75 },
                  color: "secondary.light",
                }}
              >
                Live Better.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.80)",
                fontSize: { xs: 15, sm: 16.5, md: 17.5 },
                lineHeight: 1.65,
                maxWidth: 620,
                mb: { xs: 3, md: 3 },
                "@media (min-width: 900px) and (max-height: 760px)": {
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  mb: 2.2,
                },
              }}
            >
              Complete interior and construction solutions for homes, offices
              and commercial spaces — from design to execution, all under one
              roof.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.35}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                size="large"
                onClick={scrollToVisitForm}
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  minHeight: { xs: 50, md: 50 },
                  px: { xs: 3, md: 3.4 },
                  borderRadius: 1.5,
                  bgcolor: "secondary.light",
                  color: "#100D08",
                  fontSize: { xs: 14.5, md: 15.5 },
                  fontWeight: 800,
                  justifyContent: "center",
                  textTransform: "none",
                  boxShadow: "0 14px 35px rgba(183,131,41,0.25)",
                  transition: "all .25s ease",
                  "&:hover": {
                    bgcolor: "#F1C15B",
                    transform: "translateY(-2px)",
                    boxShadow: "0 18px 40px rgba(183,131,41,0.32)",
                  },
                }}
              >
                Book a Site Visit
              </Button>

              <Button
                size="large"
                component={Link}
                to="/projects"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  minHeight: { xs: 50, md: 50 },
                  px: { xs: 3, md: 3.4 },
                  borderRadius: 1.5,
                  border: "1px solid rgba(227,180,78,0.68)",
                  color: "#FFFFFF",
                  bgcolor: "rgba(10,9,7,0.30)",
                  backdropFilter: "blur(8px)",
                  fontSize: { xs: 14.5, md: 15.5 },
                  fontWeight: 700,
                  justifyContent: "center",
                  textTransform: "none",
                  transition: "all .25s ease",
                  "&:hover": {
                    bgcolor: "rgba(227,180,78,0.12)",
                    borderColor: "secondary.light",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                View Our Projects
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                sm: "repeat(4, minmax(0, 1fr))",
              },
              width: { xs: "100%", md: "60%", lg: "56%" },
              maxWidth: 760,
              mt: { xs: 4.5, md: 2.5 },
              borderTop: "1px solid rgba(255,255,255,0.14)",
              borderBottom: "1px solid rgba(255,255,255,0.10)",
              bgcolor: "rgba(8,8,8,0.38)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              "@media (min-width: 900px) and (max-height: 760px)": {
                mt: 1.7,
              },
            }}
          >
            {SERVICES.map((service, index) => (
              <Box
                key={service.label}
                sx={{
                  px: { xs: 1.2, sm: 1.45, md: 1.8 },
                  py: { xs: 1.7, md: 1.55 },
                  minHeight: { xs: 90, md: 92 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 0.75,
                  borderRight: {
                    xs:
                      index % 2 === 0
                        ? "1px solid rgba(255,255,255,0.14)"
                        : "none",
                    sm:
                      index < SERVICES.length - 1
                        ? "1px solid rgba(255,255,255,0.14)"
                        : "none",
                  },
                  borderBottom: {
                    xs: index < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    sm: "none",
                  },
                  "@media (min-width: 900px) and (max-height: 760px)": {
                    minHeight: 78,
                    py: 1.1,
                  },
                }}
              >
                <Box
                  sx={{
                    color: "secondary.light",
                    display: "flex",
                    "& svg": { fontSize: { xs: 24, md: 25 } },
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: { xs: 12.5, md: 13.1 },
                    lineHeight: 1.3,
                  }}
                >
                  {service.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            id="factory"
            sx={{
              position: { xs: "relative", md: "absolute" },
              right: { md: 26, lg: 44 },
              bottom: { md: 0 },
              width: { xs: "100%", md: 410, lg: 500 },
              minHeight: { xs: 88, md: 88 },
              mt: { xs: 2, md: 0 },
              px: { xs: 2, md: 2.5 },
              py: { xs: 1.7, md: 1.8 },
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.4, md: 1.8 },
              bgcolor: "secondary.light",
              color: "#100D08",
              borderRadius: { xs: 1.5, md: "12px 0 0 0" },
              boxShadow: "0 -10px 35px rgba(0,0,0,0.18)",
              "@media (min-width: 900px) and (max-height: 760px)": {
                minHeight: 78,
                py: 1.35,
              },
            }}
          >
            <FactoryRoundedIcon
              sx={{ fontSize: { xs: 31, md: 36 }, flexShrink: 0 }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 15.5, md: 17 },
                  mb: 0.25,
                  lineHeight: 1.2,
                }}
              >
                Our Own Woodwork Factory
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 11.8, md: 12.8 },
                  lineHeight: 1.4,
                  opacity: 0.8,
                }}
              >
                Better quality control · Faster execution · Cost-efficient
                production
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: "#FBF8F2",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1600,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            px: { xs: 2.25, sm: 4, md: 5, lg: 7 },
          }}
        >
          {HIGHLIGHTS.map(([title, subtitle], index) => (
            <Box
              key={title}
              sx={{
                py: { xs: 2.35, md: 2.7 },
                px: { xs: 1.1, sm: 2, md: 3 },
                borderRight: {
                  xs: index % 2 === 0 ? "1px solid #E6DDCE" : "none",
                  md:
                    index < HIGHLIGHTS.length - 1
                      ? "1px solid #E6DDCE"
                      : "none",
                },
                borderBottom: {
                  xs: index < 2 ? "1px solid #E6DDCE" : "none",
                  md: "none",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#342819",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: { xs: 17, sm: 19, md: 21 },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  mt: 0.45,
                  color: "#7B6D5A",
                  fontSize: { xs: 11.5, md: 12.5 },
                  lineHeight: 1.4,
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
}
