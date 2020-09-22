<template>
	<div>
		<div>
			<b-navbar toggleable="md" type="dark" variant="dark">
				<img alt="Corazon logo" src="./assets/logo.png">
				<b-navbar-brand to="/">Ecocardio</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="">Post</b-nav-item>
					<b-nav-item to="/about">About</b-nav-item>
					<b-nav-item to="">Estudios</b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

					<b-nav-item-dropdown right v-if="!user">
					<!-- Using 'button-content' slot -->
						<template v-slot:button-content>
							<em>Login</em>
						</template>
						<b-dropdown-item to="/register">Register</b-dropdown-item>
						<b-dropdown-item to="/login">Sign in</b-dropdown-item>
					</b-nav-item-dropdown>
					<b-nav-item-dropdown right v-else>
						<template v-slot:button-content>
							<em>{{user.name}}</em>
						</template>
						<b-dropdown-item to="/modificar">Modificar Datos</b-dropdown-item>
						<b-dropdown-item @click="logout()">Logout</b-dropdown-item>

					</b-nav-item-dropdown>
				</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
		<b-container>
			<router-view />
		</b-container>
		

	</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import Axios from 'axios'

export default {
	methods:{
		async logout(){
			let user = this.user
			this.$store.dispatch('logout',user)
			
		}
	},
	computed:mapState([ 'user'])
  
}
</script>
