<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text>
            <v-container>
              <form @click.prevent="onSignup">
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
                    <v-btn type="submit">
                      Sign Up
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
    comparePassword() {
      return this.password !== this.confirmPassword
        ? "Passwords don't match"
        : true;
    }
  },
  methods: {
    onSignup() {
      //vuex with axios
      console.log({
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
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
