"use client"
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
            // sx={{
            //     "@media (max-width: 1000px)": {
            //         flexDirection: "column-reverse",
            //     },
            // }}
        >
            <Grid item>
                <Link href="#skills" id="skills" style={{ textDecoration: "none" }}>
                    <Typography variant="h3" fontFamily={"BADTYPE"}>
                        Skills
                    </Typography>
                </Link>
            </Grid>
            <Grid item>
                <Typography variant="h4">Dev</Typography>
            </Grid>
            <Grid
                item
                display={"flex"}
                justifyContent={"space-around"}
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
                <Typography variant="h4">DevOps</Typography>
            </Grid>
            <Grid
                item
                display={"flex"}
                justifyContent={"space-around"}
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
                <Typography variant="h4">Soft</Typography>
            </Grid>
            <Grid
                item
                display={"flex"}
                justifyContent={"space-around"}
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
