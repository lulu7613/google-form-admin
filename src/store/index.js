import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'tw',
  },
  mutations: {
    SET_LANG(state, paload) {
      state.lang = paload; // 改變語言
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
