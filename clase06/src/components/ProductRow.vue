<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ brand }}</td>
    <td>{{ name }}</td>
    <td><i :class="icon" /> {{ os }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: null },
    brand: { type: String, default: "" },
    name: { type: String, default: "" },
    os: { type: String, default: "" },
  },
  computed: {
    icon() {
      if (this.os.includes("Android")) return "fab fa-android text-success";
      return "fab fa-apple";
    },
  },
};
</script>

<style>
</style>