<template>
    <div class="container bg-primary text-white">
        <br>
        <form @submit.prevent="savePatient()">
            <div class="form-group row mt-2 text-center">
                <label for="staticEmail" class="col-sm-3 col-form-label">Apellido</label>
                <div class="col-sm-9">
                    <input type="text" v-model="pacienteData.apellido" class="form-control" id="apellido" placeholder="Apellido">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Nombre</label>
                <div class="col-sm-9">
                    <input type="text" v-model="pacienteData.nombre" class="form-control" id="nombre" placeholder="Nombre">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">dni</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="pacienteData.dni" id="dni" placeholder="DNI">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">tipo de documento</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="pacienteData.tipo_dni" id="t_d" placeholder="Tipo de documento">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Fecha de nacimiento</label>
                <div class="col-sm-9">
                    <input type="date" class="form-control" v-model="pacienteData.fecha_nacimiento" id="f_nac" placeholder="Fecha de nacimiento">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">provincias</label>
                <div class="col-sm-9">
                    <select class="form-control" id="provincias" v-model="provinciaData" @change="getLocalidad()">
                        <option value="0">Seleccione una provincia</option>
                        <option v-for="prov in provincias" :key="prov.id" :value="prov">{{prov.nombre}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row mt-2 text-center" v-if="provincias && provinciaData.id!=2 && municipios!=''">
                <label for="inputPassword" class="col-sm-3 col-form-label">Localidad</label>
                <div class="col-sm-9">
                    <select class="form-control" id="provincias" v-model="localidadData">
                        <option value="0">Seleccione</option>
                        <option v-for="mun in municipios" :key="mun.id" :value="mun">{{mun.nombre}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row mt-2 text-center" v-if="provinciaData.id==2 ">
                <label for="inputPassword" class="col-sm-3 col-form-label">localidad</label>
                <div class="col-sm-9">
                <input disabled v-model="pacienteData.localidad" type="text" class="form-control" id="provincias" placeholder="localidad">
                </div>
            </div>
            <div class="form-group row mt-2 text-center" v-if="municipios=='' && provinciaData.id!=2 ">
                <label for="inputPassword" class="col-sm-3 col-form-label">Localidad</label>
                <div class="col-sm-9">
                <input  v-model="pacienteData.localidad" type="text" class="form-control" id="localidad" placeholder="localidad">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Direccion</label>
                <div class="col-sm-9">
                <input v-model="pacienteData.direccion" type="text" class="form-control" id="direccion" placeholder="Direccion">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Telefono</label>
                <div class="col-sm-9">
                <input v-model="pacienteData.telefono" type="text" class="form-control" id="telefono" placeholder="telefono">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Celular</label>
                <div class="col-sm-9">
                <input v-model="pacienteData.celular" type="text" class="form-control" id="celular" placeholder="celular">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                <input v-model="pacienteData.email" type="email" class="form-control" id="email" placeholder="email">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Cobertura</label>
                <div class="col-sm-9">
                <input v-model="pacienteData.cobertura" type="text" class="form-control" id="cobertura" placeholder="cobertura">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Tipo de Afiliado</label>
                <div class="col-sm-9">
                <input v-model="pacienteData.tipo_de_af" type="text" class="form-control" id="tipoAfiliado" placeholder="tipo de Afiliado">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">cuit o cuil (sin guiones)</label>
                <div class="col-sm-9">
                <input v-model="pacienteData.cuit" type="number" class="form-control" id="cuit" placeholder="cuit o cuil">
                </div>
            </div>
            <div class="form-group row mt-2 text-center">
                <label for="inputPassword" class="col-sm-3 col-form-label">Numero de Afiliado</label>
                <div class="col-sm-9">
                <input type="text" v-model="pacienteData.n_af" class="form-control" id="nAfiliado" placeholder="Numero de afilidado">
                </div>
            </div>
            <div class="alert alert-danger" role="alert" v-if="errors.index">
                <p v-for="error in errors" :key="error">
                    {{error[0]}}
                </p>
                
            </div>
            <div class="form-group row mt-5 text-center col-sm-8 offset-sm-2" v-if="bandera == 0">
                <button type="submit" class="btn btn-success btn-lg btn-block">Enviar</button>
            </div>
            <div class="form-group row mt-5 text-center col-sm-8 offset-sm-2" v-else>
                <ButtonWait />
            </div>
        </form>
    <br>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import CryptoJS from 'crypto-js'
import swal from 'sweetalert'
import ButtonWait from '../animation/ButtonWait'
import { mapState } from 'vuex'
export default {
    components:{
        ButtonWait,
    },
    data(){
        return{
            provincias:[],
            municipios:[],
            provinciaData:0,
            localidadData:0,
            pacienteData:{
                apellido:'',
                nombre:'',
                dni:'',
                tipo_dni:'',
                fecha_nacimiento:'',
                provincia:'',
                direccion:'',
                localidad:'',
                telefono:'',
                celular:'',
                email:'',
                cobertura:'',
                tipo_de_af:'',
                cuit:'',
                n_af:'',   
            },
            bandera:0,
            errors:'',
        }
    },
    mounted(){
        this.getProvincias(),
        this.verificarConfirmed()
    },
    methods:{
        verificarConfirmed(){
            if(this.user.email_verified_at==null) this.$router.push('/email/resend')
        },
        async getProvincias(){
            try {
                let response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
                
                this.provincias = response.data.provincias 
                this.provincias.sort((a, b) => a.id - b.id);

            } catch (error) {
                swal("ha ocurrido un error!", {
                    icon: "error",
                });
            }
        },
        async getLocalidad(){
            if(this.provinciaData.id==2){
                this.pacienteData.localidad = this.provinciaData.nombre
                //console.log(this.)
                return
            }
            try {
                let response = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${this.provinciaData.id}&campos=id,nombre&max=2000`)
                this.municipios = response.data.municipios
                this.municipios.sort((a, b) => a.id - b.id);
            } catch (error) {
                
                swal("ha ocurrido un error!", {
                    icon: "error",
                });
            }
        },
        async savePatient(){
            this.bandera++
            this.pacienteData.provincia = this.provinciaData.nombre
            if(this.localidadData.nombre){
                this.pacienteData.localidad = this.localidadData.nombre
            }
            let token = localStorage.getItem('token')
            try {
                let url = 'api/pacientesCreate'
                let response = await axios.create({
                    headers:{
                        "Content-Type": "aplication/json",
                        Authorization: `Bearer ${token}`,
                    }
                }).post(url,this.pacienteData)
                swal("Paciente dado de alta correctamente",{
                    icon: "success"
                })
                this.pacienteData.apellido
                this.pacienteData.nombre
                this.pacienteData.dni
                this.pacienteData.tipo_dni
                this.pacienteData.fecha_nacimiento
                this.pacienteData.direccion
                this.pacienteData.telefono
                this.pacienteData.celular
                this.pacienteData.email
                this.pacienteData.cobertura
                this.pacienteData.tipo_de_af
                this.pacienteData.cuit
                this.pacienteData.n_af
                this.bandera--
            } catch (error) {
                this.bandera--
                this.errors =error.response.data.errors
                swal({
                    icon: "error",
                    title: 'Ocurrio un error'
                })
            }
        }

    },
    computed:{
        ...mapState(['user'])
    }
    
}
</script>