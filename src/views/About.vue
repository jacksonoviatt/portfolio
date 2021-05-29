<template>
  <div class="about">
    <nav-bar></nav-bar>
    <name-title></name-title>
  </div>
</template>

<script>
import NameTitle from "../components/NameTitle.vue";

import NavBar from "../components/NavBar.vue";
export default {
  name: "About",
  components: {
    NavBar,
    NameTitle,
  },
};
</script>
    