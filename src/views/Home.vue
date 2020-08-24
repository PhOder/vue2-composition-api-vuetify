<template>
  <v-container class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="loggedIn">
      <v-text-field label="Hello" v-model="someTestData"></v-text-field>
      <Test />
      <Test :msg="someTestData" />
    </div>
    <div v-else>Please login first!</div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import Test from "@/components/Test.vue";
import useUser from "@/composables/useUser";

export default defineComponent({
  name: "Home",
  components: {
    Test,
  },
  setup() {
    const someTestData = ref("Helloworld");
    const { loggedIn } = useUser();
    return {
      someTestData,
      loggedIn,
    };
  },
});
</script>
