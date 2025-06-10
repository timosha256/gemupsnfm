import { createContext } from "react";
import type { LanguageType } from "@/types/data";

export interface ILanguageContext {
    language: LanguageType;
}

export const LanguageContext = createContext<ILanguageContext>({
    language: "EN"
});