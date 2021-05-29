<template>
  <div class="projects">
    <nav-bar></nav-bar>
    <name-title></name-title>
    <div class="projectsContainer">
      <div v-for="object in storeProjectArray" :key="object.string">
        <project-div
          :name="object.name"
          :languages="object.languages"
          :description="object.description"
          :codeLink="object.codeLink"
          :liveLink="object.liveLink"
          :image="object.image"
        ></project-div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import NameTitle from "../components/NameTitle.vue";
import ProjectDiv from "../components/ProjectDiv.vue";
// @ is an alias to /src

export default {
  name: "Projects",
  components: { NavBar, NameTitle, ProjectDiv },
  computed: {
    storeProjectArray() {
      return this.$store.state.projectsArray;
    },
  },
};
</script>
<style lang="scss" scoped>
.projectsContainer {
  width: 90%;
  margin: 5%;
  display: grid;
  place-items: center;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>