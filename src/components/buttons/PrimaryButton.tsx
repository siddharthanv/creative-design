import { Button, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

interface PrimaryButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function PrimaryButton({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button
      size="large"
      sx={{
        borderRadius: "30px",
        px: 4,
        fontWeight: 600,

        // DESKTOP (default)
        bgcolor: "primary.main",
        color: "#fff",

        // MOBILE OVERRIDE
        "@media (max-width:600px)": {
          bgcolor: "transparent",
          border: "2px solid #fff",
          color: "#fff",
        },

        "&:hover": {
          bgcolor: {
            xs: "rgba(255,255,255,0.15)",
            md: "primary.dark",
          },
        },
      }}
      {...props}
      onClick={() => {
        document
          .getElementById("visit-form")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </Button>
  );
}
