<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
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
                    <v-btn type="submit">
                      Login
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
    onSignin() {
      this.$store.dispatch("signUserin", {
        email: this.email,
        password: this.password
      });
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
