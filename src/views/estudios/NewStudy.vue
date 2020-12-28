<template>
    <b-col sm="12"  >
        <br>
        <div id="study" class="card bg-dark text-white">
            <div class="row">
                <div class="col-sm-2 offset-sm-1">

                    <img alt="Vue logo" src="../../assets/logo.png">
                </div>
                <div class="col-sm-8">

                    <div class="card-header">Informe cortesia de ECOCARDIOSOCIAL</div>
                </div>
            </div>
                 
        
            <b-col sm="12" md="10" offset-md="1" class="text-center">
                <b-card bg-variant="dark">

                    <b-container fluid >
                        <b-row class="my-1" >
                            <b-col sm="4">
                                <label class="text-white">nombre</label>
                            </b-col>
                            <b-col sm="8">
                                <input class="form-control" disabled type="text" :value="patient.nombre + ' ' + patient.apellido">
                            </b-col>
                            <br>
                            <br>
                            <b-col sm="4">
                                <label class="text-white">Cobertura</label>
                            </b-col>
                            <b-col sm="8">
                                <input class="form-control" disabled type="text" :value="patient.cobertura">
                            </b-col>
                            <br>
                            <br>
                            <b-col sm="4">
                                <label class="text-white">Medico Solicitante</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="medico_solicitante" class="form-control" type="text" >
                            </b-col>
                            <br>
                            <br>
                            <b-col sm="4">
                                <label class="text-white">Diagnostico</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="diagnostico" class="form-control" type="text" >
                            </b-col>
                            <br>
                            <b-col sm="12" v-if="!peso || !altura">
                                <h3 class="text-warning">Peso y altura son obligatorios para el calculo de superficie corporal y espesores</h3>
                            </b-col>
                            <br>
                            <b-col sm="4">
                                <label for="peso" class="text-white">Peso en kg</label>
                            </b-col>
                            <b-col sm="6">
                                <input id="peso" v-model="peso" class="form-control" type="number" >
                            </b-col>
                            <b-col  sm="2">
                                
                                <label for="altura" class="text-white">Sup: {{superficieCorporal.toFixed(2)}}</label>

                            </b-col>
                            <br>
                            <br>
                            <b-col sm="4">
                                <label for="altura" class="text-white">Altura en cm</label>
                            </b-col>
                            <b-col sm="6">
                                <input id="altura" v-model="altura" class="form-control" type="number" @keyup="superCorporal()">
                            </b-col>
                            
                        </b-row>
                    </b-container>
                </b-card>
                <br>
            </b-col >
            <b-col sm="12">
                <b-container fluid class="">

                    <b-card bg-variant="primary text-white">
                        <h5 class="text-center "> 
                            Ecocardiograma-doppler color
                        </h5>
                    </b-card>
                </b-container>
            </b-col>
            <br>
            <b-row>

                <b-col md="3" >
                    <b-container fluid>
                        <b-card class=" bg-dark text-white">
                            <b-row>

                                <b-col sm="4" >
                                    <label for="ad" class="text-white">AD</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="ad" id="ad" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4" >
                                    <label for="aad" class="text-white">AAD</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="area_ad" id="aad" @keyup="cavidadesDerechas()" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="ddvd" class="text-white">DDVD</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="ddvd" id="ddvd" @keyup="cavidadesDerechas()" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="ddvi" class="text-white">DDVI</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="ddvi" id="ddvi" @keyup="ventriculoIzquierdo()" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="dsvi" class="text-white">DSVI</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="dsvi" id="dsvi" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="fey" class="text-white">FEY</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="fey" id="fey" @keyup="fraccionEyeccion()" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="fac" class="text-white">FAC</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="fac" id="fac" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="siv" class="text-white">SIV</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="siv" id="siv" @keyup="espesorParietal()" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="ppvi"  class="text-white">PPVI</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="ppvi" id="ppvi" @keyup="espesorParietal()" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="ai" class="text-white">AI</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="ai" id="ai" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="aai" class="text-white">AAI</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="area_ai" @keyup="auriculaIzquierda()" id="aai" class="form-control" type="number" >
                                </b-col>
                                <b-col sm="4">
                                    <label for="ao" class="text-white">AO</label>
                                </b-col>
                                <b-col sm="8">
                                    <input v-model="ao" id="ao" class="form-control" type="number" >
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-container>
                </b-col>
                <b-col md="9">
                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr class="tableW">
                                <th scope="col">Doppler</th>
                                <th scope="col">Veloc.</th>
                                <th scope="col" class="text-right">Gradiente</th>
                                <th scope="col"></th>
                                <th scope="col">Insuf.</th>
                            </tr>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Pico</th>
                                <th scope="col">max</th>
                                <th scope="col">med</th>
                                <th scope="col">Grad</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">Tricusp E</th>
                                <th scope="col">
                                    <input v-model="tricuspide_e" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <input v-model="tricuspide_gmax" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <input v-model="tricuspide_gmed" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <select v-model="tricuspide_insuficiencia" name="it" @change="adValvulopatia('tricuspide', tricuspide_insuficiencia)" id="it" class="form-control">
                                        <option value=""></option>
                                        <option value="leve">leve</option>
                                        <option value="leve a moderada">leve a moderada</option>
                                        <option value="moderado">moderada</option>
                                        <option value="moderada a severa">moderada a severa</option>
                                        <option value="severa">severa</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <th>Tricusp A</th>
                                <th scope="col">
                                    <input v-model="tricuspide_a" type="number" class="form-control">
                                </th>
                                
                            </tr>
                            <tr>
                                <th>Pulmonar</th>
                                <th scope="col">
                                    <input v-model="pulmonar_vel" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <input v-model="pulmonar_gmax" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <input v-model="pulmonar_gmed" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <select v-model="pulmonar_insuficiencia" @change="adValvulopatia('pulmonar', pulmonar_insuficiencia)" name="it" id="it" class="form-control">
                                        <option value=""></option>
                                        <option value="leve">leve</option>
                                        <option value="leve a moderada">leve a moderada</option>
                                        <option value="moderada">moderada</option>
                                        <option value="moderada a severa">moderada a severa</option>
                                        <option value="severa">severa</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <th>Mitral E</th>
                                <th scope="col">
                                    <input v-model="mitral_e" @keyup="patronDiastolico()" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <input v-model="mitral_gmax" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <input v-model="mitral_gmed" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <select v-model="mitral_insuficiencia" @change="adValvulopatia('mitral', mitral_insuficiencia)" name="it" id="it" class="form-control">
                                        <option value=""></option>
                                        <option value="leve">leve</option>
                                        <option value="leve a moderada">leve a moderada</option>
                                        <option value="moderada">moderada</option>
                                        <option value="moderada a severa">moderada a severa</option>
                                        <option value="severa">severa</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <th>Mitral A</th>
                                <th scope="col">
                                    <input v-model="mitral_a" @keyup="patronDiastolico()" type="number" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Aortica</th>
                                <th scope="col">
                                    <input v-model="aortica_vel" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <input v-model="aortica_gmax" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <input v-model="aortica_gmed" type="number" class="form-control">
                                </th>
                                <th scope="col">
                                    <select v-model="aortica_insuficiencia" @change="adValvulopatia('aortica', aortica_insuficiencia)" name="it" id="it" class="form-control">
                                        <option value=""></option>
                                        <option value="leve">leve</option>
                                        <option value="leve a moderada">leve a moderada</option>
                                        <option value="moderada">moderada</option>
                                        <option value="moderada a severa">moderada a severa</option>
                                        <option value="severa">severa</option>
                                    </select>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
            <b-col sm="12">
                <b-container fluid class="">

                    <b-card bg-variant="primary text-white">
                        <h5 class="text-center "> 
                            Ecocardiograma Bidimensional
                        </h5>
                    </b-card>
                </b-container>
            </b-col>
            <b-col sm="12">
                <b-card bg-variant="dark">
                    <table class="table table-dark table-striped table-hover">
                        <tbody>
                            <tr>
                                <th style="width:10px">Diametros</th>
                                <th scope="col">
                                    <input v-model="diametros" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Auricula izquierda</th>
                                <th scope="col">
                                    <input v-model="auricula_izquierda" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Cavidades Derechas</th>
                                <th scope="col">
                                    <input v-model="cavidades_derechas" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Funcion sistolica</th>
                                <th scope="col">
                                    <input v-model="funcion" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Espesor Parietal</th>
                                <th scope="col">
                                    <input v-model="espesor" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Tabiques</th>
                                <th scope="col">
                                    <input v-model="tabiques" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Motilidad Parietal</th>
                                <th scope="col">
                                    <input v-model="motilidad" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Valvula Mitral</th>
                                <th scope="col">
                                    <input v-model="valvula_mitral" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Raiz de Aorta</th>
                                <th scope="col">
                                    <input v-model="raiz_aorta" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Valvula Aortica</th>
                                <th scope="col">
                                    <input v-model="valvula_aortica" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Valvula Tricuspide</th>
                                <th scope="col">
                                    <input v-model="valvula_tricuspide" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Valvula Pulmonar</th>
                                <th scope="col">
                                    <input v-model="valvula_pulmonar" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Pericardio y Masas</th>
                                <th scope="col">
                                    <input v-model="pericardio_masas" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Vena Cava Inferior</th>
                                <th scope="col">
                                    <input v-model="vci" type="text" class="form-control">
                                </th>
                            </tr>
                        </tbody>
                        
                    </table>
                </b-card>
            </b-col>
            <b-col sm="12">
                <b-container fluid class="">

                    <b-card bg-variant="primary text-white">
                        <h5 class="text-center "> 
                            Doppler Color
                        </h5>
                    </b-card>
                </b-container>
            </b-col>
            <b-col sm="12">
                <b-card bg-variant="dark">
                    <table class="table table-dark table-striped table-hover">
                        <tbody>
                            <tr>
                                <th style="width:10px">Patron Diastolico</th>
                                <th scope="col">
                                    <input v-model="patron" type="text" class="form-control">
                                </th>
                            </tr>
                            <tr>
                                <th>Valvulopatias</th>
                                <th scope="col">
                                    <input v-model="valvulopatias" type="text" class="form-control">
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </b-card>
            </b-col>
        </div>
        <b-col sm="12">
            <b-container fluid class="">

                <b-card bg-variant="primary text-white">
                    <h5 class="text-center "> 
                        Conclusion
                    </h5>
                </b-card>
            </b-container>
        </b-col>
        <b-col sm="12">
            <div class="alert alert-danger" role="alert" v-if="errors">
                <p v-for="error in errors" :key="error.index">
                    {{error[0]}}
                </p>
                
            </div>
            <b-card bg-variant="dark">
                <b-row>
                    
                    <b-col sm="8">
                        <!--<label for="conclusion" class="text-white"></label>-->
                        <select name="" id="" v-model="conclutionSelected" class="form-control">
                            <option v-for="data in conclutionOption" :key="data.index">{{data}}</option>
                        </select>
                    </b-col>
                    <b-col sm="4">
                        <button @click="agregarConclusion" class="btn btn-primary">Agregar conclusion</button>
                    </b-col>
                </b-row>
                <br>
                <br>
                <b-col sm="12">
                    <textarea v-model="conclusion" id="conclusion" class="form-control" type="textarea" ></textarea>
                </b-col> 
                
                <br>
                <br>
                
            </b-card>
            
        </b-col>
        
        <b-col sm="8" offset-sm="2" v-if="bandera==0">
            <button @click="saveStudio()" class="btn btn-success btn-block">Guardar estudio</button>
        </b-col>
        <b-col sm="8" offset-sm="2" v-if="bandera==1">
            <buttonWait />
        </b-col>
        <b-col sm="8" offset-sm="2" v-if="bandera==2">
            <button @click="generarPdf()" class="btn btn-success btn-block">Generar PDF</button>
            
        </b-col>
    </b-col>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'
