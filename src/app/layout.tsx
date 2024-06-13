import type { Metadata } from "next";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import globalTheme from "@/theme";
import "./globals.css";
import FullScreen from "@/layouts/Fullscreen";

export const metadata: Metadata = {
    title: "Kurayami",
    description: "Kurayami's Portfolio Page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="preload" as="font" href="/BadType.ttf" />
            <body>
                <ThemeProvider theme={globalTheme}>
                    <CssBaseline enableColorScheme />
                    <FullScreen>{children}</FullScreen>
                </ThemeProvider>
            </body>
        </html>
    );
}
