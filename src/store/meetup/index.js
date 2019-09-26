// import Vue from "vue";
// import Vuex from "vuex";
import axios from "axios";
import API from "../../api";

//Vue.use(Vuex);
export default {
  state: {
    loadedMeetups: []
  },
  mutations: {
    updateMeetup: (state, payload) => {
      const meetup = state.loadedMeetups.find(
        meetup => meetup.id === payload.id
      );
      if (payload.title) {
        meetup.title = payload.title;
      }
      if (payload.description) {
        meetup.description = payload.description;
      }
      if (payload.date) {
        meetup.date = payload.date;
      }
    },
    setMeetings: (state, payload) => {
      let newData = [...state.loadedMeetups];
      newData = [...newData, ...payload];
      //console.log(newData);
      return (state.loadedMeetups = [...newData]);
      //console.log(payload);
    },

    createMeetup: (state, payload) => {
      state.loadedMeetups.push(payload);
    }
  },
  getters: {
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

    updateMeetup: async ({ commit }, payload) => {
      commit("setLoading", true);
      const updateObj = {};
      const meetupId = payload.id;
      let result;
      const token = localStorage.getItem("animeMeetup-token");

      if (payload.title) {
        updateObj.title = payload.title;
      }
      if (payload.description) {
        updateObj.description = payload.description;
      }
      if (payload.date) {
        updateObj.date = payload.date;
      }

      try {
        result = await axios({
          headers: { Authorization: "bearer " + token },
          method: "patch",
          url: API.updateMeeting + meetupId,
          data: updateObj
        });
        commit("setLoading", false);
        commit("updateMeetup", payload);
      } catch (err) {
        commit("setLoading", false);
        console.log(err);
      }
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
};
