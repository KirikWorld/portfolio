"use client";
import { useState, useEffect } from "react";
import getCookie from "../util/cookie";
import { getI18n, setI18n } from "../store/index";
import useI18n from "../store/i18n/store";

export default function I18nProvider() {
  const [lang, _] = useState<"en" | "ru">((getCookie("lang") as "en" | "ru") || "en");
  const langData = useI18n(getI18n);
  const setLangData = useI18n(setI18n);

  const fetchLanguageData = async (lang: "en" | "ru") => {
    const files = ["about", "routes", "skills"];
    const updatedLangData = { ...langData };

    for (const file of files) {
      const response = await fetch(`/locales/${lang}/${file}.json`);
      const data = await response.json();
      updatedLangData[file] = data;
    }

    setLangData(updatedLangData);
  };

  useEffect(() => {
    fetchLanguageData(lang);
  }, [lang]);

  useEffect(() => {
    if (!langData) {
      window.location.assign("/intro");
    }
  }, [langData]);

  return <></>;
}
