"use client";
import { Chip, Grid, Link, Typography } from "@mui/material";
import skillsRecord from "./skillsRecord";
import Divider from "@mui/material/Divider";
import {
    StarHalfRounded,
    StarOutlineRounded,
    StarRounded,
} from "@mui/icons-material";
import globalTheme from "@/theme";

export default function Skills() {
    return (
        <Grid
            container
            display={"flex"}
            flexWrap={"nowrap"}
            flexDirection={"column"}
            gap={4}
        >
            <Grid item>
                <Link
                    href="#skills"
                    id="skills"
                    style={{ textDecoration: "none" }}
                >
                    <Typography variant="h3" fontFamily={"BADTYPE"}>
                        Skills
                    </Typography>
                </Link>
            </Grid>
            <Grid item>
                <Typography variant="h4" textAlign={"center"}>
                    Dev
                </Typography>
                <Typography variant="subtitle1" mt={4}>
                    I have a professional background in these technologies. I
                    can develop hard and complex web applications. <br />
                    Thanks to my knowledge of various technologies, I can create
                    versatile applications from simple landing pages to complex
                    projects <span style={{ color: "#CBACF3" }}>using AI</span>
                </Typography>
            </Grid>
            <Grid
                item
                display={"flex"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                alignItems={"center"}
                gap={2}
            >
                {skillsRecord
                    .filter((skill) => skill.category === "Dev")
                    .map((skill) => (
                        <Chip
                            sx={{ fontWeight: "bold" }}
                            label={skill.title}
                            key={skill.title}
                            color="primary"
                            icon={
                                skill.level === 3 ? (
                                    <StarRounded sx={{ width: 22 }} />
                                ) : skill.level === 2 ? (
                                    <StarHalfRounded sx={{ width: 22 }} />
                                ) : (
                                    <StarOutlineRounded sx={{ width: 22 }} />
                                )
                            }
                        />
                    ))}
            </Grid>
            <Divider
                orientation="horizontal"
                flexItem
                sx={{ color: globalTheme.palette.primary.main }}
            />
            <Grid item>
                <Typography variant="h4" textAlign={"center"}>
                    DevOps
                </Typography>
                <Typography variant="subtitle1" mt={4}>
                    Knowledge of DevOps tools and platforms allows me to build
                    automated pipelines, monitor and maintain my applications. I
                    can also manage my own infrastructure. My experience college
                    and commercial in{" "}
                    <span style={{ color: "#CBACF3" }}>
                        information security
                    </span>{" "}
                    enables me to build{" "}
                    <span style={{ color: "#CBACF3" }}>secure</span>{" "}
                    infrastructure.
                </Typography>
            </Grid>
            <Grid
                item
                display={"flex"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                alignItems={"center"}
                gap={2}
            >
                {skillsRecord
                    .filter((skill) => skill.category === "DevOps")
                    .map((skill) => (
                        <Chip
                            sx={{ fontWeight: "bold" }}
                            label={skill.title}
                            key={skill.title}
                            color="primary"
                            icon={
                                skill.level === 3 ? (
                                    <StarRounded sx={{ width: 22 }} />
                                ) : skill.level === 2 ? (
                                    <StarHalfRounded sx={{ width: 22 }} />
                                ) : (
                                    <StarOutlineRounded sx={{ width: 22 }} />
                                )
                            }
                        />
                    ))}
            </Grid>
            <Divider
                orientation="horizontal"
                flexItem
                sx={{ color: globalTheme.palette.primary.main }}
            />
            <Grid item>
                <Typography variant="h4" textAlign={"center"}>
                    Soft
                </Typography>
                <Typography variant="subtitle1" mt={4}>
                    Commercial background in soft skills help me to{" "}
                    <span style={{ color: "#CBACF3" }}>
                        lead and communicate
                    </span>{" "}
                    with my team and work effectively.
                </Typography>
            </Grid>
            <Grid
                item
                display={"flex"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                alignItems={"center"}
                gap={2}
            >
                {skillsRecord
                    .filter((skill) => skill.category === "Soft")
                    .map((skill) => (
                        <Chip
                            sx={{ fontWeight: "bold" }}
                            label={skill.title}
                            key={skill.title}
                            color="primary"
                            icon={
                                skill.level === 3 ? (
                                    <StarRounded sx={{ width: 22 }} />
                                ) : skill.level === 2 ? (
                                    <StarHalfRounded sx={{ width: 22 }} />
                                ) : (
                                    <StarOutlineRounded sx={{ width: 22 }} />
                                )
                            }
                        />
                    ))}
            </Grid>
            <Divider
                orientation="horizontal"
                flexItem
                sx={{ color: globalTheme.palette.primary.main }}
            />
        </Grid>
    );
}
