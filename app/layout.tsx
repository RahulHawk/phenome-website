"use client";

import type { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

import Navbar from "@/app/components/nav/Navbar";
import Footer from "@/app/components/sections/Footer/Footer";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Apply Poppins to MUI theme
const theme = createTheme({
  palette: {
    primary: { main: "#0055FF" },
    secondary: { main: "#FF6A6A" },
    background: { default: "#F6FAFF" },
    text: { primary: "#111827", secondary: "#4B5563" },
  },
  typography: {
    fontFamily: `${poppins.style.fontFamily}, sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    button: { fontWeight: 600 },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
