import clickoutside from '@/assets/js/clickoutside'; // 引入自定義事件設定
import i18n from '@/lang/lang';
import './assets/icon/index';
import axios from '@/assets/axios.js';
import VueAxios from 'vue-axios';
import _ from 'lodash';

// components
import Button from '@/components/Button.vue'

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// global css
import '@/styles/variables.css';
import '@/styles/bootstrap.css';

// 註冊
Vue.use(VueAxios, axios);

// 註冊元件
Vue.component('Button', Button);

// 自定義事件
Vue.directive('clickoutside', clickoutside);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
