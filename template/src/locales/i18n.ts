import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LanguagesEnum } from '@enums/LanguagesEnum';

import en from './resources/en.json';
import fr from './resources/fr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: LanguagesEnum.FR,
  resources: { fr, en },
});

export default i18n;
