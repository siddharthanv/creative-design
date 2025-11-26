import { SITE_CONFIG } from "@/constants/SiteConfig";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  location: string;
  projectType: string;
  description: string;
}

export default function VisitFormFields() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    location: "",
    projectType: "",
    description: "",
  });

  const [loading, setLoading] = useState(false); // 🔥 NEW

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    if (loading) return; // prevent reset during submit
    setForm({
      name: "",
      phone: "",
      location: "",
      projectType: "",
      description: "",
    });
  };

  const handleSubmit = async () => {
    setLoading(true); // 🔥 disable buttons

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwwGMZ9Wh5Fpg9Q2BP31QoLZBlIAIfL5YK22Z9HFcs8bRwb_53gkrD7giC1JRWINX5l2g/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      alert("Thanks for enquiring us!. Our team will contact you soon!");
      handleReset();
    } catch (error) {
      alert(
        `Something went wrong!. Please call us at ${SITE_CONFIG.CONTACT.PHONE}`
      );
      console.error(error);
    }

    setLoading(false); // 🔥 enable buttons again
  };

  return (
    <Paper
      id="visit-form"
      elevation={6}
      style={{
        flex: 1,
        width: "100%",
        maxWidth: "100%",
      }}
      sx={{
        maxWidth: { xs: "100%", md: 500 },
        p: { xs: 3, md: 5 },
        borderRadius: 4,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#111" }}>
        Book a Free Site Visit and Get Free Quote
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          required
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />

        <TextField
          name="phone"
          label="Contact Number"
          fullWidth
          required
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
        />

        <TextField
          name="location"
          label="Location"
          fullWidth
          required
          value={form.location}
          onChange={handleChange}
          autoComplete="address-line1"
        />

        <TextField
          select
          name="projectType"
          label="Project Type"
          required
          fullWidth
          value={form.projectType}
          onChange={handleChange}
        >
          {SITE_CONFIG.SERVICES.map(({ title }) => (
            <MenuItem value={title}>{title}</MenuItem>
          ))}
          <MenuItem value="Other">Other</MenuItem>
        </TextField>

        <TextField
          name="description"
          label="Description (Optional)"
          multiline
          rows={1}
          fullWidth
          value={form.description}
          onChange={handleChange}
        />

        {/* BUTTONS */}
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            disabled={loading} // 🔥 disable during submit
            sx={{ borderRadius: "30px", py: 1.4 }}
            onClick={handleReset}
          >
            {loading ? "Please wait..." : "Reset"}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            disabled={loading} // 🔥 disable during submit
            sx={{ borderRadius: "30px", py: 1.4, color: "white" }}
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
