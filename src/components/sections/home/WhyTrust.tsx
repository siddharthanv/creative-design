import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SITE_CONFIG } from "@/constants/SiteConfig";

export default function WhyTrust() {
  return (
    <Box
      sx={{
        padding: { xs: "60px 20px", md: "40px 80px" },
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 6,
          color: "#222",
        }}
      >
        Why People Trust{" "}
        <Typography
          variant="h4"
          component="span"
          color="secondary"
          sx={{ fontWeight: "bold" }}
        >
          {SITE_CONFIG.COMPANY_NAME}
        </Typography>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* LEFT SIDE — FOUR LINES OF TRUST */}
        <Box sx={{ flex: 1 }}>
          {/* <Typography
            sx={{
              fontSize: "18px",
              lineHeight: 1.8,
              marginBottom: 2,
            }}
          >
            ✓ Transparent pricing with no hidden surprises.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: 1.8,
              marginBottom: 2,
            }}
          >
            ✓ Guaranteed quality materials and long-lasting workmanship.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: 1.8,
              marginBottom: 2,
            }}
          >
            ✓ On-time delivery for every project, big or small.
          </Typography>
          <Typography sx={{ fontSize: "18px", lineHeight: 1.8 }}>
            ✓ Trusted by families and businesses across Chennai.
          </Typography> */}
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            {SITE_CONFIG.COMPANY_NAME} is a Chennai-based construction and
            interior company delivering modern, functional, and long-lasting
            spaces. We handle both residential and commercial projects with
            complete end-to-end execution. With a focus on quality craftsmanship
            and on-time delivery, we blend creativity with practical design to
            create spaces that truly feel personal and meaningful.
          </Typography>
        </Box>

        {/* RIGHT SIDE — CUSTOM MODERN ACCORDION */}
        <Box sx={{ flex: 1 }}>
          {accordionItems.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                marginBottom: 2,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "primary.main",
                padding: "0px 14px",

                // Custom modern style
                "&::before": {
                  display: "none",
                },

                "& .MuiAccordionSummary-root": {
                  borderRadius: 3,
                  padding: "12px 0",
                },

                "& .MuiAccordionDetails-root": {
                  padding: "0 0 14px 0",
                },

                "&:hover": {
                  borderColor: "secondary.main",
                  backgroundColor: "#f5f5f5",
                  transition: "0.3s",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#333" }} />}
              >
                <Typography
                  sx={{ fontWeight: 600, color: "#222", fontSize: "17px" }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const accordionItems = [
  {
    title: "Quality-first construction",
    content:
      "We use premium materials, certified technicians, and strict quality checks at every stage to ensure long-lasting results.",
  },
  {
    title: "Transparent process & updates",
    content:
      "From day one, you get complete clarity — timelines, materials, cost, and progress updates without any hidden terms.",
  },
  {
    title: "Expert team of professionals",
    content:
      "Our architects, designers, and engineers bring years of experience, delivering flawless work with attention to detail.",
  },
  {
    title: "High client satisfaction",
    content:
      "Most of our customers come through referrals because we treat every project like our own home — with care and commitment.",
  },
];
