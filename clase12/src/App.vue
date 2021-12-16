<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3"></b-col>
      <b-col cols="6"
        ><UserForm :countries="countries" :genders="genders"
      /></b-col>
      <b-col cols="3"></b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col><UsersTable :countries="countries" :genders="genders" /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserForm from "./components/UserForm.vue";
import UsersTable from "./components/UsersTable.vue";

export default {
  name: "App",
  components: {
    UserForm,
    UsersTable,
  },
  data() {
    return {
      countries: [
        { value: "AR", text: "Argentina" },
        { value: "CO", text: "Colombia" },
        { value: "CL", text: "Chile" },
        { value: "UY", text: "Uruguay" },
        { value: "Other", text: "Other" },
      ],
      genders: [
        { value: "F", text: "Female" },
        { value: "M", text: "Male" },
        { value: "Other", text: "Other" },
      ],
    };
  },
  beforeMount() {
    this.$store.dispatch("obtainUsers");
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
