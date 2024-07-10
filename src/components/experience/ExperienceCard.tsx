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
    Collapse,
} from "@mui/material";
import { ExperienceRecord } from "./experienceRecord";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

interface Props {
    record: ExperienceRecord;
}

export default function ExperienceCard({ record }: Props) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Grid item>
            <Card sx={{ maxWidth: 330 }}>
                <CardHeader
                    title={record.position}
                    subheader={record.date}
                    sx={{ color: "#CBACF3" }}
                />
                <CardMedia
                    sx={{ width: 330, marginTop: 2 }}
                    component={"img"}
                    image={record.media}
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        mt={2}
                    ></Typography>
                    <Typography variant="body1">
                        <span
                            style={{
                                color: "#CBACF3",
                                fontWeight: "bold",
                            }}
                        >
                            {" "}
                            Company:
                        </span>{" "}
                        {record.company}
                    </Typography>
                    <Collapse timeout={300} in={expanded}>
                        <Typography variant="body1">
                            <span
                                style={{
                                    color: "#CBACF3",
                                    fontWeight: "bold",
                                }}
                            >
                                Responsibilities:
                            </span>
                        </Typography>
                        <ul>
                            {record.responsibilities.map((responsibility) => (
                                <li
                                    key={responsibility}
                                    dangerouslySetInnerHTML={{
                                        __html: responsibility,
                                    }}
                                />
                            ))}
                        </ul>
                    </Collapse>
                    <Typography variant="body1">
                        <span
                            style={{
                                color: "#CBACF3",
                                fontWeight: "bold",
                            }}
                        >
                            Tech stack
                        </span>
                    </Typography>
                    <Box display={"flex"} mt={1} gap={1} flexWrap={"wrap"}>
                        {record.technologies.map((technology) => (
                            <Chip
                                label={technology}
                                color="primary"
                                sx={{ fontWeight: "bold" }}
                                key={technology}
                            />
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
                                      transition: "all 0.3s ease",
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
