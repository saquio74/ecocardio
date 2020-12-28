<template>
    <div>
        Estado de verificacion = {{verificacion}}
        {{error}}
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            id:'',
            code:'',
            error:'',
            verificacion:''
        }
    },
    created(){
        this.getUrlData()
    },
    methods:{
        async getUrlData(){
            this.id = this.$route.params.id;
            this.code = this.$route.params.code;
            try {
                
                let response  = await axios.get(`api/auth/email/verify/${this.id}/${this.code}`)
                this.verificacion = response.data.response
                this.$router.push('/')
            } catch (error) {
                this.error = error
            }
        }
    }
    
}
</script>