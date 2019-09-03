import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import API from "../api";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    loadedMeetups: []
  },
  mutations: {
    setMeetings: (state, payload) => {
      let newData = [...state.loadedMeetups];
      newData = [...newData, ...payload];
      //console.log(newData);
      return (state.loadedMeetups = [...newData]);
      //console.log(payload);
    },
    setError: (state, payload) => (state.error = payload),
    clearError: state => (state.error = null),
    setLoading: (state, payload) => (state.loading = payload),
    setUser: (state, payload) => {
      state.user = payload;
    },
    createMeetup: (state, payload) => {
      state.loadedMeetups.push(payload);
    }
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
    user(state) {
      return state.user;
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId =>
        state.loadedMeetups.find(meetup => meetup.id === meetupId);
    },
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    }
  },
  actions: {
    logout: ({ commit }) => {
      commit("setUser", null), localStorage.removeItem("animeMeetup-token");
    },
    loadMeetups: async ({ commit }) => {
      //reach out the api and then load all the meetups
      commit("setLoading", true);
      try {
        let result = await axios.get(API.fetchMeetings);

        commit("setMeetings", result.data.data);
        commit("setLoading", false);
      } catch (err) {
        //console.log(err.response);
        commit("setLoading", false);
      }

      //console.log(result.data.data);
    },
    clearError: ({ commit }) => {
      commit("clearError");
    },
    signUserin: async ({ commit }, payload) => {
      commit("setLoading", true);
      commit("clearError");
      try {
        let result = await axios.post(API.login, {
          email: payload.email,
          password: payload.password
        });
        const token = result.data.data.idToken;
        localStorage.setItem("animeMeetup-token", token);
        const newUser = { id: result.data.data.localId, registeredMeetups: [] };
        commit("setLoading", false);
        commit("setUser", newUser);
      } catch (err) {
        //console.log(err.response.data.message);
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },
    signUserup: async ({ commit }, payload) => {
      commit("setLoading", true);
      commit("clearError");

      try {
        let result = await axios.post(API.register, {
          email: payload.email,
          password: payload.password
        });

        const newUser = { id: result.data.data.localId, registeredMeetups: [] };
        commit("setLoading", false);
        commit("setUser", newUser);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },
    createMeetup: async ({ commit, getters }, payload) => {
      const meetup = {
        title: payload.title,
        description: payload.description,
        location: payload.location,
        date: payload.date,
        creatorId: getters.user.id
      };
      const token = localStorage.getItem("animeMeetup-token");

      try {
        //let result = await axios.post(API.storeMeeting, meetup);
        let result = await axios({
          headers: { Authorization: "bearer " + token },
          method: "post",
          url: API.storeMeeting,
          data: meetup
        });
        const id = result.data.data._path.segments[1]; //got the firebase id
        meetup.id = id;
        //commit("createMeetup", meetup);
        //store the image in a separate ajax call and then use the id to associate the file with the meeting

        const formData = new FormData();
        formData.append("file", payload.image, id);
        //formData.append("key", id);

        let image_result = await axios({
          headers: { Authorization: "bearer " + token },
          method: "post",
          url: API.storeImage,
          data: formData
        });

        let imageUrl = image_result.data.data.imageUrl;
        //console.log(newMeetupdata);
        meetup.imageUrl = imageUrl;
        commit("createMeetup", meetup);
      } catch (err) {
        console.log(err.response);
      }
    }
  }
});
