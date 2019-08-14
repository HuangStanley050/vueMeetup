<template>
  <div>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>
              mdi-steam
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>View Meetups</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div>
      <v-toolbar>
        <v-app-bar-nav-icon
          class="d-sm-none"
          @click="sideNav = !sideNav"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="d-none d-sm-flex d-lg-flex d-xl-flex d-md-flex"
          >AnimeMeetup</v-toolbar-title
        >

        <v-spacer> </v-spacer>
        <v-toolbar-items class="d-none d-sm-flex d-lg-flex d-xl-flex d-md-flex">
          <v-btn text><v-icon left>mdi-steam</v-icon>View Meetups</v-btn>
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
