import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Grid,
    Link,
    Typography,
} from "@mui/material";
import experienceRecord from "./experienceRecord";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
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
                    href="#experience"
                    id="experience"
                    style={{ textDecoration: "none" }}
                >
                    <Typography variant="h3" fontFamily={"BADTYPE"}>
                        Work Experience
                    </Typography>
                </Link>
            </Grid>
            <Grid item>
                <Grid container gap={2} justifyContent={"center"}>
                    {experienceRecord.map((record) => (
                        <ExperienceCard record={record} key={record.company} />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
