import "@babel/polyfill";
import "mutationobserver-shim";
//import "./plugins/bootstrap-vue";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).use(VueAxios, axios).mount("#app");
