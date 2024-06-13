"use client";
import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Props {
    isIntro?: boolean;
    variant?: Variant;
}

export default function Logo({ variant, isIntro }: Props) {
    const logoRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!isIntro) return;
        if (!logoRef.current) return;
        const timeout = setTimeout(() => {
            window.location.assign("/");
        }, 1000);

        return () => clearTimeout(timeout);
    }, [logoRef.current]);

    return (
        <div ref={logoRef}>
            <Link href={"/"} style={{ textDecoration: "none" }}>
                <Typography
                    fontFamily="BADTYPE"
                    variant={variant}
                    color={"white"}
                    sx={
                        isIntro
                            ? {
                                  animation: "blink 1s infinite",
                                  "@keyframes blink": {
                                      "0%": {
                                          opacity: 0.4,
                                      },
                                      "50%": {
                                          opacity: 1,
                                      },
                                      "100%": {
                                          opacity: 0.4,
                                      },
                                  },
                                  "@media (max-width: 600px)": {
                                      fontSize: "4rem",
                                  },
                              }
                            : undefined
                    }
                >
                    Kurayami
                </Typography>
            </Link>
        </div>
    );
}
