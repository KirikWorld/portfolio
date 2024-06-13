import { Box } from "@mui/material";

export default function Block({ children }: { children: React.ReactNode }) {
    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
            gap={2}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignContent={"center"}
            width={"100%"}
            my={8}
        >
            {children}
        </Box>
    );
}
