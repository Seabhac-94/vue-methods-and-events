const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    submitForm() {
      alert('Submitted')
    },
    confirmInput() {
      this.confirmedName = this.name
    },
    setName(event, secondName) {
      this.name = event.target.value + ' ' + secondName
    },
    addCounter(num) {
      this.counter = this.counter + num
    },
    subtractCounter(num) {
      this.counter = this.counter - num
    }
  }
});

app.mount('#events');