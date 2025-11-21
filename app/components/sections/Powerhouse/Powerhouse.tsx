"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { Button } from "@/app/components/ui/button/Button";

export default function Powerhouse() {
  return (
    <Box
      sx={{
        backgroundColor: "#EDF0EB", // same as your page bg
        py: { xs: 8, md: 12 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#0A2342", 
              mb: 3,
              maxWidth: 550,
            }}
          >
            THE NEW GENETICS POWERHOUSE IN THE REPTILE INDUSTRY
          </Typography>

          <Typography
            sx={{
              color: "#4A4A4A",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              mb: 4,
              maxWidth: 550,
            }}
          >
            PHENOME is a first of its kind genetic testing platform bringing a
            new level of understanding and information to the reptile industry,
            and is the first genetics company to map the entire genome of a
            diverse group of species.
          </Typography>

          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/snake-lab.jpg" 
            alt="snake testing"
            width={550}
            height={520}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
