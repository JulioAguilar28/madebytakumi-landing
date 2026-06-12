import { en } from "./en";
import { es } from "./es";

export const defaultLang = "es";
export const languages = { es, en } as const;
export type Lang = keyof typeof languages;
