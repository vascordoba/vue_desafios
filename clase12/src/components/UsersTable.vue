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
import { mapGetters } from "vuex";

export default {
  props: {
    countries: { type: Array, default: null },
    genders: { type: Array, default: null },
  },
  computed: {
    ...mapGetters({ users: "getUsers" }),
  },
  filters: {
    userrow: (value) => {
      let row =
        "<td>" +
        value.name +
        "</td>" +
        "<td><a href='mailto:" +
        value.email +
        "'>" +
        value.email +
        "</a></td>" +
        "<td>" +
        (value && value.gender !== undefined ? value.gender : "-") +
        "</td>" +
        "<td>" +
        (value && value.country !== undefined ? value.country : "-") +
        "</td>";
      return row;
    },
  },
};
</script>

<style>
</style>