<template>
    <div class="row justify-content-md-center">
        <b-card-group deck class="col-sm-8 mt-3"> 
            <b-card title="Formulario de Ingreso" header-tag="header" footer-tag="footer">
                <form  @submit.prevent="register">
                    <div class="form-group row mt-2">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Nombre</label>
                        <div class="col-sm-7">
                            <input v-model="datos.name" type="text" class="form-control" placeholder="nombre">
                        </div>
                    </div>
                    <div class="form-group row mt-2">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-7">
                            <input v-model="datos.email" type="mail" class="form-control" placeholder="E-mail">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-7">
                            <input v-model="datos.password" type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-3 col-form-label">Password Confirm</label>
                        <div class="col-sm-7">
                            <input v-model="datos.password_confirmation" type="password" class="form-control" placeholder="Confirm Password">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary"> Register</button>
                </form>
                <span v-for="error in errors" :key="error" class="text-danger">
                    {{error[0]}}
                    <br>
                </span>
            </b-card>
        </b-card-group>
    </div>
</template>
<script lang="ts">
import Axios from 'axios'
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
    data(){
        return{
            datos:{
                name:       '',
                email:      '',
                password:   '',
                password_confirmation:  '',
            },
            errors:[],
        }
    },
    created(){
        this.goHome()
    },
    methods:{
        goHome(){
            if(this.user){
                this.$router.push('/')
            }
        },
        async register(){
            try {
                let response:String = await Axios.post('api/auth/signup',this.datos);
                this.$notify({
                    group: 'foo',
                    title: '¡¡¡Listo!!!',
                    text: 'Se ha registrado exitosamente!!!!!',
                    type: 'success'
                });
                this.$router.push('/login')
            } catch (error) {
                this.errors =error.response.data.errors 
            }
        }
    },
    computed:{
        ...mapState(['user'])
    }
})
</script>