<template>
  <div class="home">
    <nav-bar></nav-bar>
    <name-title></name-title>
    <img src="../assets/home.jpeg" alt="a photo of Ramona" />
    <div id="fullstack">
      <h2>Full Stack Web Developer</h2>
      <div class="line"></div>
      <h4 id="meticulous">Meticulous</h4>
      <h4 id="joyful">Joyful deameanor</h4>
      <h4 id="eager">Eager to learn more</h4>
      <h4 id="aesthetic">Aesthetically inclined</h4>
      
    </div>
    <h4></h4>
    <h4 id="keyword"></h4>
    <falling-flowers></falling-flowers>
  </div>
</template>

<script>
import FallingFlowers from '../components/FallingFlowers.vue';
import NameTitle from "../components/NameTitle.vue";
import NavBar from "../components/NavBar.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { NavBar, NameTitle, FallingFlowers },
  name: "Home",
  mounted() {
    this.rolling();
  },
  methods: {
    fullStack: function () {
      document.getElementById("fullstack").style.left = "130px";
    },
    meticulous: function () {
      document.getElementById("meticulous").style.opacity = "1";
    },
    joyful: function () {
      document.getElementById("joyful").style.opacity = "1";
    },
    eager: function () {
      document.getElementById("eager").style.opacity = "1";
    },
    aesthetic: function () {
      document.getElementById("aesthetic").style.opacity = "1";
    },

    rolling: function () {
      setTimeout(this.fullStack, 100);
      setTimeout(this.meticulous, 1300);
      setTimeout(this.joyful, 2000);
      setTimeout(this.eager, 2800);
      setTimeout(this.aesthetic, 3600);
    },
  },
};
</script>
<style scoped>
name-title {
  position: absolute;
  top: 900px;
}
img {
  height: 400px;
  border: solid #91A666dd 3px;
  box-shadow: 1px 1px 2px #50808E, -1px -1px 2px #50808E;
  position: absolute;
  top: 250px;
  right: 160px;
}
#fullstack {
  position: absolute;
  top: 220px;
  left: -600px;
  transition: all 0.5s ease-in;
}
h2 {
  color: #91A666;
  /* font-weight: normal; */
  font-size: 40px;
  
}
h4 {
  opacity: 0;
  transition: all 0.5s;
  margin-left: 60px;
  font-size: 30px;
  font-weight: normal;
  margin: 30px 0;
  margin-left: 50px;
}
.line {
    width: 560px;
  height: 3px;
  margin-bottom: 40px;
  background: #FAA6B2 ;
}
</style>