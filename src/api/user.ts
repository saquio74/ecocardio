import Api from "./Api";

export default {
	register(form: any) {
		return Api().post("/register", form);
	},

	login(form: any) {
		return Api().post("/login", form);
	},

	logout() {
		return Api().post("/logout");
	},

	auth() {
		return Api().get("/user");
	},
};
