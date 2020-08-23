<template>
  <div>
    <v-card>
      <v-card-title>Testtitle</v-card-title>
      <v-card-text>
        <span>This will be the content of our Testcomponent</span>
        <p>Display prop {{ msg }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Test",
  props: {
    msg: {
      type: String,
      default: "42",
    },
  },
});
</script>

<style></style>
