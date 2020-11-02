import { Commit } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://ecocardiosocial.com/";
export default {
	namespaced: true,
	state: {
		comentarios: [],
		error: [],
		pagination: [],
	},
	mutations: {
		SET_COMMENTS(state: any, comentarios: any) {
			state.comentarios = comentarios.comentarios.data;
			state.pagination = comentarios.pagination;
		},
		SET_ERRORS(state: any, error: Array<object>) {
			state.error = error;
		},
	},
	actions: {
		async getComentarios({ commit }: { commit: any }, page: any) {
			let url: string = page.page
				? `api/comentarios/${page.post_id}?page=${page.page}`
				: `api/comentarios/${page.post_id}`;
			try {
				let response = await axios.get(url);
				let comentarios = response.data;
				commit("SET_COMMENTS", comentarios);
			} catch (error) {
				commit("SET_ERRORS", error);
			}
		},
		async saveComentarios({ commit }: { commit: any }, comentario: any) {
			let token = localStorage.getItem("token");
			let url: string = "api/comentarioCreate";
			try {
				let response = await axios
					.create({
						headers: {
							"Content-Type": "aplication/json",
							Authorization: `Bearer ${token}`,
						},
					})
					.post(url, comentario);
				return response;
			} catch (error) {
				return error;
			}
		},
	},
	getters: {},
};
