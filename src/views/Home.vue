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
<page-footer></page-footer>
  </div>
</template>

<script>


import NameTitle from "../components/NameTitle.vue";
import NavBar from "../components/NavBar.vue";
import PageFooter from '../components/PageFooter.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { NavBar, NameTitle, PageFooter},
  name: "Home",
  mounted() {
    this.rolling();
  },
  methods: {
    fullStack: function () {
      document.getElementById("fullstack").style.left = "60px";
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
img {
  border: solid #91A666 3px;
  /* width: 70vw; */
  position: absolute;

  /* right: 10vw; */
}

@media screen and (max-width: 760px) {
  img {
    width: 70vw;
    top: 530px;
    margin: 40px 15vw;
    
  }
}
#fullstack {
  transition: all 0.5s ease-in;
  position: absolute;
  /* top: 2; */
  margin-top: 50px;
  left: -600px;
}
h4 {
  opacity: 0;
  transition: all 0.5s;
  font-size: 18px;
  font-weight: normal;
  margin: 20px 0;
  margin-left: 50px;
}
h2 {
  font-size: 20px;
  color: #91a666;
}
.line {
  height: 3px;
  margin-bottom: 40px;
  background: #faa6b2;
  width: 250px;
}

@media screen and (min-width: 760px) {
  img {
    height: 300px;

    position: absolute;
    top: 280px;
    right: 50px;
  }

  h2 {
    font-size: 34px;
  }
  h2 {
    font-size: 28px;
  }
}

@media screen and (min-width: 1000px) {
  img {
    top: 250px;
    right: 100px;
  }
  h2 {
    font-size: 40px;
  }
  .line {
    width: 560px;
  }

  h4 {
    margin-left: 60px;
    font-size: 30px;
    margin: 30px 0;
    margin-left: 50px;
  }
}
@media screen and (min-width: 1200px) {
  img {
    right: 160px;
  }
}
</style>