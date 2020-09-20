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
				let url = "api/login";

				let response = await axios.post(url, data);
				let user = response.data;
				console.log(user);

				localStorage.token = user.access_token;
				console.log(localStorage);

				return dispatch("getUser", user);
			} catch (error) {}
		},
		async getUser({ commit }, user) {
			try {
				let user = await axios.get("api/user");
				commit("SET_USER", user);
			} catch (error) {}
		},
	},
	modules: {},
});
