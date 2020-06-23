import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'tw',
    user_account: '',
    apiData: [],
  },
  mutations: {
    SET_LANG(state, paload) {
      state.lang = paload; // 改變語言
    },
    SET_ACCOUNT(state, paload) {
      state.user_account = paload;
    },
    GET_DATA(state, data) {
      state.apiData = data;
    },
  },
  actions: {
    setLang(context, payload) {
      context.commit('SET_LANG', payload);
    },

    async get_user_list(context) {
      const res = await Vue.axios.get('/');
      context.commit('GET_DATA', res.data);
    },

    async update_user_list(context, data) {
      await Vue.axios.put(`/${data.id}`, data);
      context.dispatch('get_user_list');
    }
  },
  modules: {
  },
});
