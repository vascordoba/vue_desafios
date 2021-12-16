<template>
  <b-form @submit.prevent="onSaveClick" ref="userForm">
    <b-form-group id="g1" label="Email" label-for="email">
      <b-form-input id="email" v-model="user.email" type="email"></b-form-input>
      <b-form-invalid-feedback :state="validateEmail">
        Email must be a valid address
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validateEmail">
        It's OK
      </b-form-valid-feedback>
    </b-form-group>

    <b-form-group id="g2" label="Name" label-for="name">
      <b-form-input id="name" v-model="user.name"></b-form-input>
      <b-form-invalid-feedback :state="validateName">
        Name must have at least 3 characters
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validateName">
        It's OK
      </b-form-valid-feedback>
    </b-form-group>

    <b-form-group id="g3" label="Country" label-for="country">
      <b-form-select
        id="country"
        v-model="user.country"
        :options="countries"
      ></b-form-select>
      <b-form-invalid-feedback :state="validateCountry">
        You need to select a country
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validateCountry">
        It's OK
      </b-form-valid-feedback>
    </b-form-group>

    <b-form-group id="g4" label="Gender" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="gender"
        v-model="user.gender"
        :options="genders"
        :aria-describedby="ariaDescribedby"
        name="gender-options"
      ></b-form-radio-group>
      <b-form-invalid-feedback :state="validateGender">
        You need to select a gender
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validateGender">
        It's OK
      </b-form-valid-feedback>
    </b-form-group>

    <b-form-group id="g5" label="Password" label-for="password">
      <b-form-input
        id="password"
        v-model="user.password"
        type="password"
      ></b-form-input>
      <b-form-invalid-feedback :state="validatePassword">
        The password must be 8 characters long
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validatePassword">
        It's OK
      </b-form-valid-feedback>
    </b-form-group>

    <b-button type="submit" variant="primary">Save</b-button>
    <b-alert
      :variant="getResultData('type')"
      :show="dismissCountDown"
      dismissible
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      >{{ getResultData("msg") }}</b-alert
    >
  </b-form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    countries: { type: Array, default: null },
    genders: { type: Array, default: null },
  },
  data() {
    return {
      user: { email: "", name: "", gender: "", country: "", password: "" },
      dismissSecs: 3,
      dismissCountDown: 0,
    };
  },
  methods: {
    onSaveClick() {
      if (this.validateForm) {
        this.$store.dispatch("saveUser", this.user);
        this.showAlert();
        this.clearForm();
      }
    },
    clearForm() {
      this.user = {
        email: "",
        name: "",
        gender: "",
        country: "",
        password: "",
      };
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getResultData(k) {
      if (this.userAddResult != null) {
        return this.userAddResult[k];
      }
      return "";
    },
  },
  computed: {
    ...mapGetters({ userAddResult: "getSaveResult" }),
    validateForm() {
      return (
        this.validateEmail &&
        this.validateName &&
        this.validateCountry &&
        this.validateGender &&
        this.validatePassword
      );
    },
    validateEmail() {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.user.email))
        return true;
      return false;
    },
    validateName() {
      return this.user.name.length >= 3;
    },
    validateCountry() {
      return this.user.country != "";
    },
    validateGender() {
      return this.user.gender != "";
    },
    validatePassword() {
      return this.user.password != "" && this.user.password.length >= 8;
    },
  },
};
</script>

<style>
</style>