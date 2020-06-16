import clickoutside from '@/assets/js/clickoutside'; // 引入自定義事件設定
import i18n from '@/lang/lang';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// global css
import '@/styles/variables.css';
import '@/styles/bootstrap.css';

// 自定義事件
Vue.directive('clickoutside', clickoutside);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
