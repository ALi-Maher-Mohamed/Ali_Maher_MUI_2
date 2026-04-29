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

const navItems = ["Home", "Menu", "About", "Contact"];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");

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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Restaurant sx={{ color: "#d84315", fontSize: 32 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #d84315 0%, #ff6f00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px",
              }}
            >
              Ali Maher Restaurant
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => setActiveNav(item)}
                sx={{
                  color: activeNav === item ? "#d84315" : "#424242",
                  px: 3,
                  py: 1,
                  fontWeight: activeNav === item ? 600 : 500,
                  textTransform: "none",
                  fontSize: "15px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: activeNav === item ? "60%" : "0%",
                    height: "3px",
                    bgcolor: "#d84315",
                    transition: "width 0.3s ease",
                    borderRadius: "3px 3px 0 0",
                  },
                  "&:hover::after": { width: "60%" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#d84315",
              px: 3,
              py: 1,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "#bf360c" },
            }}
          >
            Reserve Table
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
