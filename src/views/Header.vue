<template>
    <div >
        
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <img alt="Corazon logo" src="../assets/logo.png" id="logo">
            <b-navbar-brand to="/">
                <h2>
                    Ecocardio.Surge.sh
                </h2>	
            </b-navbar-brand>
            

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/post">Post</b-nav-item>
                <b-nav-item v-if="user" to="/estudios">Estudios</b-nav-item>
                <b-nav-item-dropdown v-if="user">
                    <template v-slot:button-content>
                        <em>Pacientes</em>
                    </template>
                    <b-dropdown-item to="/patientform">Nuevo paciente</b-dropdown-item>
                    <b-dropdown-item to="/modificarpatient">Modificar Paciente</b-dropdown-item>
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
                        <b-dropdown-item to="/updateuser">Modificar Datos</b-dropdown-item>
                        <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import Vue from "vue"
import { mapState, mapActions } from 'vuex'
export default Vue.extend ({
    methods:{
		...mapActions(['logout']),
	},
	computed:{
		...mapState([ 'user'])
	}
})
</script>
<style>
    .header{
        height: 20%;
    }
</style>