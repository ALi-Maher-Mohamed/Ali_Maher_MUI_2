import React from "react";
import { Box, Container, Typography, Button, Chip } from "@mui/material";
import { Restaurant, LocalDining, Star } from "@mui/icons-material";

const features = [
  {
    icon: <LocalDining />,
    title: "Fresh Ingredients",
    desc: "Daily sourced produce",
  },
  { icon: <Restaurant />, title: "Expert Chefs", desc: "Award-winning team" },
  { icon: <Star />, title: "5-Star Service", desc: "Exceptional experience" },
];

const Hero = () => (
  <Box
    sx={{
      position: "relative",
      height: "90vh",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.4)",
      },
    }}
  >
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <Chip
        label="We're Now Open for Dinner"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.15)",
          color: "white",
          mb: 3,
          py: 3,
          px: 2,
        }}
      />
      <Typography
        variant="h1"
        sx={{ fontWeight: 800, fontSize: { xs: "3rem", md: "5rem" }, mb: 2 }}
      >
        Culinary Excellence
      </Typography>
      <Typography
        variant="h5"
        sx={{ mb: 5, opacity: 0.95, maxWidth: "600px", fontWeight: 300 }}
      >
        Where every dish tells a story of passion, tradition, and innovation
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ bgcolor: "#d84315", px: 5, py: 2, borderRadius: 3 }}
        >
          Explore Menu
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "white",
            borderColor: "white",
            px: 5,
            py: 2,
            borderRadius: 3,
            borderWidth: 2,
          }}
        >
          Book a Table
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        {features.map((feature, idx) => (
          <Box
            key={idx}
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <Box
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.15)",
                p: 1.5,
                borderRadius: 2,
                display: "flex",
              }}
            >
              {feature.icon}
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                {feature.title}
              </Typography>
              <Typography sx={{ fontSize: "12px", opacity: 0.8 }}>
                {feature.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Hero;
