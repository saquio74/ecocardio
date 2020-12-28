<template>
    <div>

        <b-card class="text-center">
            <form action="" @submit.prevent="searchPatient()">
                <div>
                    <div class="primary text-light col-md-8 col-sm-12">
                        <b-row>
                            <b-col sm="4" >
                                <label for="" class="text-dark">paciente</label>
                            </b-col>
                            <b-col sm="8">
                                <input required v-model="dni" type="number" class="form-control" placeholder="Ingrese DNI">
                            </b-col>
                        </b-row>
                    </div>
                    <div class="text-danger alert-danger col-sm-12" v-if="paciente=='' && bandera!=0">
                        <div  v-if="paciente==''">
                            <br>
                            no existe el paciente, si desea crearlo haga click aqui
                            <br>
                            <font-awesome-icon :icon="['fas','arrow-down']"/>
                            <br>
                            
                            <b-button variant="primary" to="/patientform">Crear Paciente</b-button>
                            <br>
                            <br>
                        </div>
                    </div>
                    <br>
                </div>
                <div class="text-light offset-md-4 col-md-4 col-sm-12">
                    <b-button type="submit" variant="dark">
                        Buscar Paciente
                    </b-button>
                </div>
            </form>
        </b-card>
        <div v-if="patient.id>0" class="card text-center">
            <b-col sm="12">
                <b-button v-if="ruta=='estudios'"  to="/newstudy" variant="dark">
                    Seleccionar Paciente
                </b-button>
                <b-button  to="/updatepatientform" variant="dark">
                    modificar Paciente
                </b-button>
            </b-col>

            <patientData />
        </div>
        <div v-else>

        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import patientData from '../patients/PatientData.vue'
export default {
    components:{
        patientData
    },
    data(){
        return{
            dni:'',
            paciente:'',
            bandera:0,
            ruta:''
        }
    },
    created(){
        this.searchPatient(),
        this.verificarConfirmed(),
        this.obtenerRuta()
    },
    methods:{
        ...mapActions('patients',['getPatient']),
        async searchPatient(){
            this.ruta =this.$route.name
            if(this.dni!==''){
                await this.getPatient(this.dni)
                this.paciente = this.patient
                this.bandera++
            }
        },
        verificarConfirmed(){
            if(this.user.email_verified_at==null) this.$router.push('/email/resend')
        },
        obtenerRuta(){
            
            if(!this.user){
                this.$router.push('/login')
            }
        }
    },
    computed:{
        ...mapState('patients',['patient','error']),
        ...mapState(['user'])
    }
    
}
</script>