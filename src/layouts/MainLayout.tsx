import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SocialMediaSpeedDial from "@/components/speedDial/SocialMediaSpeedDial";
import VisitForm from "@/components/hero/VisitForm";

import { Header, Footer } from "../components";

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Box sx={{ flexGrow: 1, pt: { xs: 7, sm: 5 } }}>
        <Outlet />
      </Box>

      <VisitForm />
      <Footer />
      <SocialMediaSpeedDial />
    </Box>
  );
}
