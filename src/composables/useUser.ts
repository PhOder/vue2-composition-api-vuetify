import { ref } from "@vue/composition-api";

export default function() {
  // if 'loggedIn' is scoped inside the function, each call to useUser() creates a new 'ref'
  const loggedIn = ref(false);
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
