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
                    <div class="form-group row mt-2">
                        <label for="especialidad" class="col-sm-3 col-form-label">Especialidad</label>
                        <div class="col-sm-7">
                            <input v-model="datos.especialidad" id="especialidad" type="text" class="form-control" placeholder="Especialidad (opcional)">
                        </div>
                    </div>
                    <div class="form-group row mt-2">
                        <label for="mn" class="col-sm-3 col-form-label">Matricula Nacional</label>
                        <div class="col-sm-7">
                            <input v-model="datos.mn" id="mn" type="text" class="form-control" placeholder="(opcional)">
                        </div>
                    </div>
                    <div class="form-group row mt-2">
                        <label for="mp" class="col-sm-3 col-form-label">Matricula Provincial</label>
                        <div class="col-sm-7">
                            <input v-model="datos.mp" id="mp" type="text" class="form-control" placeholder="(opcional)">
                        </div>
                    </div>
                    <button v-if="ruta == 'Register'" type="submit" class="btn btn-primary"> Register</button>
                </form>
                    <button v-if="ruta == 'updateUser'" class="btn btn-warning" @click="update()"> Modificar datos</button>
                <span v-for="error in errors" :key="error" class="text-danger">
                    {{error[0]}}
                    <br>
                </span>
            </b-card>
        </b-card-group>
    </div>
</template>
<script >
import Axios from 'axios'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import swal from 'sweetalert'
export default Vue.extend({
    data(){
        return{
            datos:{
                name:       '',
                email:      '',
                password:   '',
                password_confirmation:  '',
                especialidad:           '',
                mn:                     '',
                mp:                     '',

            },
            errors:[],
            ruta:'',
        }
    },
    created(){
        this.goHome()
    },
    methods:{
        ...mapActions(['getUser']),

        goHome(){
            this.ruta = this.$route.name
            if(this.user && this.$route.name == 'Register'){
                this.$router.push('/')
            }
            if(this.$route.name == 'updateUser'){
                let id = this.user.id
                Object.defineProperty(this.datos,'id',{
                    get: function() { return id; },
                    set: function(newValue) { id = newValue; },
                    enumerable: true,
                    configurable: true
                })
                this.datos.name         = this.user.name
                this.datos.email        = this.user.email
                this.datos.especialidad = this.user.especialidad
                this.datos.mn           = this.user.mn
                this.datos.mp           = this.user.mp
            }
        },
        async register(){
            try {
                let response = await Axios.post('api/auth/signup',this.datos);
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
        },
        async update(){
            
            //this.datos.id = this.user.id
            //console.log(this.datos)
            let token = localStorage.getItem('token')
            try {
                let response = await Axios.create({
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                }).put(`api/updateUser`, this.datos)
                this.getUser();
                swal('datos modificados correctamente',{
                    icon:'success'
                })
            } catch (error) {
                swal('ha ocurrido un error',{
                    icon:'success'
                })
            }
        },
    },
    computed:{
        ...mapState(['user'])
    }
})
</script>