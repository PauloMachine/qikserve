import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnUS from "./locale/en-US.json";
import translationPtBR from "./locale/pt-BR.json";

const resources = {
  "en-US": {
    translation: translationEnUS,
  },
  "pt-BR": {
    translation: translationPtBR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en-US",
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
