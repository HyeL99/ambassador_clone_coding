import Vue from "vue";
import VueI18n from "vue-i18n";
import en_US from "./locales/en_US.json";
import ko_KR from "./locales/ko_KR.json";

Vue.use(VueI18n);

const vueI18n = new VueI18n({
  locale: "ko_KR",
  fallbackLocale: "ko_KR",
  messages: { en_US, ko_KR },
});

export default vueI18n;
