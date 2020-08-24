<template>
  <v-app id="app">
    <v-app-bar app id="nav">
      <v-toolbar-title>App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch hide-details="auto" v-model="$vuetify.theme.dark" label="Dark"
        >Test</v-switch
      >
      <v-btn class="ml-2" text to="/">Home</v-btn>
      <v-btn class="ml-2" text to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const dark = ref(false);
    return {
      dark,
    };
  },
});
</script>

<style lang="scss"></style>
