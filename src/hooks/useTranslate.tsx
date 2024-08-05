import { getTranslate } from "../lib/i18n";
import { cookies } from "next/headers.js";

export default function useTranslate({ section = "common", lang }: { section: string; lang?: string }) {
  const cookiesStore = cookies();
  const langCookie = cookiesStore.get("lang");
  lang = langCookie ? langCookie.value : lang || "en";
  return (key: string) => {
    return getTranslate(key, section, lang);
  };
}
