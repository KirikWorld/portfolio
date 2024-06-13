import { Grid } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Grid
            container
            height={"100%"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            {children}
        </Grid>
    );
}
