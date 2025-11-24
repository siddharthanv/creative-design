import { Box, Typography } from "@mui/material";

import ProjectStats from "./ProjectStats";
import PrimaryButton from "../buttons/PrimaryButton";
// import CallNowButton from "../buttons/CallNowButton";
import heroImage from "../../assets/images/Interior_Site_Image.webp";

export default function Hero() {
  return (
    <Box
      sx={{
        height: { xs: "auto", md: "90vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        overflow: "hidden",
        maxWidth: "xl",
        maxHeight: 650,
        padding: { xs: "auto", md: "40px" },
      }}
    >
      {/* Mobile Background Image + DARK OVERLAY */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.55), 
            rgba(0, 0, 0, 0.55)
          ), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* LEFT SECTION */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          px: { xs: 3, md: 6 },
          py: { xs: 5, md: 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
          color: { xs: "#fff", md: "inherit" }, // WHITE TEXT IN MOBILE
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          lineHeight={1.2}
          sx={{
            color: { xs: "#fff", md: "inherit" }, // white in mobile
          }}
        >
          Your Dream Place,
          <br />
          Crafted With Precision.
        </Typography>

        <Typography
          variant="h6"
          fontWeight={300}
          sx={{
            color: { xs: "#fff", md: "inherit" },
          }}
        >
          We build modern, elegant and long-lasting spaces with transparent
          pricing and zero hidden costs.
        </Typography>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            // Apply white color ONLY on mobile WITHOUT overriding desktop styles
            "& button": {
              ...(window.innerWidth < 600 && {
                color: "#fff !important",
                borderColor: "#fff !important",
              }),
            },
          }}
        >
          <PrimaryButton>Get Free Site Visit</PrimaryButton>
          {/* <CallNowButton>Call Now</CallNowButton> */}
        </Box>

        <ProjectStats />
      </Box>

      {/* RIGHT IMAGE (DESKTOP ONLY) */}
      <Box
        sx={{
          width: { xs: "0%", md: "35%" },
          display: { xs: "none", md: "block" },
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 10,
          overflow: "hidden",
        }}
      />
    </Box>
  );
}
