<template>
  <div>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
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
        <v-toolbar-title
          ><router-link tag="span" to="/" :style="{ cursor: 'pointer' }">
            AnimeMeetup
          </router-link></v-toolbar-title
        >

        <v-spacer> </v-spacer>
        <v-toolbar-items
          v-for="item in menuItems"
          :key="item.title"
          class="d-none d-sm-flex d-lg-flex d-xl-flex d-md-flex"
        >
          <v-btn text :to="item.link"
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
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    menuItems() {
      let menuItems = [
        { icon: "mdi-account-plus", title: "Sign Up", link: "/signup" },
        {
          icon: "mdi-account-multiple-check",
          title: "Sign In",
          link: "/signin"
        }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "mdi-steam", title: "View Meetups", link: "/meetups" },
          {
            icon: "mdi-comment-outline",
            title: "Organize Meetups",
            link: "/meetup/new"
          },
          { icon: "mdi-account-tie", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    }
  },
  data() {
    return {
      sideNav: false
    };
  }
};
</script>
