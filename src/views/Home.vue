<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <input type="text" v-model="someTestData" />
      <div>{{ someTestData }}</div>
    </div>
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
