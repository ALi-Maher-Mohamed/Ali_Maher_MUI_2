import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Avatar,
  Divider,
} from "@mui/material";
import { LocationOn, Phone, Email, Schedule } from "@mui/icons-material";

const Contact = () => (
  <Container maxWidth="lg" sx={{ py: 12 }}>
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Get In Touch
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField label="Full Name" fullWidth />
          <TextField label="Email Address" fullWidth />
          <TextField label="Your Message" multiline rows={5} fullWidth />
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: "#d84315", py: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={0}
          sx={{ p: 4, bgcolor: "#fafbfc", border: "1px solid #e0e0e0" }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
            Contact Info
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <ContactItem
              icon={<LocationOn />}
              title="Address"
              text="123 Gourmet St, New York"
            />
            <Divider />
            <ContactItem
              icon={<Phone />}
              title="Phone"
              text="+1 (555) 123-4567"
            />
            <Divider />
            <ContactItem
              icon={<Email />}
              title="Email"
              text="info@gourmet.com"
            />
            <Divider />
            <ContactItem
              icon={<Schedule />}
              title="Hours"
              text="Mon-Sun: 11AM - 11PM"
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

const ContactItem = ({ icon, title, text }) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <Avatar sx={{ bgcolor: "#fff3e0" }}>
      {React.cloneElement(icon, { sx: { color: "#d84315" } })}
    </Avatar>
    <Box>
      <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
      <Typography variant="body2" sx={{ color: "#666" }}>
        {text}
      </Typography>
    </Box>
  </Box>
);

export default Contact;
