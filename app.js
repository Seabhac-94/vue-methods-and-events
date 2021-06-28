const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods: {
    setName(event, secondName){
      this.name = event.target.value + ' ' + secondName
    },
    addCounter(num){
      this.counter = this.counter + num
    },
    subtractCounter(num){
      this.counter = this.counter - num
    }
  }
});

app.mount('#events');
