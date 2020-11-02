<template>
    <div>
        <b-card class="overflow-hidden" bg-variant="primary" text-variant="white" body-border-variant="primary" >
            <b-row no-gutters>
                <b-col md="12">

                    <b-card-header header-border-variant="primary"  header-bg-variant="white" header-text-variant="dark" align="center" >
                        <h4>{{postData.title}}</h4>
                    </b-card-header>
                </b-col>
                <b-col sm="12" md="6" class="mt-2" offset-md="3">
                    <b-card-img :src="dataUrl+postData.img" width="100%" alt="Image" class="rounded-0 btn-outline-primary"></b-card-img>
                </b-col>
                <b-col md="12">
                    <b-col md="12" class="mt-2"></b-col>
                    <b-card-body title="Horizontal Card" class="text-center" body-text-variant="white" body-border-variant="primary">
                        <b-card-text>
                            {{postData.description}}
                        </b-card-text>
                    </b-card-body>
                </b-col>
                <b-col md="8" offset="2">

                    <button class="btn btn-danger btn-block" @click="volver()">volver</button>
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
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
    components:{
        comments
    },
    data(){
        return{
            postData:''
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
        }
    },
    computed:{
        ...mapState('post',['postInfo','dataUrl','post','error'])
    },
    
    
})
</script>