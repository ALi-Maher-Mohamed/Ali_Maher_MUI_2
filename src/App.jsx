import React from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

function App() {
  return (
    <Box sx={{ bgcolor: "#fafbfc" }}>
      {/* CssBaseline بيصلح الهوامش الافتراضية للمتصفح */}
      <CssBaseline />

      <Navbar />

      <main>
        <Hero />
        <Menu />
        {/* ممكن تضيف قسم "Our Story" هنا كـ Component منفصل برضه لو حبيت */}
        <Contact />
      </main>

      {/* Footer بسيط */}
      <Box
        sx={{ bgcolor: "#1a1a1a", color: "white", py: 4, textAlign: "center" }}
      >
        <Typography variant="body2">
          © 2024 Ali Maher Restaurant. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
