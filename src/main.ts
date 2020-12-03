import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import notifications from "vue-notification";
import { VueReCaptcha } from "vue-recaptcha-v3";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faArrowDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueReCaptcha, {
	siteKey: "6LdGs90ZAAAAAL3q0qIzp_Q-OhXyZ5Q0kdPRGZpq",
});
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
