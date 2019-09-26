//import Vue from "vue";
//import Vuex from "vuex";
import axios from "axios";
import API from "../../api";

//Vue.use(Vuex);
export default {
  state: {
    user: null
  },
  mutations: {
    unregisterForUserMeetup: (state, payload) => {
      //payload is the meetupid
      const registeredMeetups = state.user.registeredMeetups;
      registeredMeetups.splice(
        registeredMeetups.findIndex(meetup => meetup.id === payload),
        1
      );
      Reflect.deleteProperty(state.user.registrationKeys, payload);
    },
    registerUserForMeetup: (state, payload) => {
      const id = payload.meetupId;
      const registrationId = payload.registrationId;
      //console.log(registrationId);
      if (
        state.user.registeredMeetups.findIndex(meetup => meetup.id === id) >= 0
      ) {
        return;
      }
      state.user.registeredMeetups.push(id);

      state.user.registrationKeys[id] = registrationId;
    },

    setUser: (state, payload) => {
      state.user = payload;
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  actions: {
    fetchUserData: async ({ commit, getters }) => {
      commit("setLoading", true);
      //send user id to api, get all the registered meeting under that specific id
      const token = localStorage.getItem("animeMeetup-token");
      const userId = getters.user.id;
      let result = await axios({
        headers: { Authorization: "bearer " + token },
        method: "get",
        url: API.fetchUserData,
        params: { userId }
      });
      //console.log(result);
      const registeredMeetups = result.data.data.registeredMeetings;
      const registrationKeys = result.data.data.registrationKeys;
      const newUserData = {
        id: getters.user.id,
        registeredMeetups,
        registrationKeys
      };
      commit("setLoading", false);
      commit("setUser", newUserData);
    },
    registerUserMeetup: async ({ commit, getters }, payload) => {
      commit("setLoading", true);
      const userId = getters.user.id;
      const meetupId = payload;
      const token = localStorage.getItem("animeMeetup-token");
      const meetupData = {
        userId,
        meetupId
      };
      let registrationId;
      let result;
      try {
        result = await axios({
          headers: { Authorization: "bearer " + token },
          method: "post",
          url: API.registerMeeting,
          data: meetupData
        });
        registrationId = result.data.data.registrationId;
        //console.log(registrationId);
        commit("setLoading", false);
        commit("registerUserForMeetup", { meetupId, registrationId });
      } catch (err) {
        commit("setLoading", false);
        console.log(err);
      }
    },
    unregisterUserMeetup: async ({ commit, getters }, payload) => {
      //payload is the registration key;
      commit("setLoading", true);
      const user = getters.user;
      const token = localStorage.getItem("animeMeetup-token");
      let result;
      if (!user.registrationKeys) {
        return;
      }
      const registrationKey = user.registrationKeys[payload];
      try {
        result = await axios({
          headers: { Authorization: "bearer " + token },
          method: "delete",
          url: API.unregisterMeeting,
          data: { registrationKey }
        });
        commit("setLoading", false);
        commit("unregisterForUserMeetup", payload);
      } catch (err) {
        commit("setLoading", false);
        console.log(err);
      }
    },

    logout: ({ commit }) => {
      commit("setUser", null), localStorage.removeItem("animeMeetup-token");
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
        const newUser = {
          id: result.data.data.localId,
          registeredMeetups: [],
          registrationKeys: {}
        };
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

        const newUser = {
          id: result.data.data.localId,
          registeredMeetups: [],
          registrationKeys: {}
        };
        commit("setLoading", false);
        commit("setUser", newUser);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    }
  }
};
