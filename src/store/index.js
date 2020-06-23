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
    CHANGE_USERNAME(state, data) {
      const apiData = state.apiData
      apiData.forEach((i, k) => {
        if (i.id === data.id) {
          state.apiData[k].username = data.username;
          state.apiData[k].admin = data.admin;
        }
      });
      state.apiData = apiData;
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
      await Vue.axios.post('/', data)
      const res = await Vue.axios.patch('/', data);
      context.commit('GET_DATA', res.data);
    }
  },
  modules: {
  },
});
