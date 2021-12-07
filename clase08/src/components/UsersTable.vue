<template>
  <table class="table table-bordered table-striped">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Country</th>
    </tr>
    <tr v-for="(user, k) in users" :key="k" :inner-html.prop="user | userrow" />
  </table>
</template>

<script>
export default {
  props: {
    countries: { type: Array, default: null },
    genders: { type: Array, default: null },
    users: { type: Array, default: null },
  },
  filters: {
    userrow: (value) => {
      return (
        "<td>" +
        value.name +
        "</td>" +
        "<td><a href='mailto:" +
        value.email +
        "'>" +
        value.email +
        "</a></td>" +
        "<td>" +
        value.gender +
        "</td>" +
        "<td>" +
        value.country +
        "</td>"
      );
    },
  },
};
</script>

<style>
</style>