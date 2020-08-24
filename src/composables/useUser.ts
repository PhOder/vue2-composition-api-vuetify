// this is needed because of vue/composition-api limitations and will not be necessary with vue3
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

import { ref } from "@vue/composition-api";

// put loggedIn outside of function so as to not create a new 'ref' each time useUser() is called
// loggedIn will be shared state betweeen each place using the useUser composable
const loggedIn = ref(false);

export default function() {
  function login() {
    loggedIn.value = true;
  }
  function logout() {
    loggedIn.value = false;
  }

  return {
    loggedIn,
    login,
    logout,
  };
}
