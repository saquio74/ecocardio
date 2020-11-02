import axios from "axios";
axios.defaults.baseURL = "http://ecocardiosocial.com/";
export default {
	namespaced: true,
	state: {
		post: [],
		pagination: [],
		myPost: [],
		myPagination: [],
		postInfo: "",
		dataUrl: "http://ecocardiosocial.com/storage/img/",
		error: "",
	},
	mutations: {
		SET_POST(state: any, post: any) {
			state.post = post.posts.data;
			state.pagination = post.pagination;
		},
		SET_MY_POST(state: any, post: any) {
			state.myPost = post.posts.data;
			state.myPagination = post.pagination;
		},
		SET_POSTDATA(state: any, post: any) {
			state.postInfo = post;
		},
		SET_ERROR(state: any, error: any) {
			state.error = error;
		},
	},
	actions: {
		async getPost({ commit }: { commit: any }, nextUrl: number) {
			try {
				const url: any = nextUrl
					? `api/post?page=${nextUrl}`
					: `api/post`;

				const response = await axios.get(url);
				const data = await response.data;
				commit("SET_POST", data);
			} catch (error) {
				commit("SET_ERROR", error.response.data);
			}
		},
		async getMyPosts({ commit }: { commit: any }, nextUrl: any) {
			try {
				const url: any = nextUrl.page
					? `api/myPosts/${nextUrl.id}?page=${nextUrl.page}`
					: `api/myPosts/${nextUrl.id}`;
				const response = await axios.get(url);
				const data = await response.data;
				commit("SET_MY_POST", data);
			} catch (error) {
				commit("SET_ERROR", error.response.data);
			}
		},
		async postId({ commit }: { commit: any }, id: any) {
			try {
				const response = await axios.get(`api/postShow/${id}`);
				const data = await response.data;
				commit("SET_POSTDATA", data);
			} catch (error) {
				commit("SET_ERROR", error.response.data);
			}
		},
	},
	getters: {},
};
