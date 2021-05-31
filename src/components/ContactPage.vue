<template>
  <div>
    <!-- <img
      id="forayImg"
      src="../assets/foray.jpeg"
      alt="a photo of Ramona in a field"
    /> -->
    <div>
      <h2>Contact Me!</h2>
      <img src="../assets/dog.jpg" alt="Ramona with her dog">
      <a href="https://github.com/jacksonoviatt">Visit my GitHub</a>
      <a href="../assets/ramona_oviatt_resume.png" download>Download Resume</a>
      <a href="https://ca.linkedin.com/in/ramona-oviatt">LinkedIn</a>
      <h3>
        Please <a href="mailto:jackson.oviatt1@gmail.com">email</a> me with any
        inquiries
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-page",
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  border-radius: 50%;
}
div {
  height: 300px;
  display: grid;
  gap: 15px;
  width: 100%;
  place-items: center;
}
a {
  font-weight: bold;
  &:nth-child(2) {
    color: #faa6b2;
  }
  &:nth-child(4) {
    color: #91a666;
  }
  &:nth-child(3) {
    color: #93b5c6;
  }
  &:nth-child(1) {
    color: #faa6b2;
  }
}
</style>