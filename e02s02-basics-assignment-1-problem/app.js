const app = Vue.createApp({
  data() {
    return {
      name: "Francesco",
      age: 32,
      imgUrl: 'https://www.focus.it/images/2021/02/22/gatto_1020x680.jpg'
    };
  },
  methods: {
    randomNum() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
