import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import animacion from "../views/animation/Loading.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/animation",
		name: "animation",
		component: animacion,
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
	{
		path: "/misposts",
		name: "MisPosts",
		component: () => import("../views/post/misPosts.vue"),
	},
	{
		path: "/estudios",
		name: "estudios",
		component: () => import("../views/estudios/Estudio.vue"),
	},
	{
		path: "/patientform",
		name: "crearPaciente",
		component: () => import("../views/patients/CreatePatient.vue"),
	},
	{
		path: "/updatepatientform",
		name: "modificarPaciente",
		component: () => import("../views/patients/UpdatePatient.vue"),
	},
	{
		path: "/newstudy",
		name: "nuevoEstudio",
		component: () => import("../views/estudios/NewStudy.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
