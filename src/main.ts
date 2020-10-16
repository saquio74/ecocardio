import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import notifications from "vue-notification";

Vue.config.productionTip = false;
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(notifications);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
let token = localStorage.getItem("token");

if (token) {
	store.dispatch("getUser");
}

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
