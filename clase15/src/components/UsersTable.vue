<template>
  <table class="table table-bordered table-striped">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Country</th>
    </tr>
    <tr v-for="(user, k) in users" :key="k" v-html="userRow(user)" />
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
  methods: {
    userRow(user) {
      let row =
        "<td>" +
        user.name +
        "</td>" +
        "<td><a href='mailto:" +
        user.email +
        "'>" +
        user.email +
        "</a></td>" +
        "<td>" +
        (user && user.gender !== undefined ? user.gender : "-") +
        "</td>" +
        "<td>" +
        (user && user.country !== undefined ? user.country : "-") +
        "</td>";
      return row;
    },
  },
};
</script>

<style></style>
