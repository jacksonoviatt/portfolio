<template>
  <div id="animation">
    <div class="container">
      <!-- <div class="yLine"></div>
      <div class="pLine"></div>
      <div class="grDot"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "background-animation",
  methods: {
      
  },
};
</script>

<style lang="scss" scoped>
#animation {
    z-index: -5;
    width: 100%;
    height: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    .container {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        place-items: center;
    }
}
.yLine {
  width: 70px;
  height: 4px;
  background: #ddab4c9a;
  align-self: right;
  position: absolute;
  margin-top: 30px;
  right: 0;
  transition: all infinite 10s;
}
.pLine {
  position: absolute;
  margin-top: 70px;
  left: 0;
  width: 70px;
  height: 4px;
  border-radius: 50px;
  background: #FAA6B29a;
  align-self: right;
}
</style>