<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-container>
          <v-row wrap>
            <v-col xs="12">
              <v-card-title>
                Edit Meetup Date/Time
              </v-card-title>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row wrap>
            <v-col xs="12">
              <v-date-picker v-model="editableDate" style="width:100%" actions>
                <template scope="{save,cancel}">
                  <v-btn
                    flat
                    class="blue--text darken-1"
                    @click="onSaveChanges"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    flat
                    class="blue--text darken-1"
                    @click="dialgo = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-date-picker>
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
    this.editableDate = new Date(this.meetup.date);
  },
  methods: {
    onSaveChanges() {
      const newDate = new Date(this.meetup.date);
      const newDay = new Date(this.editableDate).getUTCDate();
      const newMonth = new Date(this.editableDate).getUTCMonth();
      const newYear = new Date(this.editableDate).getUTCFullYear();
      newDate.setUTCDay(newDay);
      newDate.setUTCMonth(newMonth);
      newDate.setUTCFullYear(newYear);
      this.$store.dispatch("updateMeetup", {
        id: this.meetup.id,
        date: newDate
      });
    }
  },
  data() {
    return {
      editableDate: null,
      dialogue: false
    };
  }
};
</script>
