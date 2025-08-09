import "../styles/sections/_navbar.sass";
import { getLangFromUrl, useTranslations } from "../i18n/utils.ts";

export default function Navbar({ lang }) {
  const t = useTranslations(lang);


  const langToPathMap = {
    de: "traditionelle-märchen",
    en: "traditionalStories",
    no: "tradisjonelle-eventyr"
  };

  const urlSlug = langToPathMap[lang];

  return (
    <nav className="navbar">
      <div class="nav-container wide-width">
        <div class="navbar-left">
          <ol>
            <li>{t("nav.pageName")}</li>
          </ol>
        </div>
        <div class="navbar-right">
          <ol class="navbar-right-container">
            <li>
              <a href={`/${lang}/${urlSlug}/`}>{t("nav.traditionalStories")}</a>
            </li>
            <li>{t("nav.whoIsJulian")}</li>
            <li>
              <a href={`/${lang}/blog/`}>{t("nav.blog")}</a>
            </li>
            <li><button>{t("nav.button")}</button></li>
          </ol>
        </div>
      </div>
    </nav>
  );
}
