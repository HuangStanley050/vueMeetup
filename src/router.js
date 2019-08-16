import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import MeetUps from "./components/Meetups/MeetupList.vue";
import CreateMeetup from "./components/Meetups/CreateMeetup.vue";
import Profile from "./components/Users/Profile.vue";
import SignIn from "./components/Users/SignIn.vue";
import SignUp from "./components/Users/SignUp.vue";
import MeetUp from "./components/Meetups/MeetUp.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "Signin",
      component: SignIn
    },
    {
      path: "/signup",
      name: "Signup",
      component: SignUp
    },
    {
      path: "/meetup/new",
      name: "CreateMeetup",
      component: CreateMeetup
    },
    {
      path: "/meetups",
      name: "MeetUps",
      component: MeetUps
    },
    {
      path: "/meetups/:id",
      name: "MeetUp",
      props: true,
      component: MeetUp
    },
    {
      path: "/about",
      name: "About",

      component: About
    }
  ]
});
