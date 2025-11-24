import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import { menuItems } from "./menuItems";

export default function NavMenu() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      {menuItems.map((item) => (
        <Button
          key={item.path}
          component={NavLink}
          to={item.path}
          sx={{
            textTransform: "none",
            "&.active": { borderBottom: "2px solid black" },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}
