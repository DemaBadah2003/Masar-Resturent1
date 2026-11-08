import React, { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import useHashRoute from "./hooks/useHashRoute";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MenuPage from "./pages/MenuPage";
import AdminPage from "./pages/AdminPage";

const routes = {
  menu: MenuPage,
  admin: AdminPage,
};

function SkipLink() {
  const { text } = useLanguage();

  return (
    <a className="skip-link" href="#main">
      {text.skipContent}
    </a>
  );
}

export default function MenuApp() {
  const route = useHashRoute();
  const Page = routes[route] || MenuPage;

  useEffect(() => {
    const section = document.getElementById("menu");
    if (section && window.location.hash.startsWith("#/")) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [route]);

  return (
    <LanguageProvider>
      <SkipLink />

      <Header />

      <main id="main">
        {/* ================= HOME SECTION ================= */}
        <Home />

        {/* ================= ABOUT SECTION ================= */}
        <About />

        {/* ================= MENU SECTION ================= */}
        <section id="menu">
          <Page />
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <Contact />
      </main>

      <Footer />
    </LanguageProvider>
  );
}