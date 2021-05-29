import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectsArray: [
      {
        name: "Pizza By Any Other Name",
        languages: "HTML5, CSS3, SASS",
        description: "A mock website for an imaginary pizza restaurant, Pizza By Any Name. This project was created for an assignment at Innotech College, the objective was to practice and showcase my pure HTML and css abilities.",
        codeLink: "GITHUB LINK TBD",
        liveLink: "sweetpizzaheat.tk",
        image: "../assets/tweeter.png"
      },
      {
        name: "Tweeter",
        languages: "Vue.js",
        description: "A twitter clone. This project was created for an assignment at Innotech College, the objective was to interact with a CRUD api and to overcome the challenges that come with building a component based webiste. The current backend was provided by my instructor, but I will be creating my own version towards the end of the course.",
        codeLink: "GITHUB LINK TBD",
        liveLink: "https://tweeterburb.ml/#/welcome",
        image: "https://images.pexels.com/photos/8106310/pexels-photo-8106310.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
      },
      {
        name: "Radioactive Kaiju battle",
        languages: "JavaScript, JSCookies, HTML5, CSS3",
        description: "A basic pokemon style battle game, created for a hackathon at Innotech College. THis ",
        codeLink: "GITHUB LINK TBD",
        liveLink: "sweetpizzaheat.tk",
        image: "../assets/kaiju.jpg"
      },
      
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})
