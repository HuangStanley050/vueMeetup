<template>
  <v-container>
    <v-row v-if="isLoading">
      <v-col xs="12" class="text-center">
        <v-progress-circular
          :width="7"
          :size="50"
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row wrap v-else>
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card>
          <v-card-title>
            <h5 class="info--text">{{ meetup.title }}</h5>
            <template v-if="userIsCreator"
              ><v-spacer> </v-spacer><MeetupEditModal :meetup="meetup" />
            </template>
          </v-card-title>
          <v-img :src="meetup.imageUrl" class="white--text" height="300px" />
          <v-card-text>
            <div class="success--text">
              {{ meetup.date }} {{ meetup.location }}
            </div>
            <div>
              <MeetupDateEditModal v-if="userIsCreator" :meetup="meetup" />
            </div>

            <div style="margin-top:20px">
              <MeetupTimeEditModal v-if="userIsCreator" :meetup="meetup" />
            </div>
            <div>
              {{ meetup.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer> </v-spacer>
            <RegisterModal :meetupId="meetup.id" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MeetupEditModal from "./edit/EditMeetUpModal.vue";
import MeetupDateEditModal from "./edit/EditMeetupDateModal.vue";
import MeetupTimeEditModal from "./edit/EditMeetUpTime.vue";
import RegisterModal from "./registration/RegisterModal.vue";
export default {
  props: ["id"],
  components: {
    MeetupEditModal,
    MeetupDateEditModal,
    MeetupTimeEditModal,
    RegisterModal
  },
  computed: {
    isLoading() {
      return this.$store.getters.loading;
    },
    userIsCreator() {
      if (!this.userIsAuthenticated) {
        return false;
      }
      return this.$store.getters.user.id === this.meetup.creatorId;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>
