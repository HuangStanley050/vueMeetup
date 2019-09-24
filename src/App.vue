<template>
  <v-app dark>
    <Header />
    <main>
      <router-view> </router-view>
    </main>
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";
import axios from "axios";
import API from "./api";
export default {
  async created() {
    this.$store.dispatch("loadMeetups");

    // let result = await axios.get(API.fetchMeetings);
    // console.log(result.data.data);
  },
  components: { Header }
};
</script>
