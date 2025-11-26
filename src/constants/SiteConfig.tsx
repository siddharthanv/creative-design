import HomeWorkIcon from "@mui/icons-material/HomeWork";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import RoofingIcon from "@mui/icons-material/Roofing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import BoltIcon from "@mui/icons-material/Bolt";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import ArchitectureIcon from "@mui/icons-material/Architecture";

import type { SiteConfig } from "../types/SiteConfig.types";

export const SITE_CONFIG: SiteConfig = {
  COMPANY_NAME: "Creative Design",
  GST_REG_NUM: "33CPNPA6564H1ZT",

  CONTACT: {
    PHONE: "+91 90427 65456",
    PHONE_INT: "919042765456",
    PHONE_DIAL: "tel:+919042765456",
    EMAIL: "creativedesign.civil@gmail.com",
    LOCATION: "Kundrathur, Chennai, Tamil Nadu",
    ADDRESS_FULL:
      "Plot No. 116, Aarthy's Villa, 4th Main Road, 5th Avenue, Metro Grand City, Kundrathur, Chennai - 600069, Tamil Nadu, India",
    BUSINESS_HOURS: "Mon – Sun: 8:00 AM – 10:00 PM",
  },

  SOCIAL: {
    INSTAGRAM: "https://www.instagram.com/creativedesign.civil/",
    FACEBOOK: "https://www.facebook.com/creativedesign.civil",
    YOUTUBE: "https://youtube.com/@yourchannel",
    WHATSAPP: "https://wa.me/919042765456",
    EMAIL_LINK: "mailto:creativedesign@gmail.com",
  },

  BRANDING: {
    TAGLINE: "We Build Modern & Meaningful Spaces",
    SHORT_ABOUT:
      "Creative Design is a Chennai-based construction and interior company delivering premium quality and on-time residential & commercial projects.",
  },

  SERVICES: [
    { title: "Interior Design", icon: <FormatPaintIcon fontSize="large" /> },
    {
      title: "Commercial Construction",
      icon: <EngineeringIcon fontSize="large" />,
    },
    {
      title: "Residential Construction",
      icon: <HomeWorkIcon fontSize="large" />,
    },
    { title: "Carpentry & Woodwork", icon: <CarpenterIcon fontSize="large" /> },
    { title: "Plumbing Works", icon: <PlumbingIcon fontSize="large" /> },
    { title: "Electrical Works", icon: <BoltIcon fontSize="large" /> },
    {
      title: "Foundation & Structure",
      icon: <PrecisionManufacturingIcon fontSize="large" />,
    },
    { title: "False Ceiling", icon: <WallpaperIcon fontSize="large" /> },
    { title: "Roofing Solutions", icon: <RoofingIcon fontSize="large" /> },
    {
      title: "Architecture Design",
      icon: <ArchitectureIcon fontSize="large" />,
    },
  ],
};
