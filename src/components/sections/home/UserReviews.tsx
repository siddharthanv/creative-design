import {
  Box,
  Typography,
  Avatar,
  Rating,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/constants/SiteConfig";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function UserReviews() {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const visibleCards = isMobile ? 1 : 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + visibleCards) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [visibleCards]);

  const next = () => setIndex((prev) => (prev + visibleCards) % reviews.length);
  const prev = () =>
    setIndex((prev) => (prev - visibleCards + reviews.length) % reviews.length);

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "50px 16px", md: "70px 60px" },
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* HEADING */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 5,
          color: "#222",
        }}
      >
        What{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          {SITE_CONFIG.COMPANY_NAME}
        </Box>{" "}
        Clients Say
      </Typography>

      {/* ARROWS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          mb: 2,
        }}
      >
        <IconButton onClick={prev}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <IconButton onClick={next}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* CAROUSEL WRAPPER */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            {reviews
              .slice(index, index + visibleCards)
              .concat(
                index + visibleCards > reviews.length
                  ? reviews.slice(0, (index + visibleCards) % reviews.length)
                  : []
              )
              .map((review, i) => (
                <Box
                  key={i}
                  sx={{
                    flex: 1,
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "24px",
                    boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
                    minHeight: "260px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* RATING */}
                  <Rating value={review.rating} readOnly precision={0.5} />

                  {/* TEXT */}
                  <Typography
                    sx={{
                      margin: "20px 0",
                      color: "#555",
                      lineHeight: 1.7,
                      fontSize: "16px",
                    }}
                  >
                    "{review.text}"
                  </Typography>

                  {/* USER DETAILS */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={review.avatar} />
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {review.name}
                      </Typography>
                      <Typography sx={{ color: "#888", fontSize: "14px" }}>
                        {review.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}

// ---------------------------------------------------------------------------

const reviews = [
  {
    avatar: "/images/avatar1.jpg",
    name: "Karthik Raj",
    location: "Velachery, Chennai",
    rating: 5,
    text: "Creative Design transformed our home beautifully. Great communication & best quality work.",
  },
  {
    avatar: "/images/avatar2.jpg",
    name: "Priya Dharshini",
    location: "Tambaram, Chennai",
    rating: 4.5,
    text: "Delivered before deadline with excellent finishing. Highly recommended.",
  },
  {
    avatar: "/images/avatar3.jpg",
    name: "Arun Kumar",
    location: "OMR, Chennai",
    rating: 5,
    text: "Modern ideas, transparent workflow, and very professional team!",
  },
  {
    avatar: "/images/avatar4.jpg",
    name: "Meera N",
    location: "Madhavaram, Chennai",
    rating: 5,
    text: "Exceptional service. They handled our renovation with utmost care.",
  },
  {
    avatar: "/images/avatar5.jpg",
    name: "Suresh Kumar",
    location: "Chrompet, Chennai",
    rating: 4.5,
    text: "Attention to detail was amazing. The entire process was smooth.",
  },
];
