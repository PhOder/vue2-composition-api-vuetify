<template>
  <v-container class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <v-text-field label="Hello" v-model="someTestData"></v-text-field>
      <Test />
      <Test msg="Helloworld" />
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import Test from "@/components/Test.vue";

export default defineComponent({
  name: "Home",
  components: {
    Test,
  },
  setup() {
    const someTestData = ref("Helloworld");
    return {
      someTestData,
    };
  },
});
</script>
