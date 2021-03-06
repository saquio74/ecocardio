<template>
    <div>
        <br>
        <b-card class="overflow-hidden" bg-variant="white" text-variant="primary" body-border-variant="primary" >
            <b-row no-gutters>
                <b-col md="12">

                    <b-card-header header-border-variant="primary"  header-bg-variant="primary" header-text-variant="dark" align="center" >
                        <h4>{{postData.title}}</h4>
                    </b-card-header>
                </b-col>
                <b-col sm="12" md="6" class="mt-2" offset-md="3">
                    <b-card-img :src="postData.img" width="100%" alt="Image" class="rounded-0 btn-outline-primary"></b-card-img>
                </b-col>
                <b-col md="12">
                    <b-col md="12" class="mt-2"></b-col>
                    <b-card-body title="Horizontal Card" class="text-center" body-text-variant="dark" border-variant="primary">
                        <b-card-text>
                            {{postData.description}}
                        </b-card-text>
                    </b-card-body>
                </b-col>
                <b-col md="4" offset-md="8" sm="12" v-if="user && bandera == 0">
                    <b-col sm="12">

                        <b-button variant="primary" @click="setLikes('like')">
                            {{postData.like}} like
                        </b-button>
                    

                        <b-button variant="danger" @click="setLikes('dislike')">
                            {{postData.dislike}} dislike
                        </b-button>
                    </b-col>
                </b-col>    
                <b-col md="4" offset-md="8" sm="12" v-if="bandera!=0">
                    <buttonWait />
                </b-col>
                <br>
                <br>    
                <b-col md="8" offset-md="2" sm="12">

                    <button class="btn btn-warning btn-block" @click="volver()">volver</button>
                </b-col>
            </b-row>
        </b-card>
        <br>
        <div class="bg-danger text-white" v-if="error">

            {{error.response.data.message}}
        </div>
        <b-card class="overflow-hidden" bg-variant="secondary" text-variant="white" body-border-variant="primary" >
            <div class="text-center">
                <h1>
                    <span class="badge badge-secondary">Comentarios</span>
                </h1>

            </div>
            <comments></comments>
        </b-card>
    </div>
</template>
<script >
import Vue from 'vue'
import comments from '../comments/Comments.vue'
import buttonWait from '../animation/ButtonWait'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
    components:{
        comments,
        buttonWait
    },
    data(){
        return{
            postData:'',
            bandera:0
        }
    },
    created(){
        this.buscarPost()
    },
    methods:{
        ...mapActions('post',['postId']),
        async buscarPost(){
            if(this.post!=''){

                this.postData = this.post.find((x)=>{
                    if(x.id == this.$route.params.id){
                        return x
                    }
                })
            }
            if(this.postData==''){
                await this.postId(this.$route.params.id)
                this.postData = this.postInfo
            }
        },
        volver(){
            this.$router.go(-1)
        },
        async setLikes(tipo){
            this.bandera++
            let data={
                user_id : this.user.id,
                post_id : this.postData.id,
                tipo : tipo
            }
            let token = localStorage.getItem("token");
            try {
                let response = await axios.create({
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                }).put('api/likeDislike',data)
                await this.postId(this.$route.params.id)
                swal({
                    title: response.data.message,
                    icon: "success",
                })
                this.postData = this.postInfo
            } catch (error) {
                swal({
                    title: error.message,
                    icon: "error",
                })
            }
            this.bandera--
        }
    },
    computed:{
        ...mapState('post',['postInfo','dataUrl','post','error']),
        ...mapState(['user'])
    },
    
    
})
</script>