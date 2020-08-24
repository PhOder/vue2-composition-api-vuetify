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
      <v-btn v-if="!loggedIn" class="ml-2" text @click="login">Login</v-btn>
      <v-btn v-if="loggedIn" class="ml-2" text @click="logout">Logout</v-btn>
      {{ loggedIn }}
      {{ loggedIn2 }}
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import useUser from "@/composables/useUser";

export default defineComponent({
  setup() {
    const dark = ref(false);

    const { loggedIn, login, logout } = useUser();
    const { loggedIn: loggedIn2 } = useUser();

    return {
      dark,
      loggedIn,
      loggedIn2,
      login,
      logout,
    };
  },
});
</script>

<style lang="scss"></style>
