<template>
    <div>
        <br>
        <b-button v-if="user" variant="dark" v-b-modal.postCreate>Crear Nuevo Post</b-button>
        <br>
        <div v-for="postData in post" :key="postData.id" class="text-center">
            <b-card class="overflow-hidden" bg-variant="white" text-variant="dark" body-border-variant="primary" >
                <b-row no-gutters>
                    <b-col md="12">

                        <b-card-header header-border-variant="primary"  header-bg-variant="primary" header-text-variant="white" align="center" >
                            <b-col md=12>

                                <h4>{{postData.title}}</h4>
                            </b-col>
                            <b-col md="12">
                                <h6>
                                    Autor: {{postData.name}}
                                </h6> 
                            </b-col>
                            <b-col md="12">
                                <h6>

                                    Fecha: {{getDateFormated(postData.created_at)}}
                                </h6>

                            </b-col>
                        </b-card-header>
                    </b-col>
                    <b-col md="3" class="mt-2">
                        <b-card-img :src="dataUrl+postData.img" width="100" alt="Image" class="rounded-0 outline-primary"></b-card-img>
                    </b-col>
                    <b-col md="9">
                        <b-col md="12" class="mt-2"></b-col>
                        <b-card-body title="Horizontal Card" body-text-variant="dark" body-border-variant="primary">
                            <b-card-text>
                                {{postData.description}}
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    <b-col md="4" offset="6">

                        <router-link class="btn btn-info btn-block" :to="{name: 'PostView',params: {id: postData.id}}">Ver Post</router-link>
                    </b-col>
                </b-row>

            
           
            </b-card>
            <br>
        </div>
        <div>
            
            {{pagination}}
            
        </div>
        <postCreate></postCreate>
    </div>
</template>
<script>

import post from '@/modules/post'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import postCreate from '../post/PostCreate.vue'
import moment from 'moment'
export default Vue.extend({
    components:{
        postCreate
    },
    data(){
        return{
            url:'',
        }
    },
    created(){
        this.getPost()
    },
    methods:{
        ...mapActions('post',['getPost']),
        getDateFormated(date){
            moment.locale('es');
            return moment(date).format('LLLL')
        }
    },
    computed:{
        ...mapState('post',['post','pagination','dataUrl']),
        ...mapState(['user']),
        
    },
})
</script>