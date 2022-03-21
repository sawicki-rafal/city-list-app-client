export default {
  namespaced: true,
  state: {
    city: null
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
    }
  },
  actions: {
    setCity({ commit }, city) {
      commit('setCity', city);
    },
  },
  getters: {
  }
};
