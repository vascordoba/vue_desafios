Vue.component("prods-table", {
  props: { products: { type: Array, default: [] } },
  template: `<div class="row">
              <div class="col">
                <h3>Products available</h3>
                <table class="table table-bordered table-striped">
                  <thead>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>OS</th>
                  </thead>
                  <tbody>
                    <prods-row v-for="(prod,i) in products" :key="i" :id="prod.id" :brand="prod.brand" :name="prod.name" :os="prod.details['OS Version']"/>
                  </tbody>
                </table>
              </div>
            </div>
            `,
});

Vue.component("prods-row", {
  props: {
    id: { type: Number, default: null },
    brand: { type: String, default: "" },
    name: { type: String, default: "" },
    os: { type: String, default: "" },
  },
  template: `<tr>
      <td>{{id}}</td>
      <td>{{brand}}</td>
      <td>{{name}}</td>
      <td><i :class="icon"></i> {{os}}</td>
    </tr>`,
  computed: {
    icon() {
      if (this.os.includes("Android")) return "fab fa-android text-success";
      return "fab fa-apple";
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        id: 1,
        name: "iPhone SE",
        brand: "Apple",
        price: 699.0,
        stock: 10,
        img: "apple_iphoneSE.jpg",
        details: {
          "Screen size": '5.5"',
          Storage: "64 GB",
          "OS Version": "iOS 14",
          Wieght: "240 grs",
          Height: "160mm",
          Width: "74mm",
          Depth: "7mm",
        },
        category: 1,
      },
      {
        id: 8,
        name: "P30 Pro",
        brand: "Huawei",
        price: 699.0,
        stock: 10,
        img: "huawei_p30pro.webp",
        details: {
          "Screen size": '5.5"',
          Storage: "64 GB",
          "OS Version": "Android 11",
          Wieght: "240 grs",
          Height: "160mm",
          Width: "74mm",
          Depth: "7mm",
        },
        category: 1,
      },
      {
        id: 15,
        name: "Z3",
        brand: "Motorola",
        price: 699.0,
        stock: 10,
        img: "motorola_z3.webp",
        details: {
          "Screen size": '5.5"',
          Storage: "64 GB",
          "OS Version": "Android 11",
          Wieght: "240 grs",
          Height: "160mm",
          Width: "74mm",
          Depth: "7mm",
        },
        category: 1,
      },
    ],
  },
});
