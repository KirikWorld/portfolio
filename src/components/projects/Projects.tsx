"use client";
import { Box, Button, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import { Project } from "./Project";
import { projectsRecord, ProjectType } from "./projectsRecord";
import { ModalWrapper } from "../Modal";
import { useState } from "react";
import { Web } from "@mui/icons-material";
import getCookie from "../../util/cookie";

export function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ProjectType | {}>({});

  const onModalClose = () => {
    setModalContent({});
  };

  const openModal = (content: ProjectType) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <>
      <ModalWrapper
        open={modalOpen && !!modalContent}
        title={(modalContent as ProjectType).title}
        onClose={onModalClose}
        setOpen={setModalOpen}
      >
        <Divider sx={{ mb: 2, border: "1px solid" }} variant="fullWidth" />
        <Typography dangerouslySetInnerHTML={{ __html: (modalContent as ProjectType)?.description }} />
        <Divider sx={{ my: 2, border: "1px solid" }} variant="fullWidth" />
        <Grid container gap={2} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} sx={{ mb: 2 }}>
          {(modalContent as ProjectType)?.technologies?.map((tech) => (
            <Chip key={tech} label={tech} color="primary" sx={{ fontWeight: "600" }} />
          ))}
        </Grid>
        <Divider sx={{ my: 2, border: "1px solid" }} variant="fullWidth" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ margin: "0 auto" }}
            disabled={!(modalContent as ProjectType)?.link}
            href={(modalContent as ProjectType)?.link ?? ""}
            target="_blank"
            startIcon={<Web />}
            variant="contained"
            LinkComponent={Link}
          >
            {getCookie("lang") === "ru" ? "Сайт" : "Website"}
          </Button>
        </Box>
      </ModalWrapper>
      <Grid container display={"flex"} flexWrap={"nowrap"} flexDirection={"column"} gap={4}>
        <Grid item>
          <Link href="#projects" id="projects" style={{ textDecoration: "none" }}>
            <Typography variant="h3" fontFamily={"BADTYPE"}>
              Projects
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Grid container gap={2} justifyContent={"center"}>
            {projectsRecord.map((record) => (
              <Project key={record.title} {...record} setModalContent={openModal} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
