export interface MenuItem {
  label: string;
  path: string;
  section?: string;
}

export const menuItems: MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/", section: "services" },
  { label: "Projects", path: "/projects" },
  { label: "Our Factory", path: "/", section: "factory" },
  { label: "Contact Details", path: "/contact" },
];

export const getMenuItemTarget = (item: MenuItem) =>
  item.section ? `/?section=${item.section}` : item.path;
