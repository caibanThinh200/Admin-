import * as VI_TRANSLATE from "./locale/vi/common.json"
import * as EN_TRANSLATE from "./locale/en/common.json";
import i18n from "i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    common: VI_TRANSLATE.default,
  },
  en: {
    common: EN_TRANSLATE.default
  },
};

i18n.use(initReactI18next).use(Backend).use(LanguageDetector).init({
  resources,
  react: { 
    useSuspense: false
  },
  lng: "vi",
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
