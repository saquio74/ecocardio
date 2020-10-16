import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/Register.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/post",
		name: "Post",
		component: () => import("../views/post/PostView.vue"),
	},
	{
		path: "/post/:id",
		name: "PostView",
		component: () => import("../views/post/Post.vue"),
	},
	{
		path: "/post/update",
		name: "PostUpdate",
		component: () => import("../views/post/PostUpdate.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
