<template>
  <div class="navbar">
    <div class="fafaBars" @click="openNav">
      <div class="fafaBar"></div>
      <div class="fafaBar"></div>
      <div class="fafaBar"></div>
    </div>
    <nav id="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  methods: {
    openNav() {
      console.log("frogs");
      // document.getElementById('navigation').style.opacity = "1";
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
 nav {
   height: 80px;
   width: 100%;
 }
}
@media screen and (min-width: 600px) {
  nav {
    width: 50%;
    padding: 0 3vw;
    height: 140px;
  }
}
@media screen and (min-width: 1000px) {
 nav {
    width: 40%;
    padding: 0 3vw;
    margin-top: 20px;
    font-size: 18px;
    // height: 140px;
  }
}

nav {
  
  
  // height: 140px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  
}
a {
  font-size: 18px;
  font-weight: bold;
  color: #637246;
  &.router-link-exact-active {
    color: #D5515E;
  }
  
}

</style>