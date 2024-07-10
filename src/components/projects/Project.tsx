"use client";
import { Avatar, Box, Button, Card, Fade } from "@mui/material";
import { ProjectType } from "./projectsRecord";
import { useState } from "react";
import { Description, GitHub } from "@mui/icons-material";

type Props = ProjectType & { setModalContent: (content: ProjectType) => void };

export function Project({ title, image, link, repo, technologies, description, setModalContent }: Props) {
  const [isMouseIn, setIsMouseIn] = useState(false);

  return (
    <>
      <Card
        sx={{
          width: 300,
          height: 180,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative"
        }}
        onMouseEnter={() => setIsMouseIn(true)}
        onMouseLeave={() => setIsMouseIn(false)}
      >
        <Avatar
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            transition: "transform 0.2s ease-in-out",
            transform: isMouseIn ? "scale(1.1)" : "scale(1)"
          }}
          variant="square"
        />
        <Fade in={isMouseIn} timeout={200} style={{ transitionTimingFunction: "ease-in-out" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Box sx={{ display: "flex", gap: 4 }}>
              <Button
                disabled={!repo}
                href={repo ?? ""}
                variant="contained"
                LinkComponent={"a"}
                target="_blank"
                sx={{ width: 80, height: 50 }}
              >
                <GitHub sx={{ width: "80%", height: "80%" }} />
              </Button>
              <Button
                variant="contained"
                sx={{ width: 80, height: 50 }}
                onClick={() => setModalContent({ title, image, link, repo, technologies, description })}
              >
                <Description sx={{ width: "80%", height: "80%" }} />
              </Button>
            </Box>
          </Box>
        </Fade>
      </Card>
    </>
  );
}
