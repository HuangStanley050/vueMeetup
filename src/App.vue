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
export default {
  components: { Header }
};
</script>
