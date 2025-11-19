"use client";

import { Box, Container, Typography, Link } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0E1B3B", color: "white", pt: 8, pb: 4 }}>
      <Container>
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 5,
            mb: 4,
          }}
        >
          {/* Logo */}
          <Box>
            <Image
              src="/phenome-footer-logo.png"
              alt="Phenome Logo"
              width={200}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                mb: 1,
                letterSpacing: "0.5px",
              }}
            >
              QUICK LINKS
            </Typography>

            <FooterLink text="Home" />
            <FooterLink text="About" />
            <FooterLink text="News" />
            <FooterLink text="Order test" />
          </Box>

          {/* Contact */}
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                mb: 1,
                letterSpacing: "0.5px",
              }}
            >
              CONTACT
            </Typography>

            <FooterContact
              icon={<LocationOnIcon sx={{ fontSize: 18 }} />}
              text="Lorem Ipsum"
            />
            <FooterContact
              icon={<PhoneIcon sx={{ fontSize: 18 }} />}
              text="239-000-0000"
            />
            <FooterContact
              icon={<EmailIcon sx={{ fontSize: 18 }} />}
              text="hello@phenome.com"
            />
          </Box>

          {/* Social */}
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                mb: 1,
                letterSpacing: "0.5px",
              }}
            >
              FOLLOW US
            </Typography>

            <InstagramIcon sx={{ fontSize: 28, cursor: "pointer" }} />
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
            width: "100%",
            mb: 2,
          }}
        />

        {/* Copyright */}
        <Typography
          sx={{
            textAlign: "center",
            opacity: 0.8,
            fontSize: "0.9rem",
          }}
        >
          © PHENOME 2025
        </Typography>
      </Container>
    </Box>
  );
}

/* Reusable Components */
function FooterLink({ text }: { text: string }) {
  return (
    <Typography
      sx={{
        fontSize: "0.9rem",
        opacity: 0.85,
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": { opacity: 1 },
        mb: 1,
      }}
    >
      {text}
    </Typography>
  );
}

function FooterContact({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        opacity: 0.85,
        mb: 1,
      }}
    >
      {icon}
      <Typography sx={{ fontSize: "0.9rem" }}>{text}</Typography>
    </Box>
  );
}
