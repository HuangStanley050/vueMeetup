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
    loadedMeetups: [
      // {
      //   imageUrl:
      //     "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      //   id: "aad",
      //   title: "PlaceHolder",
      //   date: "2019-08-11",
      //   location: "Florida",
      //   description: "Awesome"
      // },
      // {
      //   imageUrl:
      //     "https://images.unsplash.com/photo-1563244673-bee4f49ba850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
      //   id: "acd",
      //   title: "PlaceHolder2",
      //   date: "2019-09-07",
      //   location: "Japan",
      //   description: "Excellent"
      // }
    ]
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
    loadMeetups: async ({ commit }) => {
      //reach out the api and then load all the meetups
      let result = await axios.get(API.fetchMeetings);
      commit("setMeetings", result.data.data);
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
    createMeetup: async ({ commit }, payload) => {
      const meetup = {
        title: payload.title,
        description: payload.description,
        imageUrl: payload.imageUrl,
        location: payload.location,
        date: payload.date
      };
      //reach out to REST API and save it and get an id back
      try {
        let result = await axios.post(API.storeMeeting, meetup);
        const id = result.data.data._path.segments[1]; //got the firebase id
        meetup.id = id;
        commit("createMeetup", meetup);
      } catch (err) {
        console.log(err.response);
      }
    }
  }
});
