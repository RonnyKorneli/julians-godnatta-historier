import "../styles/sections/_burgerMenu.sass";
import { useTranslations } from "../i18n/utils.ts";
import React, { useState, useEffect } from "react";

export default function Navbar({ lang }) {
  const t = useTranslations(lang);
  const [menuOpen, setMenuOpen] = useState(false);

  const langToPathMap = {
    de: "traditionelle-märchen",
    en: "traditionalStories",
    no: "tradisjonelle-eventyr",
  };

  const urlSlug = langToPathMap[lang];

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="burgerNavbar content-grid">
      {/* Burger Button */}
      <button
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>

      {/* Menu */}
      <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href={`/${lang}/${urlSlug}`}>{t("stories")}</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
