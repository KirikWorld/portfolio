"use client";
import { Routes } from "@/app/routes";
import Logo from "@/components/Logo";
import globalTheme from "@/theme";
import { Box, Button, Grid, Link, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import { Language, Telegram } from "@mui/icons-material";
import getCookie from "@/util/cookie";
import useTranslate from "@/hooks/useClientTranslate";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const bigScreen = useMediaQuery("(min-width:750px)");

  const [lang, setLang] = useState<"en" | "ru">((getCookie("lang") as "en" | "ru") || "en");

  const t = useTranslate({ section: "routes" });

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
          {bigScreen ? (
            <Grid container gap={3}>
              {Routes.map((route) => (
                <Grid item key={route.path}>
                  <Link href={route.path} style={{ textDecoration: "none" }}>
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
                          color: "#828282"
                        }
                      }}
                    >
                      {t(route.title)}
                    </Typography>
                  </Link>
                </Grid>
              ))}
              <Grid item>
                <Button
                  href="http://t.me/kuleshov_k"
                  LinkComponent={Link}
                  target="_blank"
                  variant="outlined"
                  startIcon={<Telegram />}
                  sx={{
                    height: 30,
                    textTransform: "none",
                    color: globalTheme.palette.info.light,
                    borderColor: globalTheme.palette.info.light
                  }}
                >
                  {t("Collaborate")}?
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<Language />}
                  onClick={() => {
                    document.cookie = `lang=${lang === "en" ? "ru" : "en"}; path=/`;
                    setLang(lang === "en" ? "ru" : "en");
                    window.location.reload();
                  }}
                  sx={{
                    height: 30
                  }}
                >
                  {lang}
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Button onClick={() => setOpenMenu(true)} sx={{ color: globalTheme.palette.primary.main }}>
                <MenuRoundedIcon />
              </Button>
              <Menu
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                disableScrollLock
                id="menu"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
              >
                {Routes.map((route) => (
                  <MenuItem
                    sx={{
                      position: "relative"
                    }}
                    key={route.path}
                    onClick={() => {
                      setOpenMenu(false), (window.location.href = route.path);
                    }}
                  >
                    <Link
                      href={route.path}
                      style={{
                        textDecoration: "none",
                        width: "100%",
                        height: "100%"
                      }}
                    >
                      {t(route.title)}
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Button
                    href="http://t.me/kuleshov_k"
                    LinkComponent={Link}
                    target="_blank"
                    variant="outlined"
                    startIcon={<Telegram />}
                    sx={{
                      height: 30,
                      textTransform: "none",
                      color: globalTheme.palette.info.light,
                      borderColor: globalTheme.palette.info.light
                    }}
                  >
                    {t("Collaborate")}?
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    onClick={() => {
                      document.cookie = `lang=${lang === "en" ? "ru" : "en"}; path=/`;
                      setLang(lang === "en" ? "ru" : "en");
                      window.location.reload();
                    }}
                    startIcon={<Language />}
                    sx={{
                      height: 30,
                      textTransform: "none"
                    }}
                  >
                    {lang.toUpperCase()}
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
