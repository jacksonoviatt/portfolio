<template>
  <div id="name_title">
    <h1>Ramona O</h1>
    <div id="lineOne" class="nameLine"></div>
    <div id="lineTwo" class="nameLine"></div>
  </div>
</template>

<script>
export default {
//   name: "name-title",
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 70px;
    font-weight: normal;

}
.nameLine {
  width: 450px;
  height: 3px;
  margin: 3px;
  margin-top: -10px;
}
#lineOne {
  background: #DDAB4C;
  margin-left: -5px;
}
#lineTwo {
  background: #FAA6B2;
  margin-right: -5px;
  margin-top: 1px;
}
#name_title {
    height: 100px;
    width: 500px;
    display: grid;
    place-items: center;
    position: absolute;
    top: 30px;
    right: 60px;

}
</style>