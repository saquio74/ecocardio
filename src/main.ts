import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
let token = localStorage.getItem("token");
const BASEURL = "http://localhost:8000/";
const ENDPOINT = "/api/user";

if (token) {
	axios
		.create({
			baseURL: BASEURL,
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		})
		.get(ENDPOINT)
		.then((res) => {
			store.state.user = res.data;
		});
}

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
