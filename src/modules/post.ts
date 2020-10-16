import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/";
export default {
	namespaced: true,
	state: {
		post: [],
		pagination: [],
		postInfo: "",
		dataUrl: "http://localhost:8000/storage/img/",
	},
	mutations: {
		SET_POST(state: any, post: any) {
			state.post = post.posts.data;
			state.pagination = post.pagination;
		},
		SET_POSTDATA(state: any, post: any) {
			state.postInfo = post;
		},
	},
	actions: {
		async getPost({ commit }: { commit: any }, nextUrl: any) {
			try {
				const url: any = nextUrl ? nextUrl : `api/post`;
				const response = await axios.get(url);
				const data = await response.data;
				commit("SET_POST", data);
			} catch (error) {}
		},
		async postId({ commit }: { commit: any }, id: any) {
			try {
				const response = await axios.get(`api/postShow/${id}`);
				const data = await response.data;
				commit("SET_POSTDATA", data);
			} catch (error) {}
		},
	},
	getters: {},
};
