import "../styles/sections/_navbar.sass";
import { getLangFromUrl, useTranslations } from "../i18n/utils.ts";

export default function Navbar({ lang }) {
  const t = useTranslations(lang);


  const langToPathMap = {
    de: "traditionelle-mearchen",
    en: "traditionalStories",
    no: "tradisjonelle-eventyr"
  };
  const urlSlugTraditionelleStories = langToPathMap[lang];

  const urlSlugWhoIsJulianMap = {
    de: "wer-ist-julian",
    en: "who-is-julian",
    no: "hvem-er-julian"
  }
  const urlSlugWhoIsJulian = urlSlugWhoIsJulianMap[lang]

  return (
    <nav className="navbar content-grid">
      <div class="nav-container wide-width">
        <div class="navbar-left">
          <ol>
            <li><a href="/">{t("nav.pageName")}</a></li>
          </ol>
        </div>
        <div class="navbar-right">
          <ol class="navbar-right-container">
            <li>
              <a href={`/${lang}/${urlSlugTraditionelleStories}/`}>{t("nav.traditionalStories")}</a>
            </li>
            <li><a href={`/${lang}/${urlSlugWhoIsJulian}/`}>{t("nav.whoIsJulian")}</a></li>
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
