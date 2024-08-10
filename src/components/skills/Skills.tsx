"use client";
import { Chip, Grid, Link, Typography } from "@mui/material";
import skillsRecord from "./skillsRecord";
import Divider from "@mui/material/Divider";
import { StarHalfRounded, StarOutlineRounded, StarRounded } from "@mui/icons-material";
import globalTheme from "@/theme";
import useTranslate from "@/hooks/useClientTranslate";

export default function Skills() {
  const t = useTranslate({ section: "skills" });

  return (
    <Grid container display={"flex"} flexWrap={"nowrap"} flexDirection={"column"} gap={4}>
      <Grid item>
        <Link href="#skills" id="skills" style={{ textDecoration: "none" }}>
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
          {t("Dev1")}
          <br />
          {t("Dev2")} <span style={{ color: "#CBACF3" }}>{t("Dev3")}</span>
        </Typography>
      </Grid>
      <Grid item display={"flex"} justifyContent={"center"} flexWrap={"wrap"} alignItems={"center"} gap={2}>
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
      <Divider orientation="horizontal" flexItem sx={{ color: globalTheme.palette.primary.main }} />
      <Grid item>
        <Typography variant="h4" textAlign={"center"}>
          DevOps
        </Typography>
        <Typography variant="subtitle1" mt={4}>
          {t("DevOps1")} <span style={{ color: "#CBACF3" }}>{t("DevOps2")}</span> {t("DevOps3")}{" "}
          <span style={{ color: "#CBACF3" }}>{t("DevOps4")}</span> {t("DevOps5")}.
        </Typography>
      </Grid>
      <Grid item display={"flex"} justifyContent={"center"} flexWrap={"wrap"} alignItems={"center"} gap={2}>
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
      <Divider orientation="horizontal" flexItem sx={{ color: globalTheme.palette.primary.main }} />
      <Grid item>
        <Typography variant="h4" textAlign={"center"}>
          Soft
        </Typography>
        <Typography variant="subtitle1" mt={4}>
          {t("Soft1")} <span style={{ color: "#CBACF3" }}>{t("Soft2")}</span> {t("Soft3")}
        </Typography>
      </Grid>
      <Grid item display={"flex"} justifyContent={"center"} flexWrap={"wrap"} alignItems={"center"} gap={2}>
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
      <Divider orientation="horizontal" flexItem sx={{ color: globalTheme.palette.primary.main }} />
    </Grid>
  );
}
