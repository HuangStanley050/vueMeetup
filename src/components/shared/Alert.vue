<template>
  <v-alert
    @input="onClose"
    border="left"
    close-text="Close Alert"
    color="red"
    dark
    dismissible
    >{{ text }}</v-alert
  >
</template>
<script>
export default {
  props: ["text"],
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>
