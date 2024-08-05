import { Grid, Link, Typography } from "@mui/material";
import useTranslate from "../hooks/useTranslate";

export default function About() {
  const t = useTranslate({ section: "about" });

  return (
    <Grid
      container
      display={"flex"}
      flexWrap={"nowrap"}
      flexDirection={"row"}
      gap={4}
      sx={{
        "@media (max-width: 1000px)": {
          flexDirection: "column-reverse"
        }
      }}
    >
      <Grid item>
        <Link href="#about" id="about" style={{ textDecoration: "none" }}>
          <Typography variant="h3" fontFamily={"BADTYPE"}>
            About me
          </Typography>
        </Link>
        <Typography my={2} lineHeight={1.8}>
          {t("text1")}{" "}
          <span
            style={{
              color: "#CBACF3",
              fontWeight: "bold"
            }}
          >
            {t("text2")}{" "}
          </span>
          {t("text3")} <span style={{ color: "#CBACF3", fontWeight: "bold" }}>{t("text4")}</span> {t("text5")}{" "}
          <span style={{ color: "#CBACF3", fontWeight: "bold" }}>{t("text6")}</span>
          <br />
          <br />
          {t("text7")} <span style={{ color: "#CBACF3", fontWeight: "bold" }}>{t("text8")}</span> {t("text9")}{" "}
          {t("text10")} {t("text11")} <br />
          <br />
          {t("text12")} {t("text13")} <br />
          <br />
          {t("text14")} {t("text15")} {t("text16")}{" "}
        </Typography>
      </Grid>
      <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/man.png" alt="portfolio" width={"400rem"} height={"auto"} />
      </Grid>
    </Grid>
  );
}
