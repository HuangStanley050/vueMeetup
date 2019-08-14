<template>
  <v-app dark>
    <Header />
    <main>
      Hello world
    </main>
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  data() {
    return {
      sideNav: false
    };
  },
  components: { Header }
};
</script>
