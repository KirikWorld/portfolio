"use client";
import { Routes } from "@/app/routes";
import Logo from "@/components/Logo";
import globalTheme from "@/theme";
import { Box, Grid, Link, Typography } from "@mui/material";

export default function Header() {
    return (
        <Box
            sx={{ backdropFilter: "blur(10px)", width: "100% !important" }}
            bgcolor={`${globalTheme.palette.background.default}AA`}
            left={0}
            top={0}
            zIndex={1000}
            position={"fixed"}
            display={"flex"}
            justifyContent={"center"}
        >
            <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
                sm={"auto"}
                p={2}
                width={"100% !important"}
                maxWidth={"1300px !important"}
            >
                <Grid item>
                    <Logo variant="h6" />
                </Grid>
                <Grid item display={"flex"}>
                    <Grid container gap={3}>
                        {Routes.map((route) => (
                            <Grid item key={route.path}>
                                <Link
                                    href={route.path}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        sx={{
                                            height: "100%",
                                            textAlign: "center",
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: "medium",
                                            transition: "color 0.3s",
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "#828282",
                                            },
                                        }}
                                    >
                                        {route.title}
                                    </Typography>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
