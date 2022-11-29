import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../assets/translations/en.json';
import hi from '../assets/translations/hi.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    hi: hi,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
