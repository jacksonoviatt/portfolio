<template>
  <div class="contact">
    <nav-bar></nav-bar>
    <name-title></name-title>
    
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '../components/NavBar.vue'
import NameTitle from '../components/NameTitle.vue'
export default {
  name: 'Contact',
  components: {
      NavBar,
      NameTitle
  }
}
</script>