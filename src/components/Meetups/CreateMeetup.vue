<template>
  <v-container>
    <v-row wrap>
      <v-col xs="12" sm="6" offset-sm="3">
        <h3 class="primary--text">Create a new Meetup</h3>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col xs="12">
        <form>
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
                v-mdoel="location"
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
              <img :src="imageUrl" />
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
              <v-btn class="primary">
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
