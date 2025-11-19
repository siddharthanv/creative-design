import { Box, Container } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Container sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
}
