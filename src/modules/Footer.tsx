import { Telegram } from "@mui/icons-material";
import { Box, Button, Grid, Link, Typography } from "@mui/material";

export function Footer() {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"auto"}
      py={4}
      sx={{
        border: "1px solid",
        borderRadius: 3
      }}
    >
      <Grid item>
        <Typography variant="h4" textAlign={"center"} fontFamily={"BADTYPE"}>
          Designed and Developed by <span style={{ color: "#CBACF3" }}>Kurayami</span>
        </Typography>
      </Grid>
      <Grid item>
        <Box display={"flex"} gap={2}>
          <Button
            variant="outlined"
            LinkComponent={Link}
            href={"http://t.me/kiriknm"}
            target="_blank"
            startIcon={<Telegram />}
          >
            Collaborate
          </Button>
          <Button
            variant="outlined"
            LinkComponent={Link}
            href={"http://github.com/KirikWorld"}
            target="_blank"
            startIcon={<Telegram />}
          >
            GitHub
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" textAlign={"center"}>
          © 2024 Kurayami
        </Typography>
      </Grid>
    </Grid>
  );
}
