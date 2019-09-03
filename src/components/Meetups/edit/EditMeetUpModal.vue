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
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
