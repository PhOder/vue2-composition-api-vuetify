<template>
  <v-app id="app">
    <v-app-bar app id="nav">
      <v-toolbar-title>App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss"></style>
