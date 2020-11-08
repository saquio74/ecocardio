<template>
    <div>
        <form @submit.prevent="guardarPost" v-if="user && bandera == 0">
            <b-form-group
                id="input-group-1"
                label="Escriba su comentario:"
                label-for="input-1"
                description="Escriba su comentario"
            >
                <b-form-input
                id="input-1"
                v-model="comentario.comentario"
                required
                placeholder="Comentario"
                ></b-form-input>
            </b-form-group>
            
            <b-button type="submit" variant="primary" @click="recaptcha">Guardar</b-button>
            <b-button type="reset" variant="danger">Borrar</b-button>
        </form>
        <div class="text-center" v-if="!user">
            <h2>
                <p>Debes estar logueado para comentar</p>
            </h2>
        </div>
    </div>
</template>
<script>
import user from '@/api/user'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import swal from 'sweetalert'
import loading from '../animation/Loading'
export default Vue.extend({
    components:{
        loading
    },
    data(){
        return{
            comentario:{
                user_id:'',
                post_id:'',
                comentario:'',
            },
            bandera:0,
        }
    },
    methods:{
        ...mapActions('comments',['saveComentarios','getComentarios']),
        async guardarPost(){
            this.bandera++
            this.comentario.user_id = this.user.id
            this.comentario.post_id = this.$router.history.current.params.id 
            try {
                let response = await this.saveComentarios(this.comentario)
                this.comentario.comentario= ''
                swal({
                    title: "Comentario Guardado Correctamente",
                    icon: "success",
                })
                let pagina = {
                    post_id: this.$router.history.current.params.id,
                }
                await this.getComentarios(pagina)
                this.bandera--;
            } catch (error) {
                console.log(error)
                swal({
                    title: "El comentario no pudo ser procesado",
                    icon: "danger",
                })
                thisbandera--;
            }
            
        },
        async recaptcha() {
            // (optional) Wait until recaptcha has been loaded.
            await this.$recaptchaLoaded()
        
            // Execute reCAPTCHA with action "login".
            const token = await this.$recaptcha('login')
        
            // Do stuff with the received token.
        }
    },
    computed:{
        ...mapState(['user'])
        
    }
})
</script>