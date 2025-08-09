import "../styles/sections/_navbar.sass";
import { getLangFromUrl, useTranslations } from "../i18n/utils.ts";

export default function Navbar({ lang }) {
  /* const lang = getLangFromUrl(url);
  const t = useTranslations(lang); */


  const langToPathMap = {
    de: "traditionelle-märchen",
    en: "traditionalStories",
    no: "tradisjonelle-eventyr"
  };

  /* const urlSlug = langToPathMap[lang]; */

  return (
    <nav className="navbar">
      <a href="">burger</a>
      <a href="">burger</a>
      <a href="">burger</a>
      <a href="">burger</a>
      <a href="">burger</a>
    </nav>
  );
}


