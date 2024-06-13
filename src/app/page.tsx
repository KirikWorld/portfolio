import { Box, Container } from "@mui/material";
import "./globals.css";
import Header from "@/modules/Header";
import About from "@/components/About";
import Block from "@/layouts/Block";
import Skills from "@/components/skills/Skills";

export default function Home() {
    return (
        <Container maxWidth="lg">
            <Header />
            <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                <Block>
                    <About />
                </Block>
                <Block>
                    <Skills />
                </Block>
            </Box>
        </Container>
    );
}
