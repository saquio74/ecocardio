<template>
    <b-col sm="12"  >
        <br>

        <b-col sm="12" md="8" offset-md="2" class="text-center">
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
                            <input class="form-control" type="text" >
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
                                <label class="text-white">AD</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="ad" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4" >
                                <label class="text-white">AAD</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="area_ad" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">DDVD</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="ddvd" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">DDVI</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="ddvi" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">DSVI</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="dsvi" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">FEY</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="fey" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">FAC</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="fac" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">SIV</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="siv" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">PPVI</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="ppvi" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label  class="text-white">AI</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="ai" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">AAI</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="area_ai" class="form-control" type="number" >
                            </b-col>
                            <b-col sm="4">
                                <label class="text-white">AO</label>
                            </b-col>
                            <b-col sm="8">
                                <input v-model="ao" class="form-control" type="number" >
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
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Tricusp A</th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Pulmonar</th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Mitral E</th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Mitral A</th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Aortica</th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
                            </th>
                            <th scope="col">
                                <input type="number" class="form-control">
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
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Auricula izquierda</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Cavidades Derechas</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Funcion sistolica</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Espesor Parietal</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Motilidad Parietal</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Valvula Mitral</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Raiz de Aorta</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Valvula Aortica</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Valvula Tricuspide</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Valvula Pulmonar</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Pericardio y Masas</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Vena Cava Inferior</th>
                            <th scope="col">
                                <input type="text" class="form-control">
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
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                        <tr>
                            <th>Insuficiencias</th>
                            <th scope="col">
                                <input type="text" class="form-control">
                            </th>
                        </tr>
                    </tbody>
                </table>
            </b-card>
        </b-col>
    </b-col>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            paciente_id:'',
            user_id:'',
            ad:'',
            area_ad:'',
            ddvd:'',
            ddvi:'',
            dsvi:'',
            fey:'',
            fac:'',
            siv:'',
            ppvi:'',
            ai:'',
            area_ai:'',
            ao:'',
            tricuspide_vel:'',
            tricuspide_gmax:'',
            tricuspide_gmed:'',
            tricuspide_insuficiencia:'',
            pulmonar_vel:'',
            pulmonar_gmax:'',
            pulmonar_gmed:'',
            pulmonar_insuficiencia:'',
            mitral_vel:'',
            mitral_gmax:'',
            mitral_gmed:'',
            mitral_insuficiencia:'',
            aortica_vel:'',
            aortica_gmax:'',
            aortica_gmed:'',
            aortica_insuficiencia:'',
            diametros:'',
            auricula_izquierda:'',
            cavidades_derechas:'',
            funcion:'',
            espesor:'',
            motilidad:'',
            valvula_mitral:'',
            raiz_aorta:'',
            valvula_aortica:'',
            valvula_tricuspide:'',
            valvula_pulmonar:'',
            vci:'',
            pericardio:'',
            masas_intracardiacas:'',
            tabique_interventricular:'',
            patron:'',
        }
    },
    created(){
    },
    methods:{
    
    },
    computed:{
        ...mapState('patients',['patient'])

    }
}
</script>
<style>
.tableW{
    width: 10px;
}
</style>