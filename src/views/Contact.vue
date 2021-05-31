<template>
  <div class="contact">
    <nav-bar></nav-bar>
    <name-title></name-title>
    <contact-page></contact-page>
    <page-footer></page-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '../components/NavBar.vue'
import NameTitle from '../components/NameTitle.vue'
import ContactPage from '../components/ContactPage.vue'
import PageFooter from '../components/PageFooter.vue'
export default {
  name: 'Contact',
  components: {
      NavBar,
      NameTitle,
    ContactPage,
    PageFooter
  }
}
</script>

