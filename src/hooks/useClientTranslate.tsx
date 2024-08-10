"use client";
import useI18n from "../store/i18n/store";
import { getI18n } from "../store/index";

export default function useTranslate({ section = "common" }: { section: string }) {
  const langData = useI18n(getI18n);
  return (key: string) => {
    return langData && langData?.[section]?.[key];
  };
}
