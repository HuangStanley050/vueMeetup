<template>
  <div>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <div>
      <v-toolbar>
        <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>
        <v-toolbar-title>AnimeMeetup</v-toolbar-title>

        <v-spacer> </v-spacer>
        <v-toolbar-items>
          <v-btn text><v-icon left>mdi-home</v-icon>View Meetups</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideNav: false
    };
  }
};
</script>
