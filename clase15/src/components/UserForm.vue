<template>
  <form @submit.prevent="onSaveClick" ref="userForm">
    <div class="form-group" id="g1" ><label for="email">Email</label>
      <input id="email" v-model="user.email" type="email"/>
      <div class="invalid-feedback" :style="'display:'+(validateEmail?'none':'block')">
        Email must be a valid address
      </div>
      <div class="valid-feedback" :style="'display:'+(validateEmail?'block':'none')">
        It's OK
      </div>
    </div>

    <div class="form-group" id="g2" ><label for="name">Name</label>
      <input id="name" v-model="user.name"/>
      <div class="invalid-feedback" :style="'display:'+(validateName?'none':'block')">
        Name must have at least 3 characters
      </div>
      <div class="valid-feedback" :style="'display:'+(validateName?'block':'none')">
        It's OK
      </div>
    </div>

    <div class="form-group" id="g3"><label for="country">Country</label>
      <select
        id="country"
        v-model="user.country"
      >
      <option v-for="(country,k) in countries" :key="k" :value="country.value">{{country.text}}</option>
      </select>
      <div class="invalid-feedback" :style="'display:'+(validateCountry?'none':'block')">
        You need to select a country
      </div>
      <div class="valid-feedback" :style="'display:'+(validateCountry?'block':'none')">
        It's OK
      </div>
    </div>

    <div class="form-group" id="g4"> 
      <div v-for="(gender,k) in genders" :key="k" class="custom-control custom-radio">
        <input type="radio" :id="'gender'+k"
        v-model="user.gender"
        name="gender-options"
         class="custom-control-input"
      />
      <label class="custom-control-label" :for="'gender'+k">{{gender.text}}</label>
      </div>
      
      <div class="invalid-feedback" :style="'display:'+(validateGender?'none':'block')">
        You need to select a gender
      </div>
      <div class="valid-feedback" :style="'display:'+(validateGender?'block':'none')">
        It's OK
      </div>
    </div>

    <div class="form-group" id="g5"><label for="password">Password</label>
      <input
        id="password"
        v-model="user.password"
        type="password"
      />
      <div class="invalid-feedback" :style="'display:'+(validatePassword?'none':'block')">
        The password must be 8 characters long
      </div>
      <div class="valid-feedback" :style="'display:'+(validatePassword?'block':'none')">
        It's OK
      </div>
    </div>

    <button class="btn btn-primary" type="submit">Save</button>
    <div :class="'alert alert-'+getResultData('type')" v-show="alertShow"
      >{{ getResultData("msg") }}</div
    >
  </form>
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
      alertShow:false,
    };
  },
  methods: {
    onSaveClick() {
      console.log("SUBMIT")
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
    showAlert() {
      this.alertShow = true;
      let that=this;
      let to = setTimeout(()=>{
        that.alertShow = false;
        clearTimeout(to);
      },(this.dismissSecs*1000))
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
      console.log(this.validateEmail,this.validateName,this.validateCountry,this.validateGender,this.validatePassword)
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

<style></style>
