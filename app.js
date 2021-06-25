const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter(){
      this.counter++
    },
    subtractCounter(){
      this.counter--
    }
  }
});

app.mount('#events');
