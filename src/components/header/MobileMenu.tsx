import { Drawer, List, ListItemButton, ListItemText, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
        <List>
          {menuItems.map((item) => (
            <ListItemButton component={Link} to={item.path} key={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
