import { createStore } from 'vuex'
import authentication from "@/store/authentication";
import exception from "@/store/exception";
import city from "@/store/city";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication,
    exception,
    city
  }
})
