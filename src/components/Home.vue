<template>
  <v-container>
    <v-row wrap class="mb-2">
      <v-col xs="12" sm="6" class="text-xs-center text-sm-right">
        <v-btn color="primary" router to="/meetups" large>
          Explore Meetups
        </v-btn>
      </v-col>
      <v-col xs="12" sm="6">
        <v-btn
          color="primary"
          class="text-sm-left text-xs-center"
          router
          to="/meetup/new"
          large
        >
          Organize Meetups
        </v-btn>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col xs="12">
        <v-carousel>
          <v-carousel-item
            v-for="meetUp in meetUps"
            :key="meetUp.id"
            :src="meetUp.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ><div class="title">
              <h3>{{ meetUp.title }}</h3>
            </div></v-carousel-item
          >
        </v-carousel>
      </v-col>
    </v-row>
    <v-row wrap class="mt-2">
      <v-col xs="12">
        <p class="text-center">
          Join our meetups
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      meetUps: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          id: "aad",
          title: "PlaceHolder"
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1563244673-bee4f49ba850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
          id: "acd",
          title: "PlaceHolder2"
        }
      ]
    };
  }
};
</script>
<style scoped>
.title {
  position: absolute;

  bottom: 50px;

  color: white;
  font-size: 2rem;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
