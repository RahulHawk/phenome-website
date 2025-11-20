"use client";

import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/app/components/ui/button/Button";

export default function FAQSection() {
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleToggle = (index: number) => {
        setExpanded(expanded === index ? false : index);
    };

    const faqs = [
        {
            q: "Lorem Ipsum is Simply Dummy Text Of The Printing?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod vel nulla at sagittis. Mauris feugiat dignissim nisi nec tempor.",
        },
        {
            q: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting?",
            a: "Suspendisse potenti. Nullam porta, magna in pharetra sollicitudin, odio arcu tempor sem, eget efficitur ipsum velit id lectus.",
        },
        {
            q: "Why Do We Use Lorem Ipsum?",
            a: "Lorem ipsum has been the industry's standard placeholder text since the 1500s. It provides natural word flow to preview page layouts.",
        },
        {
            q: "Where Can I Get More Lorem Ipsum?",
            a: "You can find many generators online. Always choose reputable sources to avoid meaningless or incorrect variations.",
        },
    ];

    return (
        <Box sx={{ backgroundColor: "#EDF0EB", py: 10 }}>
            <Container maxWidth="md">
                {/* Heading */}
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        fontWeight: 800,
                        color: "#0A2342",
                        mb: 1,
                    }}
                >
                    Frequently Asked Questions
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        maxWidth: 600,
                        mx: "auto",
                        color: "#555",
                        mb: 6,
                    }}
                >
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                </Typography>

                {/* FAQ ACCORDIONS */}
                {faqs.map((f, i) => (
                    <Accordion
                        key={i}
                        disableGutters
                        elevation={0}
                        expanded={expanded === i}
                        onChange={() => handleToggle(i)}
                        sx={{
                            mb: 3,
                            borderRadius: "16px !important",
                            background: "white",
                            px: 3,
                            py: 1.5, 
                            border: "1px solid #e5e5e5",
                            width: "100%",
                            minHeight: "72px", 
                            "& .MuiAccordionSummary-content": {
                                my: 1, 
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={
                                expanded === i ? (
                                    <RemoveIcon sx={{ color: "#0A2342", fontWeight: 900 }} />
                                ) : (
                                    <AddIcon sx={{ color: "#0A2342", fontWeight: 900 }} />
                                )
                            }
                            sx={{
                                display: "flex",
                                alignItems: "center",       
                                minHeight: "72px",          
                                "& .MuiAccordionSummary-content": {
                                    alignItems: "center",     
                                    my: 0.5,
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    color: "#0A2342",
                                    fontSize: "1.15rem",
                                }}
                            >
                                {f.q}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography
                                sx={{
                                    color: "#555",
                                    fontSize: "1rem",
                                    lineHeight: 1.6,
                                    mt: 1,
                                }}
                            >
                                {f.a}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>

            {/* CTA BANNER SECTION */}
            <Container sx={{ mt: 10 }}>
                <Box
                    sx={{
                        position: "relative",
                        height: 320,
                        borderRadius: "18px",
                        overflow: "hidden",
                    }}
                >
                    {/* Background Image */}
                    <Image
                        src="/snake-banner.jpg"
                        alt="Snake CTA Background"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />

                    {/* Text + Button */}
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "100%",
                            px: 5,
                        }}
                    >
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: 800,
                                fontSize: "2.5rem",
                                maxWidth: 600,
                                lineHeight: 1.25,
                            }}
                        >
                            CLICK THE LINK BELOW TO SUBMIT YOUR SHEDS FOR TESTING
                        </Typography>

                        <Button
                            variant="primary"
                            size="md"
                            style={{
                                fontSize: "1.5rem",
                                borderRadius: "8px",
                                padding: "10px 40px",
                                fontWeight: 400,
                            }}
                        >
                            Visit Shedtesting.com
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
