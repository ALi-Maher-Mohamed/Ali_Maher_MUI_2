import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Button,
} from "@mui/material";

const menuItems = [
  {
    title: "Grilled Salmon",
    desc: "Freshly grilled salmon with herbs and lemon butter sauce",
    price: "$15.99",
    rating: 4.8,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=400",
  },
  {
    title: "Pasta Carbonara",
    desc: "Creamy Italian pasta with bacon, parmesan and black pepper",
    price: "$12.99",
    rating: 4.6,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=400",
  },
  {
    title: "NY Cheesecake",
    desc: "Classic New York-style cheesecake with berry compote",
    price: "$7.99",
    rating: 4.9,
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=400",
  },
];

const Menu = () => (
  <Container maxWidth="lg" sx={{ py: 12 }}>
    <Box sx={{ textAlign: "center", mb: 8 }}>
      <Chip
        label="Our Signature Dishes"
        sx={{
          bgcolor: "#fff3e0",
          color: "#d84315",
          fontWeight: 600,
          mb: 2,
          py: 3,
          px: 2,
        }}
      />
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
        Featured Menu
      </Typography>
      <Typography variant="h6" sx={{ color: "#666" }}>
        Handcrafted dishes prepared by our master chefs
      </Typography>
    </Box>

    <Grid container spacing={4}>
      {menuItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #e0e0e0",
              "&:hover": {
                transform: "translateY(-12px)",
                border: "1px solid #d84315",
              },
              transition: "0.4s",
            }}
          >
            <CardMedia component="img" height="260" image={item.image} />
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1.5,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#d84315", fontWeight: 700 }}
                >
                  {item.price}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                {item.desc}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Rating
                  value={item.rating}
                  precision={0.1}
                  size="small"
                  readOnly
                />
                <Button size="small" sx={{ color: "#d84315", fontWeight: 600 }}>
                  Order Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Menu;
