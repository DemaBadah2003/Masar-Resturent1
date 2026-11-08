import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Layout({ title, intro, error, children }) {
  const { language, text, isArabic } = useLanguage();

  return (
    <div className="digital-menu" lang={language} dir={isArabic ? "rtl" : "ltr"}>
      <header className="digital-menu-header">
        <div className="wrap">
          <div className="digital-menu-intro">
            <span className="eyebrow">{text.eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </div>
      </header>

      <div className="wrap digital-menu-content">
        {error && (
          <p className="menu-notice error" role="alert">{text.storageError}</p>
        )}
        {children}
      </div>
    </div>
  );
}