"use client";

import { Box, Container, Typography, TextField, Button } from "@mui/material";

export default function Hero() {
    return (
        <Box
            sx={{
                position: "relative",
                height: "100vh",
                minHeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundImage: `url("/hero-bg.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
            }}
        >

            <Container
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "50%",
                    maxWidth: "700px",
                    ml: { xs: 2, md: 4 },
                }}
            >
                {/* BIG HEADING */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        lineHeight: 1.2,
                        color: "#fff",
                        fontSize: { xs: "2rem", md: "3rem" },
                        mb: 3,
                        textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                        marginLeft: 5,
                    }}
                >
                    PHENOME MAKES GENETICS TESTING EASY TO SUBMIT, EASY TO ACCESS, AND
                    EASY TO MANAGE
                </Typography>

                {/* SUBTEXT */}
                <Typography
                    variant="body1"
                    sx={{
                        color: "#E7E7E7",
                        mb: 3,
                        fontSize: "1.1rem",
                        ml: 5,
                    }}
                >
                    Enter an email below for more information.
                </Typography>

                {/* Email Field + Notify Button */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "#fff",
                        borderRadius: "10px",
                        overflow: "hidden",
                        width: { xs: "100%", sm: "80%", md: "62%" },
                        p: "2px",
                        height: "48px",
                        ml: 5
                    }}
                >
                    <TextField
                        placeholder="Email Address"
                        variant="standard"
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            sx: {
                                px: 2,
                                py: 0.8, // thinner padding
                                "& input": {
                                    fontSize: "0.95rem",
                                },
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#FFA500",
                            px: 3,
                            borderRadius: "10px",
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                bgcolor: "#FF8F00",
                            },
                            height: "42px",
                            width: "120px",
                        }}
                    >
                        Notify Me
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
