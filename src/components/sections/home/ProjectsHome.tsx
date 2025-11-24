import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  commercial_renovation_and_interior_in_siruseri,
  construction_work_in_ramapuram,
  Commercial_Interior_work_in_chrompet,
  construction_work_in_manapakkam,
  Construction_work_in_siruseri,
} from "../../../assets/images";

export default function Projects() {
  // const allItems = Array.from({ length: 6 }).map((_, i) => ({
  //   img: `https://loremflickr.com/800/600/construction?random=${i + 1}`,
  //   title: `Project ${i + 1}`,
  // }));

  const allItems = [
    {
      img: Construction_work_in_siruseri,
      title: "Construction Work in Siruseri",
    },
    {
      img: Commercial_Interior_work_in_chrompet,
      title: "Commercial Interior Work in Chrompet",
    },
    {
      img: construction_work_in_manapakkam,
      title: "Construction Work in Manapakkam",
    },
    {
      img: commercial_renovation_and_interior_in_siruseri,
      title: "Commercial Interior Renovation in Siruseri",
    },
    {
      img: construction_work_in_ramapuram,
      title: "Construction Work in Ramapuram",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // On mobile → only first 4 images
  const items = isMobile ? allItems.slice(0, 4) : allItems;

  return (
    <Box
      sx={{
        padding: { xs: "60px 20px", md: "60px 80px" },
      }}
    >
      {/* TITLE */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 6,
        }}
      >
        Proven Results in Construction, Interior and Renovation
      </Typography>

      {/* IMAGE LIST */}
      <ImageList
        cols={isMobile ? 1 : 3}
        gap={20}
        sx={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {items.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <ImageListItemBar
              title={item.title}
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* SHOW MORE BUTTON */}
      <Box sx={{ textAlign: "end", marginTop: 5 }}>
        <Button
          variant="outlined"
          color="secondary"
          href="#/projects"
          sx={{
            borderRadius: "30px",
            textTransform: "none",
          }}
        >
          Show More Projects
        </Button>
      </Box>
    </Box>
  );
}
