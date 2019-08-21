<template>
  <v-container>
    <v-row v-if="error">
      <v-col xs="12" sm="6" offset-sm="3">
        <Alert :text="error" @dismissed="onDismissed" />
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-row>
                  <v-col xs="12">
                    <v-text-field
                      required
                      type="email"
                      v-model="email"
                      name="email"
                      label="Mail"
                      id="email"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs="12">
                    <v-text-field
                      required
                      type="password"
                      v-model="password"
                      name="password"
                      label="Password"
                      id="password"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs="12">
                    <v-text-field
                      :rules="[comparePassword]"
                      type="password"
                      v-model="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs="12">
                    <v-btn :disabled="loading" :loading="loading" type="submit">
                      Sign Up
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-loading</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-col>
                </v-row>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    },
    comparePassword() {
      return this.password !== this.confirmPassword
        ? "Passwords don't match"
        : true;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onDismissed() {
      //console.log("Close alert");
      this.$store.dispatch("clearError");
    },
    onSignup() {
      this.$store.dispatch("signUserup", {
        email: this.email,
        password: this.password
      });
    }
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
