<template>
    <div class="row justify-content-md-center">
        <b-card-group deck class="col-sm-9   mt-3"> 
            <b-card title="Formulario de Ingreso" header-tag="header" footer-tag="footer">
                <form  @submit.prevent="guardarPost">
                    <div class="form-group row mt-2">
                        <label for="staticEmail" class="col-sm-3 col-form-label">titulo</label>
                        <div class="col-sm-7">
                            <input v-model="post.title" type="text" class="form-control" placeholder="titulo">
                        </div>
                    </div>
                    <div class="form-group row mt-2">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Contenido</label>
                        <div class="col-sm-7">
                            <textarea v-model="post.description" class="form-control" placeholder="Descripcion de tu Post"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="exampleFormControlFile1">Imagen del Post</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                    <button type="submit" class="btn btn-primary"> Guardar</button>
                </form>
                {{post}}

            
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
            post:{
                title:          '',
                description:    '',
                user_id:        ''
            }
        }
    },
    methods:{
        async guardarPost(){
            this.post.user_id = this.user.id
            this.$store.dispatch('savePost',this.post)
        }
    },
    computed:{
        ...mapState(['user'])
    }
})
</script>