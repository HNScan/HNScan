import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Languages
import { en } from "./en/en.js"
import { zh } from "./zh/zh.js"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: en,
  zh: zh
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    lng: "en",
    resources,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safe from xss
    }
  });

export default i18n;
