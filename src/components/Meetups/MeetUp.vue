<template>
  <v-container>
    <v-row wrap>
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card>
          <v-card-title>
            <h5 class="info--text">{{ meetup.title }}</h5>
            <template
              ><v-spacer> </v-spacer><MeetupEditModal />
            </template>
          </v-card-title>
          <v-img :src="meetup.imageUrl" class="white--text" height="300px" />
          <v-card-text>
            <div class="success--text">
              {{ meetup.date }} {{ meetup.location }}
            </div>
            <div>
              {{ meetup.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer> </v-spacer>
            <v-btn class="primary">
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MeetupEditModal from "./edit/EditMeetUpModal.vue";
export default {
  props: ["id"],
  components: {
    MeetupEditModal
  },
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>
