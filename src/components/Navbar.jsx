import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Restaurant } from "@mui/icons-material";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Menu", id: "menu" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const handleScroll = (id, label) => {
    setActiveNav(label);
    const element = document.getElementById(id);
    if (element) {
      // حساب مسافة الـ Offset عشان الـ Navbar ميتغطيش على العنوان
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={() => handleScroll("home", "Home")}
          >
            <Restaurant sx={{ color: "#d84315", fontSize: 32 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #d84315 0%, #ff6f00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ali Maher
            </Typography>
          </Box>

          {/* Nav Items */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScroll(item.id, item.label)}
                sx={{
                  color: activeNav === item.label ? "#d84315" : "#424242",
                  px: 3,
                  fontWeight: activeNav === item.label ? 600 : 500,
                  textTransform: "none",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: activeNav === item.label ? "60%" : "0%",
                    height: "3px",
                    bgcolor: "#d84315",
                    transition: "width 0.3s ease",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            onClick={() => handleScroll("contact", "Contact")}
            sx={{ bgcolor: "#d84315", "&:hover": { bgcolor: "#bf360c" } }}
          >
            Reserve Table
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
