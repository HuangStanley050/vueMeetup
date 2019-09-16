<template>
  <div>
    <v-dialog v-model="dialogue" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-2" dark v-on="on">
          Edit Time
        </v-btn>
      </template>
      <v-card>
        <v-container>
          <v-row wrap>
            <v-col xs="12">
              <v-card-title>
                Edit Meetup Time
              </v-card-title>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row wrap>
            <v-col xs="12">
              <v-time-picker
                format="24hr"
                v-model="editableTime"
                style="width:100%"
                actions
              >
                <template>
                  <v-btn class="blue--text darken-1" @click="onSaveChanges">
                    Save
                  </v-btn>
                  <v-btn class="blue--text darken-1" @click="dialogue = false">
                    Close
                  </v-btn>
                </template>
              </v-time-picker>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ["meetup"],
  created() {
    this.editableTime = new Date(this.meetup.date);
  },
  methods: {
    onSaveChanges() {
      const newDate = new Date(this.meetup.date).toISOString().substr(0, 10);

      this.$store.dispatch("updateMeetup", {
        id: this.meetup.id,
        date: newDate + " " + this.editableTime
      });
    }
  },
  data() {
    return {
      editableTime: null,
      dialogue: false
    };
  }
};
</script>
