<template>
  <v-container>
    <v-row wrap>
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card>
          <v-card-title>
            <h5 class="info--text">{{ meetup.title }}</h5>
          </v-card-title>
          <v-img :src="meetup.imageUrl" class="white--text" height="300px" />
          <v-card-text>
            <div class="success--text">
              {{ meetup.date }}
            </div>
            <div>
              Bresaola bacon picanha porchetta spare ribs. Turkey spare ribs
              leberkas bacon, sausage shankle pork loin ground round burgdoggen
              ball tip pork chop cupim jerky ribeye tongue. Sirloin tongue
              frankfurter shank, bresaola meatloaf alcatra pork swine beef ribs
              tail. Ribeye pork chop doner, spare ribs tail ham beef pork loin
              drumstick swine corned beef shoulder burgdoggen tri-tip
              landjaeger. Tongue pastrami meatloaf, buffalo flank brisket
              meatball t-bone alcatra burgdoggen swine shank. Boudin frankfurter
              pig shankle shoulder tri-tip rump shank sirloin meatloaf jerky
              strip steak porchetta.
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
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>
