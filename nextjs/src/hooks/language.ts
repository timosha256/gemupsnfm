import { useContext } from "react";
import { LanguageContext } from "@/context/language";

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("Language Context error");
    }
    return ctx;
};