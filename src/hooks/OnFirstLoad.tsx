"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export function OnFirstLoad() {
    useEffect(() => {
        if (sessionStorage.getItem("isIntro")) return;
        sessionStorage.setItem("isIntro", "true");
        redirect("/intro");
    }, []);
    return <></>;
}
