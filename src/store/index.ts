import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import post from "../modules/post";
import comments from "../modules/comments";
import patients from "../modules/patients";

axios.defaults.baseURL = "http://ecocardiosocial.com/";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
		pacientes: [],
		error: [],
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
		SET_ERRORS(state, error) {
			console.log(error);
			state.error = error;
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
			} catch (error) {
				console.log(error.response.data.message);
				return dispatch("setError", error.response.data.message);
			}
		},
		setError({ commit }, error) {
			commit("SET_ERRORS", error);
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
				await axios
					.create({
						headers: {
							"Content-Type": "aplication/json",
							Authorization: `Bearer ${token}`,
						},
					})
					.post("api/logout");
				router.push("/login");
				commit("SET_USER", null);
			} catch (error) {
				console.log(error);
			}
		},
		async loginSocial({ dispatch }) {
			let url = "api/login/google";
			try {
				let response = await axios.get(url);
				let urlResponse = await response.data.url;
				if (urlResponse) {
					window.location.href = urlResponse;
				}
			} catch (error) {
				console.log(error);
			}

			//localStorage.token = await urlResponse.access_token;
			//router.push({ name: "Home" });
			//return dispatch("getUser");
		},
	},
	modules: {
		post,
		comments,
		patients,
	},
});
