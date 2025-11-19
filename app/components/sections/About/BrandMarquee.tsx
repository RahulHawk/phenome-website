"use client";

import { Box } from "@mui/material";
import Image from "next/image";

export default function BrandMarquee() {
  const brands = [
    "/brand1.png",
    "/brand2.png",
    "/brand3.png",
    "/brand4.png",
    "/brand5.png",
    "/brand6.png",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        py: 3,
        backgroundColor: "#EDF0EB",
      }}
    >
      {/* LEFT Fade — using your background color */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "65px",
          background:
            "linear-gradient(to right, #EDF0EB 80%, rgba(237,240,235,0))",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* RIGHT Fade — using your background color */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "65px",
          background:
            "linear-gradient(to left, #EDF0EB 80%, rgba(237,240,235,0))",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* SCROLLING CONTENT */}
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "scrollLeft 16s linear infinite",
          gap: 10,

          "@keyframes scrollLeft": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {/* COPY 1 */}
        <Box sx={{ display: "flex", gap: 10 }}>
          {brands.map((brand, i) => (
            <Image
              key={"first-" + i}
              src={brand}
              alt="Brand"
              width={200}  // bigger as requested earlier
              height={80}
              style={{ objectFit: "contain", opacity: 0.9 }}
            />
          ))}
        </Box>

        {/* COPY 2 — required for seamless infinite loop */}
        <Box sx={{ display: "flex", gap: 10 }}>
          {brands.map((brand, i) => (
            <Image
              key={"second-" + i}
              src={brand}
              alt="Brand"
              width={200}
              height={80}
              style={{ objectFit: "contain", opacity: 0.9 }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
