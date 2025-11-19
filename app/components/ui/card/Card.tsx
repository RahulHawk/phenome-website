"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export type CardProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  sx?: object; 
};

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = "",
  sx = {},
}) => {
  return (
    <Box
      component="article"
      className={className}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "all 0.25s ease",
        "&:hover": {
          boxShadow: "0 6px 28px rgba(0,0,0,0.12)",
        },
        ...sx,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#0A2342",
          }}
        >
          {title}
        </Typography>
      )}

      <Box>{children}</Box>
    </Box>
  );
};
