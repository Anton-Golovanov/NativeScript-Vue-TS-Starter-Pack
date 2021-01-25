import Vue from 'nativescript-vue';
import VueI18n from 'vue-i18n';

import { Locales } from './locale.typing';

import en from './en.js';
import ru from './ru.js';

const messages = {
  [Locales.EN]: en,
  [Locales.RU]: ru,
};

const defaultLocale = Locales.RU;

Vue.use(VueI18n);

export const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});
