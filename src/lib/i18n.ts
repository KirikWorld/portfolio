import { promises as fs } from "fs";

export type JSONLang = {
  [key: string]: string;
};

export const availableLangs = ["en", "ru"];
const defaultLang = "en";
const defaultPath = "public/locales";

export const getLocalePath = (lang: string, path: string) => `${defaultPath}/${lang}/${path}.json`;

export const getLocale = (lang: string, path: string = "common") => {
  return fs.readFile(getLocalePath(lang, path)).then((data) => JSON.parse(data.toString())) as Promise<JSONLang>;
};

export function getTranslate(key: string, section: string = "common", lang?: string) {
  if (!lang) lang = defaultLang;
  return getLocale(lang, section).then((data) => data[key]);
}
