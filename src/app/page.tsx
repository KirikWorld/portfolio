import { Box, Container } from "@mui/material";
import { OnFirstLoad } from "@/hooks/OnFirstLoad";
import Header from "@/modules/Header";
import About from "@/components/About";
import Block from "@/layouts/Block";
import Skills from "@/components/skills/Skills";
import "./globals.css";
import Experience from "@/components/experience/Experience";
import { Projects } from "../components/projects/Projects";
import { Footer } from "../modules/Footer";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <OnFirstLoad />
      <Header />
      <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
        <Block>
          <About />
        </Block>
        <Block>
          <Skills />
        </Block>
        <Block>
          <Experience />
        </Block>
        <Block>
          <Projects />
        </Block>
      </Box>
      <Footer />
    </Container>
  );
}
