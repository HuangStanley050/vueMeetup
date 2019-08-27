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
              <!-- <v-text-field
                v-model="imageUrl"
                label="Image"
                id="imageUrl"
                name="imageUrl"
                required
              ></v-text-field> -->
              <v-file-input
                @change="onFileChange"
                v-model="file"
                label="File input"
              ></v-file-input>
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
            <v-col x="12" sm="6" offset-sm="3">
              <h4>Choose a date and time</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mb-2" x="12" sm="6" offset-sm="3">
              <v-date-picker v-model="date"> </v-date-picker>
              <p>
                {{ date }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col x="12" sm="6" offset-sm="3">
              <v-time-picker v-model="time"> </v-time-picker>
              <p>
                {{ time }}
              </p>
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
    onFileChange() {
      //console.log("file changed");
      const file = this.file;
      //console.log(this.file);
      //console.log(file);
      this.imageUrl = URL.createObjectURL(file);
    },
    onCreateMeetup() {
      if (!this.isFormValid) {
        return;
      }

      const meetupData = {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
        location: this.location,
        date: this.date + " " + this.time
      };
      //console.log(this.date, this.time);
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
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
      date: new Date().toISOString().substr(0, 10),
      time: new Date(),
      title: "",
      description: "",
      imageUrl: "",
      location: "",
      file: null
    };
  }
};
</script>
