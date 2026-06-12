import { languages, type Lang } from "@/i18n";

export const getProjects = (lang: Lang = "es") => languages[lang].projects.items;
