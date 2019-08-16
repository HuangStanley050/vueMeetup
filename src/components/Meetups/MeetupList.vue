<template>
  <v-container>
    <v-row wrap :key="meetup.id" v-for="meetup in meetups" class="mb-2">
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card class="info">
          <v-container fluid>
            <v-row>
              <v-col xs="5" sm="4" md="3">
                <v-img
                  :src="meetup.imageUrl"
                  class="white--text"
                  height="200px"
                />
              </v-col>
              <v-col xs="7" sm="8" md="9">
                <v-card-title primary-title>
                  <div>
                    <h4 class="white--text mb-0">
                      {{ meetup.title }}
                    </h4>
                    <div>
                      {{ meetup.date }}
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn :to="`/meetups/${meetup.id}`">
                    <v-icon left> mdi-map-marker </v-icon>View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  }
};
</script>
