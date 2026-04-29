import React from "react";
import { Box, CssBaseline, Typography, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#fafbfc" }}>
      <CssBaseline />

      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="menu">
          <Menu />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Box
        sx={{
          bgcolor: "#111",
          color: "white",
          py: 6,
          borderTop: "1px solid #333",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#d84315", mb: 1 }}
            >
              Ali Maher Restaurant
            </Typography>
            <Typography variant="body2" sx={{ color: "#777" }}>
              © {new Date().getFullYear()} All rights reserved. Designed with
              passion.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
