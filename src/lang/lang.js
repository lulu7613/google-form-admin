import Vue from 'vue';
import VueI18n from 'vue-i18n';

import tw from './tw.json';
import en from './en.json';

Vue.use(VueI18n);

const messages = {
  tw,
  en,
};

const i18n = new VueI18n({
  // 默認值
  locale: 'tw', // 设置地区
  messages, // 设置地区信息
});

export default i18n;

// https://kazupon.github.io/vue-i18n/zh/started.html#javascript
// https://ithelp.ithome.com.tw/articles/10194177
// https://stackoverrun.com/cn/q/12654606
