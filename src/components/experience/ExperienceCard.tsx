"use client";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  CardActions,
  IconButton,
  Collapse
} from "@mui/material";
import { ExperienceRecord } from "./experienceRecord";
import { ExpandMore } from "@mui/icons-material";
import { useState, useEffect } from "react";
import getCookie from "../../util/cookie";

interface Props {
  record: ExperienceRecord;
}

export default function ExperienceCard({ record }: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    setLang(getCookie("lang") || "en");
  }, []);

  return (
    <Grid item>
      <Card sx={{ maxWidth: 330 }}>
        <CardHeader
          title={lang === "ru" ? record.positionRU : record.positionEN}
          subheader={record.date}
          sx={{ color: "#CBACF3" }}
        />
        <CardMedia sx={{ width: 330, marginTop: 2 }} component={"img"} image={record.media} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" mt={2}></Typography>
          <Typography variant="body1">
            <span
              style={{
                color: "#CBACF3",
                fontWeight: "bold"
              }}
            >
              {" "}
              {lang === "ru" ? "Компания:" : "Company:"}
            </span>{" "}
            {lang === "ru" ? record.companyRU : record.companyEN}
          </Typography>
          <Collapse timeout={300} in={expanded}>
            <Typography variant="body1">
              <span
                style={{
                  color: "#CBACF3",
                  fontWeight: "bold"
                }}
              >
                {lang === "ru" ? "Достижения:" : "Achievements:"}
              </span>
            </Typography>
            <ul>
              {(lang === "ru" ? record.responsibilitiesRU : record.responsibilitiesEN).map((responsibility, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: responsibility
                  }}
                />
              ))}
            </ul>
          </Collapse>
          <Typography variant="body1">
            <span
              style={{
                color: "#CBACF3",
                fontWeight: "bold"
              }}
            >
              {lang === "ru" ? "Технологии" : "Tech stack"}
            </span>
          </Typography>
          <Box display={"flex"} mt={1} gap={1} flexWrap={"wrap"}>
            {record.technologies.map((technology, index) => (
              <Chip label={technology} color="primary" sx={{ fontWeight: "bold" }} key={index} />
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <IconButton
            aria-label="share"
            onClick={() => setExpanded(!expanded)}
            sx={
              expanded
                ? {
                    transform: "rotate(180deg)",
                    transition: "all 0.3s ease"
                  }
                : { transition: "all 0.3s ease" }
            }
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
