"use client";

import React from "react";
import { Button as MUIButton, ButtonProps as MUIButtonProps } from "@mui/material";

type CustomButtonProps = Omit<MUIButtonProps, "variant" | "size"> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

export const Button: React.FC<CustomButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  sx = {},
  ...rest
}) => {
  // Variant styling
  const variantStyles: Record<string, any> = {
    primary: {
      backgroundColor: "#FFA500",
      color: "#fff",
      "&:hover": { backgroundColor: "#ff9100" },
    },
    secondary: {
      backgroundColor: "#0A2342",
      color: "#fff",
      "&:hover": { backgroundColor: "#05182c" },
    },
    outline: {
      backgroundColor: "transparent",
      color: "#0A2342",
      border: "2px solid #0A2342",
      "&:hover": {
        backgroundColor: "rgba(10,35,66,0.05)",
      },
    },
  };

  // Size styling
  const sizeStyles: Record<string, any> = {
    sm: { padding: "6px 16px", fontSize: "0.8rem" },
    md: { padding: "10px 22px", fontSize: "0.9rem" },
    lg: { padding: "14px 28px", fontSize: "1rem" },
  };

  return (
    <MUIButton
      {...rest}
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        fontWeight: 600,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...sx,
      }}
    >
      {children}
    </MUIButton>
  );
};
