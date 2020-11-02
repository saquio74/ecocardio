<template>
    <div class="row justify-content-md-center">
        <b-card-group deck class="col-sm-8 mt-3"> 

            <b-card title="Formulario de Ingreso" header-tag="header" footer-tag="footer">
                <form  @submit.prevent="login(datos)">
                    <div class="form-group row mt-2">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-7">
                            <input v-model="datos.email" type="text" class="form-control" id="staticEmail" placeholder="E-mail">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-7">
                            <input v-model="datos.password" type="password" class="form-control" id="inputPassword" placeholder="Password">
                        </div>
                    </div>
                    <span class="text-danger" v-if="error!=''">
                        {{error}}
                        <br>
                    </span>
                    <div class="col-md-12"> 
                        <button type="submit" class="btn btn-primary btn-block text-uppercase btn-outline "> Entrar</button>
                    </div>

                </form>
                <br>
                <div class="col-md-12">
                
                    <button class="btn btn-secondary btn-block text-uppercase btn-outline" @click="loginSocial()"><img src="https://img.icons8.com/color/16/000000/google-logo.png"> Entrar con Google</button> 
                </div>
            
            </b-card>
        </b-card-group>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

export default Vue.extend({
    data(){
        return{
            datos:{
                email:"",
                password:""
            }
        }
    },
    created(){
        this.goHome()
    },
    methods:{
        ...mapActions(['login','loginSocial']),
        goHome(){
            if(this.user)this.$router.push('/');
        },
        
    },
    computed:{
        ...mapState(['user','error']),
    }
})
</script>