<template>
	<div>
		<div>
			<b-navbar toggleable="md" type="dark" variant="dark">
				<img alt="Corazon logo" src="./assets/logo.png">
				<b-navbar-brand to="/">Ecocardio</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="/post">Post</b-nav-item>
					<b-nav-item to="">Estudios</b-nav-item>
					<b-nav-item-dropdown v-if="user">
						<template v-slot:button-content>
							<em>Pacientes</em>
						</template>
						<b-dropdown-item to="/patient">Nuevo paciente</b-dropdown-item>
						<b-dropdown-item to="/Modificar">Modificar Paciente</b-dropdown-item>
					</b-nav-item-dropdown>
					<b-nav-item to="/about">Sobre nosotros</b-nav-item>
				</b-navbar-nav>
				

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					

					<b-nav-item-dropdown right v-if="!user">
					<!-- Using 'button-content' slot -->
						<template v-slot:button-content>
							<em>Entrar</em>
						</template>
						<b-dropdown-item to="/register">Registrarse</b-dropdown-item>
						<b-dropdown-item to="/login">Entrar</b-dropdown-item>
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
		<notifications group="foo" />

	</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
	methods:{
		...mapActions(['logout']),
	},
	computed:{
		...mapState([ 'user'])
	}
}
</script>
