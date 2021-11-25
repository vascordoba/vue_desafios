<template>
  <b-row>
    <b-col>
      <h3>Products available</h3>
      <table class="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>Brand</th>
          <th>Name</th>
          <th>OS</th>
        </thead>
        <tbody>
          <product-row
            v-for="(prod, i) in products"
            :key="i"
            :id="prod.id"
            :brand="prod.brand"
            :name="prod.name"
            :os="prod.details['OS Version']"
          />
        </tbody>
      </table>
    </b-col>
  </b-row>
</template>

<script>
import ProductRow from "./ProductRow.vue";

export default {
  components: { ProductRow },
  props: { products: { type: Array, default: null } },
};
</script>

<style>
</style>