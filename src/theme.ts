"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const globalTheme = createTheme({
    transitions: {
        duration: {
            standard: 300,
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                subtitle1: {
                    color: "#828282",
                },
                subtitle2: {
                    color: "#828282",
                },
                h3: {
                    fontWeight: "bold",
                    color: "#CBACF3",
                },
            },
        },
    },
    palette: {
        mode: "dark",
        primary: {main: "#CBACF3"}, secondary: {main: "#828282"}
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        fontSize: 14,
    },
});

export default globalTheme;
