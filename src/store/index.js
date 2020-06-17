import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'tw',
    user_account: '',
  },
  mutations: {
    SET_LANG(state, paload) {
      state.lang = paload; // 改變語言
    },
    SET_ACCOUNT(state, paload) {
      state.user_account = paload;
    },
  },
  actions: {
    setLang(context, payload) {
      context.commit('SET_LANG', payload);
    },
  },
  modules: {
  },
});
