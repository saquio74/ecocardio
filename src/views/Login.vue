<template>
    <div class="row justify-content-md-center">
        <b-card-group deck class="col-sm-8 mt-3"> 
            {{user}}
            <b-card title="Formulario de Ingreso" header-tag="header" footer-tag="footer">
                <form  @submit.prevent="login">
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
                    <button type="submit" class="btn btn-primary"> Login</button>
                </form>
                
            
            </b-card>
        </b-card-group>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

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
        goHome(){
            if(this.user){
                this.$router.push('/');
            }
        },
        login(){
            
            this.$store.dispatch('login',this.datos)
        }
    },
    computed:{
        ...mapState(['user']),
    }
})
</script>