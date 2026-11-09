import React from "react";
import Navbar, { LanguageToggle } from "./Navbar";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { text } = useLanguage();

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">
            <i className="fa-solid fa-leaf"></i>
          </span>
          {text.brand}
        </a>

        <LanguageToggle />

        <div className="header-end">
          <nav className="main-nav" aria-label={text.primaryNavigation}>
            <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
            <label htmlFor="nav-toggle" className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
              <span className="sr-only">{text.menuButton}</span>
            </label>
            <ul id="nav-list">
              <li>
                <a href="#home" className="current">
                  {text.home}
                </a>
              </li>
              <li>
                <a href="#about">{text.about}</a>
              </li>
              <li>
                <a href="#menu">{text.menu}</a>
              </li>
              <li>
                <a href="#contact">{text.contact}</a>
              </li>
            </ul>
          </nav>
          <Navbar />
        </div>
      </div>
    </header>
  );
}