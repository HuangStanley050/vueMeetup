<template>
  <v-app dark>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div>
      <v-toolbar>
        <v-toolbar-title
          :style="{ cursor: pointer }"
          @click="sideNav = !sideNav"
          >AnimeMeetup</v-toolbar-title
        >
        <v-spacer> </v-spacer>
        <v-toolbar-items>
          <v-btn text><v-icon left>mdi-home</v-icon>View Meetups</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <main>
      Hello world
    </main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      sideNav: false
    };
  },
  components: {}
};
</script>
