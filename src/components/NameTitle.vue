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
// @media screen and (max-width: 600px) 
h1 {
  font-size: 40px;
  font-weight: normal;
}
.nameLine {
  width: 240px;
  height: 3px;
  margin: 3px;
  margin-top: -10px;
}
#lineOne {
  background: #93B5C6;
  margin-left: -5px;
}
#lineTwo {
  background: #faa6b2;
  margin-right: -5px;
  margin-top: 1px;
}
#name_title {
  // height: 100px;
  width: 100%;
  display: grid;
  place-items: center;
  // position: absolute;
  // top: 100px;
  // right: 10px;
}

@media screen and (min-width: 600px) {

}
@media screen and (min-width: 1000px) {
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

    margin-left: -5px;
  }
  #lineTwo {
 
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
}
</style>