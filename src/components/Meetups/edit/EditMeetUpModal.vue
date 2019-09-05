<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">
          <v-icon>
            mdi-linux
          </v-icon>
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-container>
          <v-row wrap>
            <v-col xs="12">
              <v-card-title>
                Edit Meetup
              </v-card-title>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row wrap>
            <v-col xs="12">
              <v-card-text>
                <v-text-field
                  label="Title"
                  v-model="editedTitle"
                  id="title"
                  name="title"
                  required
                ></v-text-field>
                <v-textarea
                  label="Description"
                  id="description"
                  v-model="editedDescription"
                  name="description"
                  required
                ></v-textarea>
              </v-card-text>
            </v-col>
          </v-row>
          <v-divider> </v-divider>

          <v-row>
            <v-col xs="12">
              <v-card-actions>
                <v-btn text color="blue">Accept Changes</v-btn>
                <v-btn outlined color="red">Cancel Changes</v-btn>
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
  props: ["meetup"],
  data() {
    return {
      dialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    };
  }
};
</script>
