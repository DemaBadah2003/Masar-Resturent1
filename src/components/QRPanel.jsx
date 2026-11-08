import React, { useMemo } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "../context/LanguageContext";

export default function QRPanel() {
  const { text } = useLanguage();

  const menuUrl = useMemo(
    () => `${window.location.origin}${window.location.pathname}#/menu`,
    []
  );

  return (
    <aside className="qr-panel">
      <div className="qr-code-wrap">
        <QRCodeSVG value={menuUrl} size={180} level="M" includeMargin />
      </div>
      <h2>{text.qrTitle}</h2>
      <p>{text.qrText}</p>
      <a href={menuUrl} className="qr-link">
        {text.copyLink}: {menuUrl}
      </a>
    </aside>
  );
}