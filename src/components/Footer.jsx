import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { text } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <a href="#home" className="logo">
            <span className="logo-mark"><i className="fa-solid fa-leaf"></i></span>
            {text.brand}
          </a>
          <p>{text.footerTagline}</p>
        </div>
        <div>
          <h4>{text.explore}</h4>
          <ul>
            <li><a href="#home">{text.home}</a></li>
            <li><a href="#about">{text.about}</a></li>
            <li><a href="#menu">{text.menu}</a></li>
            <li><a href="#contact">{text.contact}</a></li>
          </ul>
        </div>
        <div>
          <h4>{text.visit}</h4>
          <ul>
            <li>{text.address}</li>
            <li>{text.openingHours}</li>
          </ul>
        </div>
        <div>
          <h4>{text.follow}</h4>
          <div className="social-row">
            <a href="#contact" aria-label={text.instagram}><i className="fa-brands fa-instagram"></i></a>
            <a href="#contact" aria-label={text.facebook}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#contact" aria-label={text.whatsapp}><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>{text.copyright}</p>
      </div>
    </footer>
  );
}