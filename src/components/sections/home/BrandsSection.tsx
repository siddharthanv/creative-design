import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const categories = [
  {
    title: "CEMENT",
    brands: ["Ultratech", "Ramco", "ACC"],
  },
  {
    title: "STEEL",
    brands: ["TATA Tiscon", "JSW Steel", "SAIL"],
  },
  {
    title: "INTERIORS",
    brands: ["Asian Paints Royale", "Havells", "Schneider"],
  },
  {
    title: "PLUMBING & SANITARY",
    brands: ["Jaquar", "Hindware", "Parryware"],
  },
  {
    title: "FLOORING & WOOD",
    brands: ["Kajaria", "Somany", "Century Ply"],
  },
];

export default function BrandsSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)",
        py: 10,
        px: 2,
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "#D4AF37",
          fontWeight: "bold",
          mb: 6,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Brands We Use
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat.title}>
            <Card
              sx={{
                background: "#111",
                border: "1px solid #CBA135",
                borderRadius: 3,
                boxShadow: "0 0 20px 2px rgba(203,161,53,0.25)",
                transition: "0.3s ease",
                "&:hover": {
                  boxShadow: "0 0 30px 4px rgba(203,161,53,0.45)",
                  transform: "translateY(-6px)",
                },
              }}
            >
              <CardContent>
                {/* Category Title */}
                <Typography
                  variant="h6"
                  sx={{
                    color: "#F5D27A",
                    fontWeight: "bold",
                    mb: 2,
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}
                >
                  {cat.title}
                </Typography>

                {/* Brand List */}
                {cat.brands.map((brand) => (
                  <Typography
                    key={brand}
                    sx={{
                      color: "#ffffffcc",
                      fontSize: "15px",
                      textAlign: "center",
                      my: 0.5,
                    }}
                  >
                    {brand}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
