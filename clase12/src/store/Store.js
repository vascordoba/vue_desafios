import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
let shajs = require("sha.js");

Vue.use(Vuex);

const axiosInstance = axios.create({
  baseURL: "https://61b7575464e4a10017d18aa5.mockapi.io/easyfood/api",
});

export default new Vuex.Store({
  state: {
    users: [],
    saveResult: null
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getSaveResult(state) {
      return state.saveResult;
    }
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SAVE_RESULT(state, res) {
      state.saveResult = res;
    }
  },
  actions: {
    async obtainUsers(context) {
      const response = await axiosInstance.get("/users");
      if (response.status === 200 && response.data.length > 0) {
        context.commit("SET_USERS", response.data);
      }
    },

    async saveUser(context, user) {
      const newUser = {
        name: user.name,
        email: user.email,
        gender: user.gender,
        country: user.country,
        password: shajs("sha512").update(user.password).digest("hex"),
        role: "USER",
      };

      const response = await axiosInstance.post("/users", newUser);
      if (response.status >= 200) {
        context.commit("SET_SAVE_RESULT", { type: "success", msg: "Use registered successfully!" });
        context.dispatch("obtainUsers");
      } else {
        context.commit("SET_SAVE_RESULT", {
          type: "danger", msg: "An error has occurred. Please, try again later"
        });
      }
    },
  },
});