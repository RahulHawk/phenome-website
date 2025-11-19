"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import BrandMarquee from "./BrandMarquee";

export default function About() {
  return (
    <Box sx={{ py: 10, bgcolor:"#EDF0EB" }}>
      <Container maxWidth="lg">

        {/* TOP TITLE */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            fontSize: "1.7rem",
            mb: 3,
            color: "#0F1B3B",
            letterSpacing: "0px",
          }}
        >
          THE CHOICE OF TOP REPTILE PROFESSIONALS
        </Typography>

        {/* BRAND LOGO ROW */}
        <BrandMarquee />

        {/* MAIN FLEX SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
          {/* LEFT IMAGE */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              maxWidth: 450,
              mx: "auto",
            }}
          >
            <Image
              src="/about-snake.jpg"
              alt="Snake Image"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "22px",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* RIGHT TEXT */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontSize: "2.7rem",
                mb: 2,
                color: "#0F1B3B",
              }}
            >
              WHO WE ARE
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#545966",
                lineHeight: 1.6,
                mb: 4,
                maxWidth: 520,
              }}
            >
              PHENOME is a new genetics company dedicated to advancing genetic
              science in the reptile community and beyond. PHENOME offers a first
              of its kind genetic testing platform that brings a new level of
              understanding and information to the reptile community. PHENOME
              partners with breeders and animal owners to make genetic testing
              easy to submit, easy to access and easy to manage.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFA500",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                px: 4,
                py: 1.3,
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "#FF8E00",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
