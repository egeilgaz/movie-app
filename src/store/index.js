import Vue from "vue";
import Vuex from "vuex";
import movies from "../services/movies/index"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {movies},
});
