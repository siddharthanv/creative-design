import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { getMenuItemTarget, menuItems } from "./menuItems";

export default function NavMenu() {
  const location = useLocation();
  const activeSection = new URLSearchParams(location.search).get("section");

  const isItemActive = (path: string, section?: string) => {
    if (section) {
      return location.pathname === path && activeSection === section;
    }

    if (path === "/") {
      return location.pathname === "/" && !activeSection;
    }

    return location.pathname === path;
  };

  return (
    <Box
      component="nav"
      aria-label="Primary navigation"
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        gap: { md: 0.15, lg: 0.65 },
        flex: 1,
        minWidth: 0,
      }}
    >
      {menuItems.map((item) => {
        const active = isItemActive(item.path, item.section);

        return (
          <Button
            key={`${item.label}-${item.section ?? item.path}`}
            component={Link}
            to={getMenuItemTarget(item)}
            sx={{
              position: "relative",
              minWidth: 0,
              px: { md: 1, lg: 1.35 },
              py: 1.15,
              color: active ? "secondary.light" : "rgba(255,255,255,0.88)",
              fontSize: { md: 13, lg: 14 },
              fontWeight: active ? 700 : 600,
              lineHeight: 1,
              whiteSpace: "nowrap",
              borderRadius: 0,
              textTransform: "none",
              transition: "color .2s ease",
              "&:hover": {
                color: "secondary.light",
                backgroundColor: "transparent",
              },
              "&::after": {
                content: '\"\"',
                position: "absolute",
                left: 10,
                right: 10,
                bottom: 2,
                height: 2,
                borderRadius: 10,
                transform: active ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "center",
                backgroundColor: "secondary.light",
                transition: "transform .2s ease",
              },
              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Box>
  );
}
