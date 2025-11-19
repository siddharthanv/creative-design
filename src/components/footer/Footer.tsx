import { Box, Typography } from "@mui/material";
import { getCurrentYear } from "../../utils/date";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        bgcolor: "grey.200",
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © {getCurrentYear()} Creative Design. All rights reserved.
      </Typography>
    </Box>
  );
}
