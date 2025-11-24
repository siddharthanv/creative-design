import React, { useState, useMemo } from "react";
import { Box, Button, Stack, useTheme, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import BrushIcon from "@mui/icons-material/Brush";
import ConstructionIcon from "@mui/icons-material/Construction";
import VillaIcon from "@mui/icons-material/Villa";
import ApartmentIcon from "@mui/icons-material/Apartment";

export type CategoryKey =
  | "all"
  | "residential"
  | "commercial"
  | "interior"
  | "renovation"
  | "villas"
  | "apartments";

export interface CategoryItem {
  key: CategoryKey;
  label: string;
  icon?: React.ReactNode;
}

const defaultCategories: CategoryItem[] = [
  { key: "all", label: "All Projects", icon: <HomeIcon fontSize="small" /> },
  {
    key: "residential",
    label: "Residential",
    icon: <HomeIcon fontSize="small" />,
  },
  {
    key: "commercial",
    label: "Commercial",
    icon: <BusinessIcon fontSize="small" />,
  },
  {
    key: "interior",
    label: "Interior Design",
    icon: <BrushIcon fontSize="small" />,
  },
  {
    key: "renovation",
    label: "Renovation",
    icon: <ConstructionIcon fontSize="small" />,
  },
  { key: "villas", label: "Villas", icon: <VillaIcon fontSize="small" /> },
  {
    key: "apartments",
    label: "Apartments",
    icon: <ApartmentIcon fontSize="small" />,
  },
];

interface Props {
  categories?: CategoryItem[];
  initial?: CategoryKey;
  onChange?: (category: CategoryKey) => void;
}

export default function PortfolioFilterTabs({
  categories = defaultCategories,
  initial = "all",
  onChange,
}: Props) {
  const theme = useTheme();
  const [active, setActive] = useState<CategoryKey>(initial);

  const handleClick = (key: CategoryKey) => {
    setActive(key);
    onChange?.(key);
  };

  const bgGradient = useMemo(() => {
    return theme.palette.mode === "dark"
      ? "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))"
      : "linear-gradient(135deg, rgba(0,0,0,0.03), rgba(0,0,0,0.02))";
  }, [theme.palette.mode]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 1,
        mb: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: 3,
          p: 1,
          background: bgGradient,
          boxShadow: theme.shadows[1],
          backdropFilter: "blur(6px)",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          "::-webkit-scrollbar": { height: 6 },
          "::-webkit-scrollbar-thumb": {
            background: "rgba(0,0,0,0.2)",
            borderRadius: 4,
          },
        }}
      >
        <Stack
          direction="row"
          spacing={1.2}
          sx={{ px: 1, justifyContent: { sx: "start", md: "center" } }}
        >
          {categories.map((c) => {
            const selected = c.key === active;

            return (
              <Button
                key={c.key}
                onClick={() => handleClick(c.key)}
                disableRipple
                sx={{
                  minWidth: "140px",
                  height: 48,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  px: 2.5,
                  textTransform: "none",
                  borderRadius: "999px",
                  boxShadow: selected
                    ? `0 6px 18px ${theme.palette.primary.main}22`
                    : `0 4px 10px rgba(16,24,40,0.04)`,
                  border: selected
                    ? `1px solid ${theme.palette.primary.main}`
                    : "1px solid transparent",
                  background: selected
                    ? `linear-gradient(180deg, ${theme.palette.primary.light}22, ${theme.palette.primary.main}11)`
                    : "white",
                  color: selected
                    ? theme.palette.primary.dark
                    : theme.palette.text.primary,
                  fontWeight: selected ? 700 : 500,
                  "&:hover": {
                    transform: "translateY(-3px)",
                    background: selected ? undefined : "rgba(0,0,0,0.04)",
                  },
                }}
              >
                <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                  {c.icon}
                </Box>
                <Typography variant="body2">{c.label}</Typography>
              </Button>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
