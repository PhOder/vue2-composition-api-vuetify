<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ someTestData }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  setup() {
    const someTestData = ref("Helloworld");
    return {
      someTestData,
    };
  },
});
</script>
