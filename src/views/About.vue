<template>
  <div class="about">
    <nav-bar></nav-bar>
    <name-title></name-title>
<section>
    <div class="paragraph">
      <h2>About Me</h2>
      <p>
        Hello! My name is Ramona and I’m a developer based out of Edmonton, Canada. I love creating beautiful front-end and stable back-end work with a special eye towards aesthetic and visual design. I pride myself on the ability to fine-tune my work down to the last pixel and always try to exceed expectations. I am both personable and capable and love diving into new situations, concepts, and projects with both feet. 
      </p>
      <img
        class="cat"
        src="../assets/foray.jpeg"
        alt="a photo of Ramona in a field"
      />
      <p>
        Pursuing a certification in development through InnoTech has been rewarding and exciting. I am always eager to learn more and engage with others as I expand my abilities, aptitudes, and strengths. My father was a web developer and raised me around code and technology, so I am thrilled to be starting my professional career and following in his footsteps. I want to use my talents to make a difference and improve the world around me.
      </p>
      <p>
        I currently live with my partner Harley, my rescue dog Tuco, and my one-eared cat Duck. In my spare time, I enjoy studying paleontology and natural history. I also like to forage for mushrooms and local flora.
      </p>
    </div>
    <div id="skillContainer">
      <h2>Technical Skills</h2>
      <ul>
        <li>Javascript</li>
        <li>Vue.js</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>Sass</li>
        <li>Git/Github</li>
        <li>Apache</li>
        <li>API/AJAX Experience</li>
        <li>Google Cloud Platform</li>
        <li>Dbeaver</li>
        <li>Python</li>
        <li>SQL</li>
        <li>Cookies</li>
        <li>JSON</li>
        <li>MariaDB</li>
        <li>Bash/CLI</li>
      </ul>
    </div>
</section>
    <page-footer></page-footer>
  </div>
</template>

<script>
import NameTitle from "../components/NameTitle.vue";

import NavBar from "../components/NavBar.vue";
import PageFooter from "../components/PageFooter.vue";
export default {
  name: "About",
  components: {
    NavBar,
    NameTitle,
    PageFooter,
  },
};
</script>
<style sass scoped>
@media screen and (max-width: 600px) {
  .cat {
    float: none;
    position: absolute;

    top: 570px;
  }
  #skillContainer {
    position: absolute;
    top: 900px;
  }
  ul {
    /* width: 90vw; */
    /* left: 5vw; */
    /* margin: 0px; */
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(30px, 50%));
  }
}
@media screen and (max-width: 500px) {
  .cat {
    top: 660px;

    width: 70vw;
  }

  #skillContainer {
    top: 1000px;
  }
}
@media screen and (max-width: 360px) {
  .cat {
    top: 740px;
  }
  #skillContainer {
    top: 1000px;
  }
}
@media screen and (max-width: 300px) {
  .cat {
    top: 880px;
  }
  ul {
    top: 1300px;
  }
}
section {
  max-width: 1000px;
}
#skillContainer {
  display: grid;
  width: 100%;
  place-items: center;
  padding-bottom: 200px;
}
ul {
  max-width: 800px;
  width: 70vw;
  border: #faa6b2 2px solid;
  padding: 20px;
  display: grid;
  margin-top: 20px;
  place-items: center;
}
li {
  margin: 20px;
}
.paragraph {
  margin: 30px;
}
p {
  margin: 10px 0px;
}
.cat {
  position: absolute;
  right: 15vw;
  width: 70vw;
  border: solid #91a666 3px;
  box-shadow: 1px 1px 2px #faa6b2, -1px -1px 2px #faa6b2;
  /* margin: 0 15vw; */
}
h2 {
  color: #91a666;
  font-size: 40px;

}
@media screen and (min-width: 600px) {

  .cat {
    width: 250px;
    margin: 0px 0px 10px 20px;
    float: right;
    position: inherit;
  }
  ul {
    grid-template-columns: repeat(auto-fit, minmax(60px, 20%));
  }
  p {
    margin: 10px 0;
  }
  @media screen and (min-width: 1000px) {
    section {
      display: grid;
      place-items: center;
    }
  }
}
</style>
    