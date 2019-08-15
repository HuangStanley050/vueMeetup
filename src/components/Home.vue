<template>
  <v-container>
    <v-row wrap>
      <v-col xs="12" sm="6" class="text-sm-right">
        <v-btn color="primary" router to="/meetups" large>
          Explore Meetups
        </v-btn>
      </v-col>
      <v-col xs="12" sm="6">
        <v-btn
          color="primary"
          class="text-sm-left"
          router
          to="/meetup/new"
          large
        >
          Organize Meetups
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
