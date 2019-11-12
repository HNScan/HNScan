import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// @todo eventually do this ourselves
// LanguageDetector needs more testing - currently will auto set a local storage key
// as well as dig into the browser's settings. See more here
// https://github.com/i18next/i18next-browser-languageDetector

// Languages
import en from "./en/en.json";
import { zh } from "./zh/zh.js";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: en,
  zh: zh
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // @todo kill the debug
    debug: true,
    fallbackLng: "en",
    resources,
    interpolation: {
      escapeValue: false // react already safe from xss
    }
  });

export default i18n;
