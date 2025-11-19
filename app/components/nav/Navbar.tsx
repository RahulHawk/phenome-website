"use client";

import { AppBar, Toolbar, Box, Typography, Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function Header() {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "#EDF0EB",
                color: "inherit",
                px: 4,
                py: 1.5,
                borderBottom: "1px solid #E0E0E0",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* LEFT — LOGO + TEXT */}
                <Box
                    sx={{
                        width: 50,       
                        height: 50,      
                        overflow: "visible", 
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 5,
                    }}
                >
                    <Image
                        src="/logo.png"
                        width={180}   
                        height={180}
                        alt="Phenome Logo"
                        style={{
                            objectFit: "contain",
                            transform: "scale(1.2)", 
                            transformOrigin: "left center",
                        }}
                    />
                </Box>

                {/* CENTER — NAVIGATION PILLS */}
                <Paper
                    elevation={0}
                    sx={{
                        display: "flex",
                        marginLeft: 45,
                        gap: 4,
                        px: 4,
                        py: 1.2,
                        borderRadius: "40px",
                        border: "1px solid #E0E1DF",
                        backgroundColor: "#EDF0EB",
                    }}
                >
                    <Link href="#" style={{ textDecoration: "none", color: "black" }}>
                        <Typography sx={{ fontWeight: 500 }}>HOME</Typography>
                    </Link>
                    <Link href="#about" style={{ textDecoration: "none", color: "black" }}>
                        <Typography sx={{ fontWeight: 500 }}>ABOUT</Typography>
                    </Link>
                    <Link href="#news" style={{ textDecoration: "none", color: "black" }}>
                        <Typography sx={{ fontWeight: 500 }}>NEWS</Typography>
                    </Link>
                </Paper>

                {/* RIGHT — ACTION BUTTONS */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#0A1A33",
                            textTransform: "none",
                            px: 3,
                            py: 1.3,
                            borderRadius: "10px",
                            fontWeight: 600,
                            "&:hover": { backgroundColor: "#0A2245" },
                        }}
                        startIcon={<DescriptionIcon />}
                    >
                        Order Test
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#FFA500",
                            textTransform: "none",
                            px: 3,
                            py: 1.3,
                            borderRadius: "10px",
                            fontWeight: 600,
                            color: "#fff",
                            "&:hover": { backgroundColor: "#FF9900" },
                        }}
                        startIcon={<PersonOutlineIcon />}
                    >
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
