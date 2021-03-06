<template>
    <div>
        <br>
        <b-button v-if="user" variant="outline-dark" v-b-modal.postCreate>Crear nuevo post</b-button>
        <b-button v-if="user" variant="outline-dark" to="/post">Ver todos los posts</b-button>
        <br>
        <div v-if="myPost==0" class="col-sm-12 text-center">
            <br>
            <br>
            <loading />  
        </div>
        <div v-for="postData in myPost" :key="postData.id" class="text-center">
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
                        <b-card-img :src="postData.img" width="100" alt="Image" class="rounded-0 outline-primary"></b-card-img>
                    </b-col>
                    <b-col md="9">
                        <b-col md="12" class="mt-2"></b-col>
                        <b-card-body title="Horizontal Card" body-text-variant="dark" body-border-variant="primary">
                            <b-card-text>
                                {{postData.description}}
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    <b-col md="2" sm="12" offset-md="6">
                        <button class="btn btn-warning btn-block" @click="setPost(postData)" v-b-modal.postUpdate>Modificar</button>
                    </b-col>
                    <b-col md="2" sm="12">
                        <button class="btn btn-danger btn-block" @click="borrarPost(postData.id)">borrar</button>
                    </b-col>
                </b-row>

            
           
            </b-card>
            <br>
        </div>
        <div>
            <nav>
                <ul class="pagination">
                    <li class="page-item"><button class="page-link" v-if="myPagination.current_page>1" @click.prevent="changePage(myPagination.current_page-1)">Previous</button></li>
                    <li class="page-item" v-for="page in paginated" :key="page" @click.prevent="changePage(page)" v-bind:class="page == myPagination.current_page ? 'active':''"><button class="page-link">{{page}}</button></li>
                    <li class="page-item"><button class="page-link" v-if="myPagination.current_page<myPagination.last_page" @click.prevent="changePage(myPagination.current_page+1)">Next</button></li>
                </ul>
            </nav>

        </div>
        <postCreate></postCreate>
        <postUpdate v-bind:postData="postInfo"></postUpdate>
    </div>
</template>
<script >
import Vue from 'vue'
import swal from 'sweetalert'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
import postCreate from '../post/PostCreate.vue'
import postUpdate from '../post/PostUpdate.vue'
import loading from '../animation/Loading.vue'

import moment from 'moment'
export default Vue.extend({
    components:{
        postCreate,
        postUpdate,
        loading
    },
    data(){
        return{
            url:{},
            postInfo:{},
        }
    },
    created(){
        
        this.sinPost()
        
    },
    methods:{
        ...mapActions('post',['getMyPosts']),
        getDateFormated(date){
            moment.locale('es');
            return moment(date).format('LLLL')
        },
        sinPost(){
            if(!this.user)this.$router.push('/post');
            else this.getPost();
        },
        async getPost(page){
            if(page){
                this.url.id = this.user.id
                this.url.page = page
                await this.getMyPosts(this.url)
            }else{

                this.url.id = this.user.id
                await this.getMyPosts(this.url)
            }
        },
        changePage(page){
            this.myPagination.current_page = page;
            this.getPost(page);
        },
        setPost(data){
            this.postInfo = data
        },
        async borrarPost(id){
            let verificar = await swal({
                title: "¿Estas seguro de borrar este POST?",
                text: "Una vez borrado, no podras recuperarlo!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            if(verificar === true){
                try {
                    let token = localStorage.getItem("token");
                    let response = await axios.create({
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    }).delete(`api/postDelete/${id}`)
                    let url = {id: this.user.id}
                    await this.getPost();
                    await this.getMyPosts(url);
                    swal("Poof! tu POST ha sido borrado!", {
                        icon: "success",
                    });
                }catch(error){
                    console.log(error)
                    swal("ha ocurrido un error!", {
                        icon: "error",
                    });
                }
            }else{
                swal("Tu POST esta seguro!",{
                    icon: "success",
                });
            }
        }
    },
    computed:{
        ...mapState('post',['myPost','myPagination','dataUrl']),
        ...mapState(['user']),
        paginated(){
            if(!this.myPagination.to){
                return[]
            }
            let from = (this.myPagination.current_page-2 <= 0) ? 1:this.myPagination.current_page -1
            let to = from + (2*2)>this.myPagination.last_page ? to = this.myPagination.last_page :from + (2*1)
            const pageArray = []
            while(from<=to){
                pageArray.push(from)
                from++;
            }
            return pageArray
        }
    }
})
</script>