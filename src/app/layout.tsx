import type { Metadata } from "next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import globalTheme from "@/theme";
import "./globals.css";
import FullScreen from "@/layouts/Fullscreen";
import I18nProvider from "../modules/i18n";

export const metadata: Metadata = {
  title: "Kurayami",
  description: "Kurayami's Portfolio Page"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preload" as="font" href="/BadType.ttf" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <body>
        <ThemeProvider theme={globalTheme}>
          <CssBaseline enableColorScheme />
          <FullScreen>{children}</FullScreen>
          <I18nProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
