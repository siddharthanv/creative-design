import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Chip,
} from "@mui/material";
import {
  commercial_renovation_and_interior_in_siruseri,
  construction_work_in_ramapuram,
  Commercial_Interior_work_in_chrompet,
  construction_work_in_manapakkam,
  Construction_work_in_siruseri,
  completed_home_interior_work_at_kundrathur_metro_grand_city,
  creative_design_manapakkam_site_interior_hall_tv_unit,
  creative_design_kodambakkam_site_renovation_and_interior_modular_kitchen,
} from "../../../assets/images";

/**
 * Premium MUI Project Gallery Grid
 * - Max width centered (no full width stretch)
 * - 3 columns desktop, 2 tablet, 1 mobile
 * - Clean elevation & smooth hover effect
 * - Perfect for construction portfolio page
 */

type Project = {
  id: string | number;
  title: string;
  location: string;
  status: "Completed" | "Ongoing";
  areaSqft: number;
  imageUrl: string;
};

type Props = {
  projects?: Project[];
};

export default function ProjectGalleryGrid({
  projects = sampleProjects,
}: Props) {
  return (
    <Box sx={{ px: 2, py: 4, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: "1200px", width: "100%" }}>
        <Grid container spacing={4}>
          {projects.map((p) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={p.id}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  height="400"
                  image={p.imageUrl}
                  alt={p.title}
                  sx={{
                    transition: "0.5s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />

                {/* Body */}
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      mb: 0.5,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {p.location}
                  </Typography>

                  {/* Status + Area */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Chip
                      label={p.status}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        bgcolor:
                          p.status === "Completed" ? "#E8F5E9" : "#FFF8E1",
                        color: p.status === "Completed" ? "#2E7D32" : "#FF8F00",
                      }}
                    />

                    <Typography variant="body2" fontWeight={600}>
                      {p.areaSqft} sqft
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// Sample demo data
const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Construction Work in Siruseri",
    location: "Siruseri, Chennai, TN",
    status: "Completed",
    areaSqft: 2400,
    imageUrl: Construction_work_in_siruseri,
  },
  {
    id: 2,
    title: "Commercial Interior Work",
    location: "Chrompet, Chennai, TN",
    status: "Ongoing",
    areaSqft: 1800,
    imageUrl: Commercial_Interior_work_in_chrompet,
  },
  {
    id: 3,
    title: "Construction Work in Manapakkam",
    location: "Manapakkam, Chennai, TN",
    status: "Completed",
    areaSqft: 5600,
    imageUrl: construction_work_in_manapakkam,
  },
  {
    id: 4,
    title: "Commercial Interior Renovation in Siruseri",
    location: "Siruseri, Chennai, TN",
    status: "Ongoing",
    areaSqft: 3200,
    imageUrl: commercial_renovation_and_interior_in_siruseri,
  },
  {
    id: 5,
    title: "Construction Work in Ramapuram",
    location: "Ramapuram, Chennai, TN",
    status: "Completed",
    areaSqft: 900,
    imageUrl: construction_work_in_ramapuram,
  },
  {
    id: 6,
    title: "Interior Work in Kundrathur",
    location: "Kundrathur, Chennai, TN",
    status: "Completed",
    areaSqft: 1500,
    imageUrl: completed_home_interior_work_at_kundrathur_metro_grand_city,
  },
  {
    id: 7,
    title: "Interior Design at Casagrand Flat",
    location: "Manapakkam, Chennai, TN",
    status: "Completed",
    areaSqft: 1850,
    imageUrl: creative_design_manapakkam_site_interior_hall_tv_unit,
  },
  {
    id: 8,
    title: "Modular Kitchen - Interior Design",
    location: "Kodambakkam, Chennai, TN",
    status: "Completed",
    areaSqft: 300,
    imageUrl:
      creative_design_kodambakkam_site_renovation_and_interior_modular_kitchen,
  },
];
