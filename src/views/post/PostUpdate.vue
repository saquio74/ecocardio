<template>
    <b-modal id="postUpdate" size="lg" hide-footer>
        <template v-slot:modal-title>
            Actualizar Post
        </template>
        <div class="d-block text-center">
        
            <form ref="form" @submit.prevent="guardarPost">
                <div class="form-group row mt-2">
                    <label for="staticEmail" class="col-sm-3 col-form-label">titulo</label>
                    <div class="col-sm-7">
                        <input required v-model="post.title" type="text" class="form-control" placeholder="titulo">
                    </div>
                </div>
                <div class="form-group row mt-2">
                    <label for="staticEmail" class="col-sm-3 col-form-label">Contenido</label>
                    <div class="col-sm-7">
                        <textarea required v-model="post.description" class="form-control" placeholder="Descripcion de tu Post"></textarea>
                    </div>
                </div>
                <div class="form-group row mt-2">
                    <label class="col-sm-3 col-form-label">Imagen del Post</label>
                    <div class="col-sm-7">
                        
                        <input type="file" id="file" accept="image/*" @change="upload">
                        <br>
                        <img id="img" :src="image" class="col-sm-12"/>
                    </div>
                </div>
                <div class="text-center">

                    <button class="btn btn-primary col-sm-8" type="submit">Actualizar Post</button>
                </div>
            </form>
        </div>
        
    </b-modal>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
    props:{
        postData:{

        }
    },
    data(){
        return{
            miniatura: '',
            post:{
                title:          '',
                description:    '',
                user_id:        '',
                img:            '',
            },
        }
    },
    methods:{
        upload(e) {
            this.post.user_id = this.user.id
            this.post.img = e.target.files[0]            
            this.loadImg(this.post.img)
        },
        loadImg(img){
            let reader = new FileReader();
            reader.onload = (e)=>{
                this.miniatura = e.target.result
            }
            reader.readAsDataURL(img)
        },
        async guardarPost(){
            const formData = new FormData();
            formData.append('id',this.post.id)
            formData.append('title',this.post.title)
            formData.append('description',this.post.description)
            formData.append('user_id',this.user.id)
            formData.append('img',this.post.img);
            try {
                let token = localStorage.getItem("token");
                let response = await axios.create({
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                }).post('api/postUpdate', formData)
                this.post.title = ''
                this.post.description = ''
                
                this.$notify({
                    group: 'foo',
                    title: '¡¡¡Listo!!!',
                    text: 'Post guardado exitosamente!!!!!',
                    type: 'success'
                });
                let url = {id: this.user.id}
                await this.getPost();
                await this.getMyPosts(url);
                this.$bvModal.hide('postUpdate')
            } catch (error) {
                console.log(error)
            }
        },
        mostrarDatos(){
            this.post.title = this.postData.title
            this.post.description = this.postData.description
            this.post.img = this.postData.img
            this.post.id = this.postData.id
        },
        ...mapActions('post',['getPost','getMyPosts'])
    },
    computed:{
        ...mapState(['user']),
        image(){
            return this.miniatura
        }
    },
    watch:{
        postData:{
            handler(){
                this.mostrarDatos()
            }
        }
    }
    
})
</script>