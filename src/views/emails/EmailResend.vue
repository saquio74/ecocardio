<template>
    <b-col sm="12" md="10" offset-md="1" class="text-center">
        <b-card 
        border-variant="danger"
        header="Su email no se encuentra confirmado todavia"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
         v-if="message==''">
            Hasta no confirmar su email no podra dar de alta pacientes ni generar estudios
            <button class="btn btn-primary" @click="resendEmail()">Click aqui para confirmar</button>
        </b-card>
        <b-card bg-variant="dark" text-variant="white" v-if="error">
            {{error}}
        </b-card>
        <b-card bg-variant="dark" text-variant="white" v-if="message">
            {{message}}
        </b-card>
    </b-col>
</template>
<script>
import Axios from 'axios'
import { mapState } from 'vuex'
export default {
    data(){
        return{
            message: '',
            error:''
        }
    },
    methods:{
        async resendEmail(){
            let data = {id: this.user.id}
            
            try {
                
                let response = await Axios.post('api/auth/email/resend',data)
                this.message = response.data.message
            } catch (error) {
                this.error = error    
            }

        }
    },
    computed:{
        ...mapState(['user'])
    }
}
</script>