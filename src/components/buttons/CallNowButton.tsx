import { Button } from "@mui/material";

export default function CallNowButton({ children, ...props }) {
  return (
    <Button
      variant="text"
      size="large"
      sx={{
        borderColor: "grey.400",
        borderRadius: 0,
        px: 0,
        minWidth: "auto",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
