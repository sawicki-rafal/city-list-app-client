import {httpClient} from "@/helpers/httpClient";

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
      httpClient.defaults.headers.common['Authorization'] = `Basic ${token}`;
    },
    clearToken({ commit }) {
      commit('clearToken');
      httpClient.defaults.headers.common['Authorization'] = '';
    }
  },
  getters: {
    isUserLoggedIn: state => {
      return state.token !== null && state.token !== undefined;
    }
  }
};
