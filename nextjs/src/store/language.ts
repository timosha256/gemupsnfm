import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LanguageType } from "@/types/data";

interface ILanguageStore {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

export const useLanguageStore = create<ILanguageStore>()(
  persist(
    (set) => ({
      language: "EN",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "gemups-language-storage",
    }
  )
);
