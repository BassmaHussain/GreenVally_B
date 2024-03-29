import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(HttpApi)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    supportedLngs:['en','ar'],
    debug: true,
    lng:localStorage.getItem("i18nextLng") || "en" ,
    fallbackLng: 'en',
    detection:{
      order: [ 'htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches:['localStorage']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translations.json'
    }
  });

export default i18n;