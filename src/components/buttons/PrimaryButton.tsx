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
        py: 1.25,
        fontWeight: 700,
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
        border: "1px solid",
        borderColor: "secondary.main",
        boxShadow: "0 10px 24px rgba(183,131,41,0.22)",
        "&:hover": {
          bgcolor: "secondary.dark",
          borderColor: "secondary.dark",
          color: "#fff",
          boxShadow: "0 12px 28px rgba(183,131,41,0.30)",
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
