import React from "react";
import { useLanguage } from "../context/LanguageContext";
import useHashRoute from "../hooks/useHashRoute";

export default function Navbar() {
  const { text } = useLanguage();
  const route = useHashRoute();

  return (
    <a
      className={`admin-toggle ${route === "admin" ? "is-active" : ""}`}
      href="#/admin"
    >
      {text.manage}
    </a>
  );
}

export function LanguageToggle() {
  const { language, setLanguage, text } = useLanguage();

  return (
    <div className="language-switch" role="group" aria-label={text.language} lang={language}>
      <button
        type="button"
        className={language === "ar" ? "selected" : ""}
        onClick={() => setLanguage("ar")}
        aria-pressed={language === "ar"}
      >
        عربي
      </button>
      <button
        type="button"
        className={language === "en" ? "selected" : ""}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}