import buttonWait from '../animation/ButtonWait'
import swal from 'sweetalert'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import moment from 'moment'
import html2canvas from 'html2canvas';
export default {
    components:{
        buttonWait,
    },
    data(){
        return{
            peso:75,
            altura:168,
            paciente_id:'',
            user_id:'',
            medico_solicitante:'',
            diagnostico:'',
            ad: '',
            area_ad: '',
            ddvd: '',
            ddvi: '',
            dsvi: '',
            fey: '',
            fac: '',
            siv: '',
            ppvi: '',
            ai: '',
            area_ai: '',
            ao: '',
            tricuspide_e: '',
            tricuspide_a: '',
            tricuspide_gmax: '',
            tricuspide_gmed: '',
            tricuspide_insuficiencia: '',
            pulmonar_vel: '',
            pulmonar_gmax: '',
            pulmonar_gmed: '',
            pulmonar_insuficiencia: '',
            mitral_e: '',
            mitral_a: '',
            mitral_gmax: '',
            mitral_gmed: '',
            mitral_insuficiencia: '',
            aortica_vel: '',
            aortica_gmax: '',
            aortica_gmed: '',
            aortica_insuficiencia: '',
            diametros: 'Ventriculo izquierdo no dilatado',
            auricula_izquierda: 'No dilatada',
            cavidades_derechas: 'No dilatadas, FSVD conservada',
            funcion: 'Funcion sistolica del ventriculo izquierdo conservada',
            espesor: 'Conservados',
            motilidad: 'Motilidad segmentaria normal',
            valvula_mitral: 'Sin alteraciones morfologicas',
            raiz_aorta: 'No dilatada, de caracteristicas normales',
            valvula_aortica: 'Trivalva, valvas finas, de apertura conservada',
            valvula_tricuspide: 'Trivalva, valvas finas, de apertura conservada',
            valvula_pulmonar: 'Trivalva, valvas finas, de apertura conservada',
            pericardio_masas: 'Ausencia de derrame pericardico y masas intracardiacas',
            vci: 'No dilatada con colapso conservado',
            tabiques: 'Indemnes',
            patron: 'Patron diastolico normal',
            valvulopatias:'Ausencia de valvulopatias',
            conclusion:'',
            img: '',

            conclutionOption:[
                'Estudio dentro de parametros normales',
                'Cardiopatia Hipertensiva',
                'Miocardiopatia dilatada con deterioro de la funcion sistolica del ventriculo izquierdo'
            ],
            conclutionSelected:'Estudio dentro de parametros normales',
            bandera: 0,
            errors:'',
            superficieCorporal:0,
        }
    },
    created(){
        this.redirect()
    },
    methods:{
        redirect(){
            if(!this.patient)this.$router.push('/estudios')
        },
        adValvulopatia(valvula, grado){
            this.valvulopatias = !this.tricuspide_insuficiencia && !this.mitral_insuficiencia && !this.pulmonar_insuficiencia && !this.aortica_insuficiencia  ? "Ausencia de valvulopatias":
                                    this.valvulopatias == "Ausencia de valvulopatias"?`insuficiencia ${valvula} ${grado}`: 
                                    `${this.valvulopatias}, insuficiencia ${valvula} ${grado}`
        },
        cavidadesDerechas(){
            if(this.ddvd>40 || this.area_ad>19){
                    
                this.cavidades_derechas = this.area_ad>=20?
                                                this.area_ad>30?
                                                    this.area_ad>40?`Dialacion severa de auricula derecha`:
                                                    `Dialacion moderada de Auricula derecha`:
                                                    `Dialacion leve de Auricula derecha`:
                                                    `Auricula derecha no dilatada`
                
                this.cavidades_derechas = this.ddvd>=40?
                                                this.ddvd>45?
                                                    this.ddvd>50?`${this.cavidades_derechas}, dialacion severa de ventriculo derecho, FSVD conservada`:
                                                    `${this.cavidades_derechas}, dialacion moderada de ventriculo derecho, FSVD conservada`:
                                                    `${this.cavidades_derechas}, dialacion leve de ventriculo derecho, FSVD conservada`:
                                                    `${this.cavidades_derechas}, ventriculo derecho no dilatado, FSVD conservada`
                
            }else{
                this.cavidades_derechas = 'No dilatadas, FSVD conservada'
            }
        },
        patronDiastolico(){
            this.patron = !this.mitral_a?"Patron diastolico mitral no evaluable por ausencia de onda A":
                            this.mitral_e<this.mitral_a?"Patron diastiloco mitral relajacion prolongada":
                            this.mitral_e/this.mitral_a>3?"Patron diastolico mitral restrictivo":
                            this.mitral_e/this.mitral_a>2?"Patron distolico mitral Pseudonormal":
                            "Patron diastolico mitral normal"

        },
        auriculaIzquierda(){
            this.auricula_izquierda = this.area_ai<20? "Auricula izquierda no dilata":
                                        this.area_ai<30 ? "Dilatacion leve de auricula izquierda":
                                        this.area_ai<40 ? "Dilatacion moderada de auricula izquierda":
                                        "Dilatacion severa de auricula izquierda"
        },
        ventriculoIzquierdo(){
            this.diametros = this.ddvi>55?this.ddvi>=60?this.ddvi>65?`Dilatacion severa del ventriculo izquierdo`:
                                                        `Dilatacion moderada del ventriculo izquierdo`:
                                                        `Dilatacion leve del ventriculo izquierdo`:
                                                        `Ventriculo izquierdo no dilatado`
        },
        fraccionEyeccion(){
            this.funcion = this.fey>50?"Funcion sistolica del ventriculo izquierdo conservada":
                            this.fey>40?"Deterioro leve de la funcion sistolica del ventriculo izquierdo":
                            this.fey>30?"Deterioro moderado de la funcion sistolica del ventriculo izquierdo":
                            "Deterioro severo de la funcion sistolica del ventriculo izquierdo"
        },
        superCorporal(){
            this.superficieCorporal =  0.007184 * Math.pow(this.peso,0.425) * Math.pow(this.altura,0.725)
        },
        espesorParietal(){

            if(this.ppvi && this.siv && this.ddvi && this.altura && this.peso){
                let data1 = Number(this.ddvi) + Number(this.siv) + Number(this.ppvi)
                data1 = Math.pow(data1/10,3)
                let data2 = Math.pow(this.ddvi/10,3)
                let epr = this.ppvi*2/ this.ddvi;
                let msvi = (0.8 * 1.04 * data1- data2) + 0.6
                let supCorporal = 0.007184 * Math.pow(this.peso,0.425) * Math.pow(this.altura,0.725)
                msvi = msvi /supCorporal
                
                this.espesor = epr>=0.45 && msvi>=135? `Hipertrofia Concentrica, EPR ${epr.toFixed(2)} y MVI ${msvi.toFixed(2)}`:
                                epr<0.45 && msvi>=135? `Hipertrofia Excentrica, EPR ${epr.toFixed(2)} y MVI ${msvi.toFixed(2)}`:
                                epr>=0.45 && msvi<135? `Remodelado concentrico, EPR ${epr.toFixed(2)} y MVI ${msvi.toFixed(2)}`:
                                `Conservado, EPR ${epr.toFixed(2)} y MVI ${msvi.toFixed(2)}`

            }
        },
        agregarConclusion(){
            this.conclusion = this.conclusion ==""?this.conclutionSelected: `${this.conclusion}, ${this.conclutionSelected}`
        },
        async saveStudio(){
            this.bandera++
            const estudio = {
                peso : this.peso,
                altura : this.altura,
                diagnostico: this.diagnostico,
                paciente_id : this.patient.id,
                user_id : this.user.id,
                medico_solicitante: this.medico_solicitante,
                ad : this.ad,
                area_ad : this.area_ad,
                ddvd : this.ddvd,
                ddvi : this.ddvi,
                dsvi : this.dsvi,
                fey : this.fey,
                fac : this.fac,
                siv : this.siv,
                ppvi : this.ppvi,
                ai : this.ai,
                area_ai : this.area_ai,
                ao : this.ao,
                tricuspide_e : this.tricuspide_e,
                tricuspide_a : this.tricuspide_a,
                tricuspide_gmax : this.tricuspide_gmax,
                tricuspide_gmed : this.tricuspide_gmed,
                tricuspide_insuficiencia : this.tricuspide_insuficiencia,
                pulmonar_vel : this.pulmonar_vel,
                pulmonar_gmax : this.pulmonar_gmax,
                pulmonar_gmed : this.pulmonar_gmed,
                pulmonar_insuficiencia : this.pulmonar_insuficiencia,
                mitral_e : this.mitral_e,
                mitral_a : this.mitral_a,
                mitral_gmax : this.mitral_gmax,
                mitral_gmed : this.mitral_gmed,
                mitral_insuficiencia : this.mitral_insuficiencia,
                aortica_vel : this.aortica_vel,
                aortica_gmax : this.aortica_gmax,
                aortica_gmed : this.aortica_gmed,
                aortica_insuficiencia : this.aortica_insuficiencia,
                diametros : this.diametros,
                auricula_izquierda : this.auricula_izquierda,
                cavidades_derechas : this.cavidades_derechas,
                funcion : this.funcion,
                espesor : this.espesor,
                motilidad : this.motilidad,
                valvula_mitral : this.valvula_mitral,
                raiz_aorta : this.raiz_aorta,
                valvula_aortica : this.valvula_aortica,
                valvula_tricuspide : this.valvula_tricuspide,
                valvula_pulmonar : this.valvula_pulmonar,
                pericardio_masas : this.pericardio_masas, 
                vci : this.vci,
                tabiques : this.tabiques,
                patron : this.patron,
                valvulopatias : this.valvulopatias,
                conclusion : this.conclusion
            }
            let token = localStorage.getItem('token')
            try {
                let response = await axios.create({
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                }).post('api/studyCreate', estudio)
                swal("Estudio creado correctamente",{
                    icon: "success"
                })
                this.bandera++
                //console.log(response)
            } catch (error) {
                this.bandera--;
                this.errors =error.response.data.errors
                
                swal({
                    icon: "error",
                    title: 'Ocurrio un error al guardar estudio ',
                    text: `por favor verifique los datos ingresados intente nuevamente ${error.response.data.message}`
                })
            }
        },
        async generarPdf(){
            moment.locale("es");
            let pdf = new jsPDF
            let date = moment().format('LLL')
            let image = document.querySelector('#logo')
            this.img = image.src
            
            pdf.setFontSize(22)
            pdf.addImage(this.img,'JPEG',16,15,0,0);
            pdf.text('Estudio cortesia de ECOCARDIOSOCIAL',35,25)
            pdf.setFontSize(17)

            pdf.autoTable({
                //styles: { fillColor: [255, 0, 0] },
                margin: { top: 40, left: 20, right: 40 },
                body: [
                    ['Nombre:', `${this.patient.nombre} ${this.patient.apellido}`,'|','Peso',`${this.peso}`],
                    ['Cobertura:', `${this.patient.cobertura}`,'|','Altura',`${this.altura}`],
                    ['Medico solicitante:', `${this.medico_solicitante}`,'|','Masa Corporal',`${this.superficieCorporal.toFixed(2)}`],
                    ['Diagnostico:', `${this.diagnostico}`,'|'],
                ],
            })
            pdf.setFontSize(22);
            pdf.autoTable({
                styles: { // Defaul style
                lineWidth: 0.01,
                lineColor: 0,
                fillStyle: 'DF',            
                halign: 'center',
                valign: 'middle',
                overflow: 'linebreak'
            },
                margin: {  left: 20,right: 10 },
                columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } },
                head: [[ 'Ecocardiograma Doppler color']],
            })
            //pdf.text('Ecocardiograma Doppler color',20,80)
            pdf.setFontSize(11);

            pdf.autoTable({
                //styles: { fillColor: [255, 0, 0] },
                margin: { left: 20,right: 10 },
                
                body: [
                    ['', '','|','Doppler','Veloc.','','Gradiente','Insuf.'],
                    ['AD:', `${this.ad}`,'|','','Pico','Max','Med',''],
                    ['AAD:', `${this.area_ad}`,'|',`Tricusp E`,`${this.tricuspide_e}`,`${this.tricuspide_gmax}`,`${this.tricuspide_gmed}`,`${this.tricuspide_insuficiencia}`],
                    ['AAD:', `${this.area_ad}`,'|',`Tricusp A`,`${this.tricuspide_a}`,`-`,`-`,`-`],
                    ['DDVD:', `${this.ddvd}`,'|',`Pulmonar`,`${this.pulmonar_vel}`,`${this.pulmonar_gmax}`,`${this.pulmonar_gmed}`,`${this.pulmonar_insuficiencia}`],
                    ['DDVI:', `${this.ddvi}`,'|',`Mitral E`,`${this.mitral_e}`,`${this.mitral_gmax}`,`${this.mitral_gmed}`,`${this.mitral_insuficiencia}`],
                    ['DSVI:', `${this.dsvi}`,'|',`Mitral A`,`${this.mitral_a}`,`-`,`-`,`-`],
                    ['FEY:', `${this.fey}`,'|',`Aortica`,`${this.aortica_vel}`,`${this.aortica_gmax}`,`${this.aortica_gmed}`,`${this.aortica_insuficiencia}`],
                    ['FAC:', `${this.fac}`,'|'],
                    ['SIV:', `${this.siv}`,'|'],
                    ['PPVI:', `${this.ppvi}`,'|'],
                    ['AI:', `${this.ai}`,'|'],
                    ['AAI:', `${this.area_ai}`,'|'],
                    ['AO:', `${this.ao}`,'|'],
                ],
            })
            pdf.autoTable({
                styles: { // Defaul style
                lineWidth: 0.01,
                lineColor: 0,
                fillStyle: 'DF',            
                halign: 'center',
                valign: 'middle',
                overflow: 'linebreak'
            },
                margin: {  left: 40,right: 40 },
                columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } },
                head: [[ 'Ecocardiograma']],
            })
            pdf.autoTable({
                //styles: { fillColor: [255, 0, 0] },
                margin: { left: 20, right: 10 },
                body: [
                    ['Diametros:', `${this.diametros}`],
                    ['Auricula Izquierda:', `${this.auricula_izquierda}`],
                    ['Cavidades Derechas:', `${this.cavidades_derechas}`],
                    ['Funcion sistolica:', `${this.funcion}`],
                    ['Espesor Parietal:', `${this.espesor}`],
                    ['Tabiques:', `${this.tabiques}`],
                    ['Motilidad Parietal:', `${this.motilidad}`],
                    ['Valvula Mitral:', `${this.valvula_mitral}`],
                    ['Raiz de Aorta:', `${this.raiz_aorta}`],
                    ['Valvula Aortica:', `${this.valvula_aortica}`],
                    ['Valvula Tricuspide:', `${this.valvula_tricuspide}`],
                    ['Valvula Pulmonar:', `${this.valvula_pulmonar}`],
                    ['Pericardio y Masas:', `${this.pericardio_masas}`],
                    ['Vena Cava Inferior:', `${this.vci}`],
                ],
            })
            pdf.autoTable({
                styles: { // Defaul style
                lineWidth: 0.01,
                lineColor: 0,
                fillStyle: 'DF',            
                halign: 'center',
                valign: 'middle',
                overflow: 'linebreak'
            },
                margin: {  left: 40,right: 40 },
                columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } },
                head: [[ 'doppler Color']],
            })
            pdf.autoTable({
                //styles: { fillColor: [255, 0, 0] },
                margin: { left: 20, right: 10 },
                body: [
                    ['Patron Diastolico:', `${this.patron}`],
                    ['Valvulopatias:', `${this.valvulopatias}`],
                ],
            })
            pdf.autoTable({
                styles: { // Defaul style
                lineWidth: 0.01,
                lineColor: 0,
                fillStyle: 'DF',            
                halign: 'center',
                valign: 'middle',
                overflow: 'linebreak'
            },
                margin: {  left: 40,right: 40 },
                columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } },
                head: [[ 'Conclusion']],
            })
            pdf.autoTable({
                //styles: { fillColor: [255, 0, 0] },
                margin: { left: 20, right: 10 },
                body: [
                    [`${this.conclusion}`],
                    
                ],
            })
             pdf.autoTable({
                //styles: { fillColor: [255, 0, 0] },
                margin: { left: 130, right: 10 },
                body: [
                    [`${this.user.name}`],
                    [`Medico ${this.user.especialidad}`],
                    [`M.P: ${this.user.mp} M.N:${this.user.mn}`],
                    
                ],
            })
            pdf.autoPrint();
            pdf.save(`${this.patient.nombre} ${this.patient.apellido}.pdf`)
        }
    
    },
    computed:{
        ...mapState('patients',['patient']),
        ...mapState(['user'])

    }
}
</script>
<style>
.tableW{
    width: 10px;
}
</style>