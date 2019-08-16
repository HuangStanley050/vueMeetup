import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user: {
      id: "8asdfh",
      registeredMeetups: ["aad"]
    },
    loadedMeetups: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        id: "aad",
        title: "PlaceHolder",
        date: "2019-08-11"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1563244673-bee4f49ba850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
        id: "acd",
        title: "PlaceHolder2",
        date: "2019-09-07"
      }
    ]
  },
  mutations: {},
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
  actions: {}
});
