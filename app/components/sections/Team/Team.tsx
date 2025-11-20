"use client";

import { Box, Container, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { Button } from "@/app/components/ui/button/Button";
import { Card } from "@/app/components/ui/card/Card";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Team() {
    const members = [
        {
            name: "CHARLIE WILLIAMS",
            role: "Operations + Testing",
            image: "/team1.jpg",
        },
        {
            name: "PATRICK MACKNIGHT. PHD",
            role: "Principal Geneticist",
            image: "/team2.jpg",
        },
        {
            name: "JOSH HANSON",
            role: "Marketing + Innovation",
            image: "/team3.jpg",
        },
    ];

    return (
        <Box sx={{ py: 10, backgroundColor: "#EDF0EB" }}>
            <Container>
                {/* Heading */}
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        fontWeight: 700,
                        color: "#0A2342",
                        mb: 1,
                    }}
                >
                    Meet the Phenome Team
                </Typography>

                {/* Subtitle */}
                <Typography
                    sx={{
                        textAlign: "center",
                        maxWidth: 650,
                        mx: "auto",
                        color: "#555",
                        mb: 6,
                    }}
                >
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using Lorem Ipsum
                </Typography>

                {/* Team Cards + Arrows */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        position: "relative",   
                        width: "100%",
                    }}
                >
                    {/* Left Arrow */}
                    <IconButton
                        sx={{
                            position: "absolute",   
                            left: "10px",          
                            top: "40%",
                            transform: "translateY(-50%)",

                            backgroundColor: "#FFA500",
                            color: "white",
                            width: 60,
                            height: 60,
                            zIndex: 10,
                            "&:hover": { backgroundColor: "#ff9100" },
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>

                    {/* Team Cards */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 4,
                        }}
                    >
                        {members.map((m, i) => (
                            <Card
                                key={i}
                                sx={{
                                    textAlign: "center",
                                    background: "transparent",
                                    boxShadow: "none",
                                    padding: "10px",
                                }}
                            >
                                {/* Image with bottom-right diagonal cut */}
                                <Box
                                    sx={{
                                        width: "320px",
                                        height: "380px",
                                        overflow: "hidden",
                                        borderRadius: "16px",
                                        clipPath:
                                            "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                                    }}
                                >
                                    <Image
                                        src={m.image}
                                        alt={m.name}
                                        width={320}
                                        height={380}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>

                                {/* Name */}
                                <Typography
                                    sx={{
                                        mt: 2,
                                        fontWeight: 800,
                                        fontSize: "1.3rem",
                                        textAlign: "left",
                                        color: "#0F1B3B",
                                    }}
                                >
                                    {m.name}
                                </Typography>

                                {/* Role (orange) */}
                                <Typography
                                    sx={{
                                        color: "#FFA500",
                                        fontWeight: 500,
                                        fontSize: "1.25rem",
                                        textAlign: "left",
                                        mt: 0.5,
                                    }}
                                >
                                    {m.role}
                                </Typography>
                            </Card>
                        ))}
                    </Box>

                    {/* Right Arrow */}
                    <IconButton
                        sx={{
                            position: "absolute",    // <-- ADDED
                            right: "10px",          // <-- MOVE OVER RIGHT CARD
                            top: "40%",
                            transform: "translateY(-50%)",

                            backgroundColor: "#FFA500",
                            color: "white",
                            width: 60,
                            height: 60,
                            zIndex: 10,
                            "&:hover": { backgroundColor: "#ff9100" },
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Box>

                {/* "See All" Button */}
                <Box sx={{ textAlign: "center", mt: 5 }}>
                    <Button variant="primary" size="md">
                        See All
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
