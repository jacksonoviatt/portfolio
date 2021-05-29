<template>
  <div class="projectDiv">
    <h3 @click="check">{{ name }}</h3>
    <img class="projectImg" :src="imageSrc" :alt="imgAlt">
    <div class="links">
      <a :href="liveLink">Go to site</a> |
      <a :href="codeLink">View code</a>
    </div>
    <div class="line"></div>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgAlt: `a screen grab from ${this.name}`,
            imageSrc: this.image
        }
    },
    methods: {
        check() {
            console.log(this.image);
        }
    },
  props: {
    name: String,
    languages: String,
    description: String,
    codeLink: String,
    liveLink: String,
    image: String
  },
};
</script>

<style lang="scss" scoped>
h3 {
    padding-top: 15px;
}
.projectDiv {
  width: 300px;
  height: 480px;
  border: 2px solid #5b5f97;
  display: grid;
  place-items: center;
}
.projectImg {
  width: 80%;
  min-height: 136.83px;
  margin: 10%;
  margin-bottom: 15%;
  box-shadow: #5b5f97 2px 2px 2px;
}
.line {
    width: 100%;
    height: 1px;
    margin: 30px 0;
    background: #5b5f97;
}
p {
    font-size: 14px;
    height: 150px;
    padding: 5px;
    padding-top: 0;
    text-align: center;
}
</style>