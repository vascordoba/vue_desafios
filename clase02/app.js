var app = new Vue({
  el: "#app",
  data: {
    res: 0,
    clicks: 0,
  },
  methods: {
    add() {
      this.res += 1;
      this.clicks += 1;
    },
    sub() {
      this.clicks += 1;
      if (this.res > 0) this.res -= 1;
    },
  },
  computed: {
    potencia() {
      return this.res * this.res;
    },
  },
});
