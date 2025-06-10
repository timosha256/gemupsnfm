"use client";

import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/context/language";
import { useLanguageStore } from "@/store/language";

interface Props {
  children: React.ReactNode;
}

// export const LanguageProvider: React.FC<Props> = ({ children }) => {
//   const language = useLanguageStore((state) => state.language);

//   return (
//     <LanguageContext.Provider value={{ language }}>
//     </LanguageContext.Provider>
//   )
// }
