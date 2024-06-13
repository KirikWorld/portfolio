"use client";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function FullScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Grid container sx={{ height: "100vh" }} px={2}>
                {children}
            </Grid>
        </motion.div>
    );
}
