import { Box, Typography } from "@mui/material";

export default function ProjectStats() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Professional Workers" },
    { number: "60k+", label: "Sq. Ft. Work Delivered" },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr 1fr", // 2 items per row on mobile
          sm: "repeat(3, 1fr)", // 3 in a row on bigger screens
        },
        gap: 4,
        mt: 2,
      }}
    >
      {stats.map((item) => (
        <Box key={item.label}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: { xs: "#fff", md: "inherit" } }}
          >
            {item.number}
          </Typography>
          <Typography variant="body1">{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
