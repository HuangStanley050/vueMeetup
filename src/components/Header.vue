<template>
  <div>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title">
          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div>
      <v-toolbar dark class="indigo accent-2">
        <v-app-bar-nav-icon
          class="d-sm-none"
          @click="sideNav = !sideNav"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="d-none d-sm-flex d-lg-flex d-xl-flex d-md-flex"
          >AnimeMeetup</v-toolbar-title
        >

        <v-spacer> </v-spacer>
        <v-toolbar-items
          v-for="item in menuItems"
          :key="item.title"
          class="d-none d-sm-flex d-lg-flex d-xl-flex d-md-flex"
        >
          <v-btn text
            ><v-icon left>{{ item.icon }}</v-icon
            >{{ item.title }}</v-btn
          >
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: "mdi-steam", title: "View Meetups" },
        { icon: "mdi-comment-outline", title: "Organize Meetups" },
        { icon: "mdi-account-tie", title: "Profile" },
        { icon: "mdi-account-plus", title: "Sign Up" },
        { icon: "mdi-account-multiple-check", title: "Sign In" }
      ]
    };
  }
};
</script>
