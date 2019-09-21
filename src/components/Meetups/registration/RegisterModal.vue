<template>
  <div>
    <v-dialog v-model="dialogue" width="50%">
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-2" dark v-on="on">
          {{ showButton }}
        </v-btn>
      </template>
      <v-card>
        <v-container>
          <v-row wrap>
            <v-col xs="12">
              <v-card-title v-if="userIsRegistered">
                Unregister from Meetup?
              </v-card-title>
              <v-card-title v-else>
                Register for Meetup?
              </v-card-title>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row wrap>
            <v-col xs="12">
              <v-card-text>
                You can always change your decision later
              </v-card-text>
            </v-col>
          </v-row>
          <v-row wrap>
            <v-col xs="12">
              <v-card-actions>
                <v-btn class="red--text darken-1" @click="dialogue = false">
                  Cancel
                </v-btn>
                <v-btn class="green--text darken-1" @click="onAgree">
                  Confirm
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ["meetupId"],
  methods: {
    onAgree() {
      if (this.userIsRegistered) {
        this.$store.dispatch("unregisterUserMeetup", this.meetupId);
        this.dialogue = false;
      } else {
        this.$store.dispatch("registerUserMeetup", this.meetupId);
        this.dialogue = false;
      }
    }
  },
  computed: {
    showButton() {
      if (this.userIsRegistered) {
        return "Unregister";
      } else return "Register";
    },
    userIsRegistered() {
      return (
        this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
          return this.meetupId === meetupId;
        }) >= 0
      );
    }
  },
  data() {
    return {
      dialogue: false
    };
  }
};
</script>
