import i18n from 'i18n-js';
import en from './locales/en.json';
import ar from './locales/ar.json';
import {I18nManager} from 'react-native';

i18n.fallbacks = true;
i18n.translations = {en, ar};

i18n.locale = I18nManager.isRTL ? 'ar' : 'en';

export function translate(key: string, options?: i18n.TranslateOptions) {
  return key ? i18n.t(key, options) : null;
}

export function setLocal(tag: string): void {
  i18n.locale = tag;
}

export default i18n;
