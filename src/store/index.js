import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import API from "../api";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user: null,
    loadedMeetups: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        id: "aad",
        title: "PlaceHolder",
        date: "2019-08-11",
        location: "Florida",
        description: "Awesome"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1563244673-bee4f49ba850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
        id: "acd",
        title: "PlaceHolder2",
        date: "2019-09-07",
        location: "Japan",
        description: "Excellent"
      }
    ]
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload;
    },
    createMeetup: (state, payload) => {
      state.loadedMeetups.push(payload);
    }
  },
  getters: {
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
    signUserup: async ({ commit }, payload) => {
      try {
        let result = await axios.post(API.register, {
          email: payload.email,
          password: payload.password
        });
        //console.log(result.data);
        const newUser = { id: result.data.data.localId, registeredMeetups: [] };
        commit("setUser", newUser);
      } catch (err) {
        //console.log(err);
      }
    },
    createMeetup: ({ commit }, payload) => {
      const meetup = {
        title: payload.title,
        description: payload.description,
        imageUrl: payload.imageUrl,
        location: payload.location,
        date: payload.date,
        id: "adfafa"
      };
      //reach out to REST API and save it and get an id back
      commit("createMeetup", meetup);
    }
  }
});
