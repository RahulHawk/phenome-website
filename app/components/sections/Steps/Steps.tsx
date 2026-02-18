"use client";

import { Box, Container, Typography } from "@mui/material";

export default function Steps() {
  const steps = [
    {
      number: "01",
      title: "Lorem Ipsum",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      number: "02",
      title: "Lorem Ipsum",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      number: "03",
      title: "Lorem Ipsum",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      number: "04",
      title: "Lorem Ipsum",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        backgroundImage: `url("/forest-bg.jpg")`, // <-- replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          How to Submit Your Sample
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            maxWidth: 700,
            mx: "auto",
            opacity: 0.9,
            mb: 8,
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </Typography>

        {/* Steps Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {steps.map((step, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                background: "rgba(0,0,0,0.55)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
                backdropFilter: "blur(3px)",
              }}
            >
              {/* Step Number Circle */}
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "#FFA500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  color: "#000",
                  mb: 3,
                }}
              >
                {step.number}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 1, color: "#fff" }}
              >
                {step.title}
              </Typography>

              {/* Description */}
              <Typography sx={{ color: "#D0D0D0", fontSize: "0.95rem" }}>
                {step.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
