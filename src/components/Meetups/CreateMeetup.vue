<template>
  <v-container>
    <v-row wrap>
      <v-col xs="12" sm="6" offset-sm="3">
        <h3 class="primary--text">Create a new Meetup</h3>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col xs="12">
        <form @submit.prevent="onCreateMeetup">
          <v-row wrap>
            <v-col xs="12" sm="6" offset-sm="3">
              <v-text-field
                v-model="title"
                label="Title"
                id="title"
                name="title"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row wrap>
            <v-col xs="12" sm="6" offset-sm="3">
              <v-text-field
                v-model="location"
                label="Location"
                id="location"
                name="location"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row wrap>
            <v-col xs="12" sm="6" offset-sm="3">
              <v-text-field
                v-model="imageUrl"
                label="Image"
                id="imageUrl"
                name="imageUrl"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row wrap>
            <v-col xs="12" sm="6" offset-sm="3">
              <img :src="imageUrl" height="200" />
            </v-col>
          </v-row>
          <v-row wrap>
            <v-col xs="12" sm="6" offset-sm="3">
              <v-textarea
                v-model="description"
                label="Description"
                id="description"
                name="description"
                required
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs="12" sm="6" offset-sm="3">
              <v-btn type="submit" :disabled="!isFormValid" class="primary">
                Create Meetup
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    onCreateMeetup() {
      const meetupData = {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
        location: this.location,
        date: new Date()
      };
      this.$store.dispatch("createMeetup", meetupData);
    }
  },
  computed: {
    isFormValid() {
      return (
        this.title !== "" &&
        this.description !== "" &&
        this.imageUrl !== "" &&
        this.location !== ""
      );
    }
  },
  data() {
    return {
      title: "",
      description: "",
      imageUrl: "",
      location: ""
    };
  }
};
</script>
