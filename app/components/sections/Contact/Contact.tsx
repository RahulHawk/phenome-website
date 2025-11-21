"use client";

import {
  Box,
  Container,
  Typography,
  MenuItem,
  TextField,
} from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Button } from "@/app/components/ui/button/Button";

export default function ContactForm() {
  const inputStyle = {
    mb: 3,
    background: "#fff",
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFA500",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: "#FF8A00",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF8A00",
      },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        backgroundColor: "#EDF0EB",
      }}
    >
      {/* FULL BACKGROUND IMAGE */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <Image
          src="/snake-form-bg.jpg"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 1,
          }}
        />
      </Box>

      {/* DARK OVERLAY FOR READABILITY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0))",
          zIndex: 2,
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* LEFT TEXT BLOCK (NO CARD) */}
        <Box sx={{ flex: 1, maxWidth: 500 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "2.8rem",
              color: "white",
              mb: 2,
            }}
          >
            Submit Sample Details
          </Typography>

          <Typography
            sx={{
              color: "white",
              opacity: 0.9,
              fontSize: "1rem",
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum.
          </Typography>

          <Button variant="primary" size="md">
            Add Another Sample Details
          </Button>
        </Box>

        {/* RIGHT FORM CARD */}
        <Box
          sx={{
            flex: 1,
            background: "white",
            p: 4,
            borderRadius: "16px",
            boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
            maxWidth: 500,
          }}
        >
          {/* Species */}
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Species :</Typography>
          <TextField
            fullWidth
            select
            defaultValue="Lorem Ipsum"
            sx={inputStyle}
            SelectProps={{
              IconComponent: KeyboardArrowDownRoundedIcon,
            }}
          >
            <MenuItem value="Lorem Ipsum">Lorem Ipsum</MenuItem>
          </TextField>

          {/* Morph */}
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Morph :</Typography>
          <TextField fullWidth placeholder="Lorem Ipsum" sx={inputStyle} />

          {/* Sample Type */}
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Sample Type :</Typography>
          <TextField
            fullWidth
            select
            defaultValue="Lorem Ipsum"
            sx={inputStyle}
            SelectProps={{
              IconComponent: KeyboardArrowDownRoundedIcon,
            }}
          >
            <MenuItem value="Lorem Ipsum">Lorem Ipsum</MenuItem>
          </TextField>

          <Button variant="primary" size="lg" style={{ width: "100%" }}>
            Submit Sample
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
