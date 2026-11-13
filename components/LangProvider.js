"use client";
import { createContext, useContext, useState } from "react";
import { DICT } from "../lib/i18n";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("id");
  const t = (key) => (DICT[key] ? DICT[key][lang] : key);
  return (
    <LangContext.Provider value={{ lang, setLang, t, dict: DICT }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
