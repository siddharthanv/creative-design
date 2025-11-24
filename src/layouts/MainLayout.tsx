import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components";
import SocialMediaSpeedDial from "@/components/speedDial/SocialMediaSpeedDial";

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Box sx={{ flexGrow: 1, pt: { xs: 7, sm: 5 } }}>
        <Outlet />
      </Box>

      <Footer />
      <SocialMediaSpeedDial />
    </Box>
  );
}
