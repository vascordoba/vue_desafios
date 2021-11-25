<template>
  <b-container fluid id="app">
    <products-table :products="items" />
  </b-container>
</template>

<script>
import ProductsTable from "./components/ProductsTable.vue";
export default {
  name: "App",
  components: { ProductsTable },
  data() {
    return {
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
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
