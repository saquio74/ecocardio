import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
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

				return dispatch("getUser");
			} catch (error) {}
		},
		async getUser({ commit }) {
			let token = localStorage.getItem("token");
			if (token) {
				axios
					.create({
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + token,
						},
					})
					.get("api/user")
					.then((res) => {
						res.data.access_token = token;
						//store.state.user = res.data;
						commit("SET_USER", res.data);
					});
			} else {
				commit("SET_USER", null);
			}
		},
		async logout({ commit }) {
			let token = localStorage.getItem("token");
			console.log(token);
			axios
				.create({
					headers: {
						"Content-Type": "aplication/json",
						Authorization: `Bearer ${token}`,
					},
				})
				.post("api/logout")
				.then((res) => {
					commit("SET_USER", null);
				});
		},
	},
	modules: {},
});
