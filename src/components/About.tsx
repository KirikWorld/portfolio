import { Grid, Link, Typography } from "@mui/material";

export default function About() {
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
          Hello, my name is{" "}
          <span
            style={{
              color: "#CBACF3",
              fontWeight: "bold"
            }}
          >
            Kirill and I am a fullstack web developer.{" "}
          </span>
          I am 21 years old and have{" "}
          <span style={{ color: "#CBACF3", fontWeight: "bold" }}>2 years of professional (commercial) </span>
          development experience and{" "}
          <span style={{ color: "#CBACF3", fontWeight: "bold" }}>5 years of experience in IT. </span>
          <br />
          <br />
          My passion for programming started at the age of{" "}
          <span style={{ color: "#CBACF3", fontWeight: "bold" }}>14. </span>
          It all began in school when I got my first smartphone and started exploring ways to hack games for in-game
          currency and other perks. My interest grew stronger when I decided to participate in a hackathon, where I won
          a programming course on Java at Bauman University. This experience solidified my desire to pursue a career in
          programming.
          <br />
          <br />
          Upon entering university, I discovered web development courses and realized how much I enjoyed creating
          projects that I could easily share with friends and family. This led me to enroll in a full-stack development
          course.
          <br />
          <br />
          Throughout my journey, I have been deeply fascinated by programming and IT technologies. I am constantly
          learning and evolving, driven by a strong commitment to self-education. A significant portion of my knowledge
          has been acquired through self-study, and I take pride in my continuous growth and development in this
          ever-changing field.
        </Typography>
      </Grid>
      <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/man.png" alt="portfolio" width={"400rem"} height={"auto"} />
      </Grid>
    </Grid>
  );
}
