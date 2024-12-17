/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LanguagesEnum } from '@enums/LanguagesEnum';

import en from './resources/en.json';
import fr from './resources/fr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: LanguagesEnum.FR,
  resources: { fr: { translation: fr }, en: { translation: en } },
});

export default i18n;
