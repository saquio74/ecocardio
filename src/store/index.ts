import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import post from "../modules/post";

axios.defaults.baseURL = "http://localhost:8000/";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
		pacientes: [],
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
	},
	actions: {
		async login({ dispatch }, data) {
			try {
				let url = "api/auth/login";

				let response = await axios.post(url, data);
				let user = await response.data;
				localStorage.token = await user.access_token;
				router.push({ name: "Home" });
				return dispatch("getUser");
			} catch (error) {}
		},
		async getUser({ commit }) {
			let token = localStorage.getItem("token");
			if (token) {
				try {
					let res = await axios
						.create({
							headers: {
								"Content-Type": "application/json",
								Authorization: "Bearer " + token,
							},
						})
						.get("api/user");
					res.data.access_token = token;
					commit("SET_USER", res.data);
				} catch (error) {}
			} else {
				commit("SET_USER", null);
			}
		},
		async logout({ commit }) {
			let token = localStorage.getItem("token");

			try {
				axios
					.create({
						headers: {
							"Content-Type": "aplication/json",
							Authorization: `Bearer ${token}`,
						},
					})
					.post("api/logout");
				commit("SET_USER", null);
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {
		post,
	},
});
