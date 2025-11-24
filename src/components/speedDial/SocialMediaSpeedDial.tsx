import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import { SITE_CONFIG } from "@/constants/SiteConfig";

export default function SocialMediaSpeedDial() {
  const { WHATSAPP, INSTAGRAM, FACEBOOK, YOUTUBE, EMAIL_LINK } =
    SITE_CONFIG.SOCIAL;

  const actions = [
    {
      icon: <WhatsAppIcon style={{ color: "#25D366" }} />,
      name: "WhatsApp",
      url: WHATSAPP, // replace with your number
    },
    {
      icon: <InstagramIcon sx={{ color: "#E4405F" }} />,
      name: "Instagram",
      url: INSTAGRAM,
    },
    {
      icon: <FacebookIcon sx={{ color: "#1877F2" }} />,
      name: "Facebook",
      url: FACEBOOK,
    },
    // {
    //   icon: <YouTubeIcon sx={{ color: "#FF0000" }} />,
    //   name: "YouTube",
    //   url: YOUTUBE,
    // },
    {
      icon: <EmailIcon sx={{ color: "#D44638" }} />,
      name: "Email",
      url: EMAIL_LINK,
    },
  ];

  return (
    <SpeedDial
      ariaLabel="Social Media"
      sx={{ position: "fixed", bottom: 30, right: 30, zIndex: 9999 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => window.open(action.url, "_blank")}
        />
      ))}
    </SpeedDial>
  );
}
