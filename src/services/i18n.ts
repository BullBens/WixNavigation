import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import * as localize from 'react-native-localize';
import { languages } from '@constants';

const ua = require('./localozation/ua.json');
const en = require('./localozation/en.json');
// const languageCodes = localize.getLocales().map((locale: any) => locale.languageCode);
// const {languageTag} = localize.findBestAvailableLanguage(languageCodes);
const defaultLanguage = 'en';

export default i18n.use(initReactI18next).init({
  resources: {
    [languages.EN]: { translation: en },
    [languages.UA]: { translation: ua },
  },
  lng: defaultLanguage,
  fallbackLng: languages.EN,
  react: {
    wait: true,
    nsMode: 'default',
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  nsSeparator: false,
  keySeparator: false,
  debug: true,
});
