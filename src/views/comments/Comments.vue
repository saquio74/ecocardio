<template>
    <div>
        <b-col sm="10" offset="1" v-if="bandera==0">

            <b-button variant="primary btn-block"  @click="cargarComentarios()">
                Cargar Comentarios
            </b-button>
        </b-col>
        <div v-else>

            <div class="text-center" v-if="bandera!=0 && comentario==0">
                <br>
                <loading />
            </div>
            <div class="text-left" v-else>
                <div v-if="comentarios">

                    <div v-for="comentario in comentarios" :key="comentario.id" class="border-">

                        <div class="row col-sm-8 offset-sm-4 border border-warning" v-if="user && comentario.user_id == user.id">
                            <div class="col-sm-6">
                                {{comentario.name}}
                            </div>
                            <div class="col-sm-6 badge-primary text-right">
                                {{getDateFormated(comentario.created_at)}}
                            </div>
                            <div class="col-sm-12 alert alert-secondary" >
                                {{comentario.comentario}}
                            </div>
                            <button class="offset-sm-8 col-sm-4 badge-danger btn btn-sm" @click="deleteComentario(comentario.id)">
                                eliminar
                            </button>
                        </div>
                        <div class="col-sm-8 border border-warning row" v-else>
                            <div class="col-sm-6">
                                {{comentario.name}}
                            </div>
                            <div class="col-sm-6 badge-primary text-right">
                                {{getDateFormated(comentario.created_at)}}
                            </div>
                            <div class="alert alert-primary col-sm-12" >
                                {{comentario.comentario}}
                            </div>
                        </div>

                    </div>
                </div>
                <div class="text-center" v-if="comentarios==0">
                    <h2>
                        <p>No hay comentarios se el primero en hacerlo</p>
                    </h2>
                </div>
            </div>
            <div class="text-center">
                <nav>
                    <ul class="pagination">
                        
                        <li class="page-item"><button class="page-link" v-if="pagination.current_page>1" @click.prevent="changePage(pagination.current_page-1)">Previous</button></li>
                        <li class="page-item" v-for="page in paginated" :key="page" @click.prevent="changePage(page)" v-bind:class="page == pagination.current_page ? 'active':''"><button class="page-link">{{page}}</button></li>
                        <li class="page-item"><button class="page-link" v-if="pagination.current_page<pagination.last_page" @click.prevent="changePage(pagination.current_page+1)">Next</button></li>
                        
                    </ul>
                </nav>
            </div>
            <br>
            <div class="text-left">
                <formulario />
            </div>
        </div>

    </div>
</template>
<script>
import loading from '../animation/Loading.vue'
import formulario from '../comments/CommentsForm.vue'
import axios from 'axios'
import moment from 'moment'
import swal from 'sweetalert'
import { mapActions, mapState } from 'vuex'
//import GoogleMapsApiLoader from 'google-maps-api-loader'
export default {
    components:{
        loading,
        formulario
    },
    data(){
        return{
            bandera: 0,
            comentario:0,
        }
    },
    created(){

    },
    methods:{
        ...mapActions('comments',['getComentarios']),
        async cargarComentarios(){
            this.bandera++
            let pagina = {
                post_id: this.$router.history.current.params.id,
            }
            await this.getComentarios(pagina)
            
            this.comentario++
        },
        getDateFormated(date){
            moment.locale('es');
            return moment(date).format('DD/MM/YY hh:mm:ss')
        },
        changePage(page){
            let pagina = {
                post_id: this.$router.history.current.params.id,
                page: page
            }
            this.pagination.current_page = page;
            this.getComentarios(pagina);
        },
        async deleteComentario(id){
            let verificar = await swal({
                title: "¿Estas seguro de borrar este comentario?",
                text: "Una vez borrado, no podras recuperarlo!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            if(verificar == true){
                 try {
                    let token = localStorage.getItem("token");
                    let response = await axios.create({
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    }).delete(`api/comentarioDelete/${id}`)
                    let url = {id: this.user.id}
                    let pagina = {
                        post_id: this.$router.history.current.params.id,
                    }
                    await this.getComentarios(pagina)
                    
                    swal("Poof! tu comentario ha sido borrado!", {
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
        ...mapState('comments',['comentarios','pagination','error']),
        ...mapState(['user']),
        paginated(){
            if(!this.pagination.to){
                return[]
            }
            let from = (this.pagination.current_page-2 <= 0) ? 1:this.pagination.current_page -1
            let to = from + (2*2)>this.pagination.last_page ? to = this.pagination.last_page :from + (2*1)
            const pageArray = []
            
            while(from<=to){
                pageArray.push(from)
                from++;
            }
            return pageArray
        }
    }
}
</script>