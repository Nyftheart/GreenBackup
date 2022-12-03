import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './translation/en';
import fr from './translation/fr';
const resources = {
  en,
  fr,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
