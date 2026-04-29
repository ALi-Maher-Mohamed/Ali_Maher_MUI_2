import React from "react";
import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ bgcolor: "#1a1a1a", color: "white", py: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=600"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Chip
              label="Our Story"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                fontWeight: 600,
                mb: 3,
                px: 2,
                py: 3,
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
              Crafting Memorable Dining Experiences
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#b0b0b0", lineHeight: 1.8, mb: 4 }}
            >
              For over two decades, Ali Maher Restaurant has been a sanctuary
              for food lovers. We blend traditional recipes with modern
              techniques to bring you a menu that honors the past while
              embracing the future. Every ingredient is hand-picked from local
              farms to ensure the highest quality.
            </Typography>

            <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, color: "#d84315" }}
                >
                  20+
                </Typography>
                <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
                  Years Experience
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, color: "#d84315" }}
                >
                  50+
                </Typography>
                <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
                  Signature Dishes
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, color: "#d84315" }}
                >
                  15K+
                </Typography>
                <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
                  Happy Customers
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#d84315",
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { bgcolor: "#bf360c" },
              }}
            >
              Learn More About Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
