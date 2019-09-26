// import Vue from "vue";
// import Vuex from "vuex";
import axios from "axios";
import API from "../../api";

//Vue.use(Vuex);
export default {
  state: {
    loading: false,
    error: null
  },
  mutations: {
    setError: (state, payload) => (state.error = payload),
    clearError: state => (state.error = null),
    setLoading: (state, payload) => (state.loading = payload)
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    }
  },
  actions: {
    clearError: ({ commit }) => {
      commit("clearError");
    }
  }
};
