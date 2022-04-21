const app = Vue.createApp({
  data() {
    return {
      name: "Francesco",
      age: 32,
      imageUrl: "https://www.focus.it/images/2021/02/22/gatto_1020x680.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randomNum() {
      return Math.random();ß
    },
  },
});

app.mount("#assignment");
