(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2debd2b6"],{"3ded":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-primary col-sm-12",attrs:{disabled:""}},[a("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Espere por favor... ")],1)])},n=[],o=a("2877"),s={},i=Object(o["a"])(s,r,n,!1,null,null,null);e["a"]=i.exports},"7c2b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("b-card",{staticClass:"overflow-hidden",attrs:{"bg-variant":"white","text-variant":"primary","body-border-variant":"primary"}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{attrs:{md:"12"}},[a("b-card-header",{attrs:{"header-border-variant":"primary","header-bg-variant":"primary","header-text-variant":"dark",align:"center"}},[a("h4",[t._v(t._s(t.postData.title))])])],1),a("b-col",{staticClass:"mt-2",attrs:{sm:"12",md:"6","offset-md":"3"}},[a("b-card-img",{staticClass:"rounded-0 btn-outline-primary",attrs:{src:t.dataUrl+t.postData.img,width:"100%",alt:"Image"}})],1),a("b-col",{attrs:{md:"12"}},[a("b-col",{staticClass:"mt-2",attrs:{md:"12"}}),a("b-card-body",{staticClass:"text-center",attrs:{title:"Horizontal Card","body-text-variant":"dark","border-variant":"primary"}},[a("b-card-text",[t._v(" "+t._s(t.postData.description)+" ")])],1)],1),t.user&&0==t.bandera?a("b-col",{attrs:{md:"4","offset-md":"8",sm:"12"}},[a("b-col",{attrs:{sm:"12"}},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.setLikes("like")}}},[t._v(" "+t._s(t.postData.like)+" like ")]),a("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.setLikes("dislike")}}},[t._v(" "+t._s(t.postData.dislike)+" dislike ")])],1)],1):t._e(),0!=t.bandera?a("b-col",{attrs:{md:"4","offset-md":"8",sm:"12"}},[a("buttonWait")],1):t._e(),a("br"),a("br"),a("b-col",{attrs:{md:"8","offset-md":"2",sm:"12"}},[a("button",{staticClass:"btn btn-warning btn-block",on:{click:function(e){return t.volver()}}},[t._v("volver")])])],1)],1),a("br"),t.error?a("div",{staticClass:"bg-danger text-white"},[t._v(" "+t._s(t.error.response.data.message)+" ")]):t._e(),a("b-card",{staticClass:"overflow-hidden",attrs:{"bg-variant":"secondary","text-variant":"white","body-border-variant":"primary"}},[a("div",{staticClass:"text-center"},[a("h1",[a("span",{staticClass:"badge badge-secondary"},[t._v("Comentarios")])])]),a("comments")],1)],1)},n=[],o=(a("7db0"),a("96cf"),a("1da1")),s=a("5530"),i=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[0==t.bandera?a("b-col",{attrs:{sm:"10",offset:"1"}},[a("b-button",{attrs:{variant:"primary btn-block"},on:{click:function(e){return t.cargarComentarios()}}},[t._v(" Cargar Comentarios ")])],1):a("div",[0!=t.bandera&&0==t.comentario?a("div",{staticClass:"text-center"},[a("br"),a("loading")],1):a("div",{staticClass:"text-left"},[t.comentarios?a("div",t._l(t.comentarios,(function(e){return a("div",{key:e.id,staticClass:"border-"},[t.user&&e.user_id==t.user.id?a("div",{staticClass:"row col-sm-8 offset-sm-4 border border-warning"},[a("div",{staticClass:"col-sm-6"},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"col-sm-6 badge-primary text-right"},[t._v(" "+t._s(t.getDateFormated(e.created_at))+" ")]),a("div",{staticClass:"col-sm-12 alert alert-secondary"},[t._v(" "+t._s(e.comentario)+" ")]),a("button",{staticClass:"offset-sm-8 col-sm-4 badge-danger btn btn-sm",on:{click:function(a){return t.deleteComentario(e.id)}}},[t._v(" eliminar ")])]):a("div",{staticClass:"col-sm-8 border border-warning row"},[a("div",{staticClass:"col-sm-6"},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"col-sm-6 badge-primary text-right"},[t._v(" "+t._s(t.getDateFormated(e.created_at))+" ")]),a("div",{staticClass:"alert alert-primary col-sm-12"},[t._v(" "+t._s(e.comentario)+" ")])])])})),0):t._e(),0==t.comentarios?a("div",{staticClass:"text-center"},[a("h2",[a("p",[t._v("No hay comentarios se el primero en hacerlo")])])]):t._e()]),a("div",{staticClass:"text-center"},[a("nav",[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item"},[t.pagination.current_page>1?a("button",{staticClass:"page-link",on:{click:function(e){return e.preventDefault(),t.changePage(t.pagination.current_page-1)}}},[t._v("Previous")]):t._e()]),t._l(t.paginated,(function(e){return a("li",{key:e,staticClass:"page-item",class:e==t.pagination.current_page?"active":"",on:{click:function(a){return a.preventDefault(),t.changePage(e)}}},[a("button",{staticClass:"page-link"},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item"},[t.pagination.current_page<t.pagination.last_page?a("button",{staticClass:"page-link",on:{click:function(e){return e.preventDefault(),t.changePage(t.pagination.current_page+1)}}},[t._v("Next")]):t._e()])],2)])]),a("br"),a("div",{staticClass:"text-left"},[a("formulario")],1)])],1)},u=[],d=a("2ecc"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.user&&0==t.bandera?a("form",{on:{submit:function(e){return e.preventDefault(),t.guardarPost(e)}}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Escriba su comentario:","label-for":"input-1",description:"Escriba su comentario"}},[a("b-form-input",{attrs:{id:"input-1",required:"",placeholder:"Comentario"},model:{value:t.comentario.comentario,callback:function(e){t.$set(t.comentario,"comentario",e)},expression:"comentario.comentario"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.recaptcha}},[t._v("Guardar")]),a("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Borrar")])],1):t._e(),t.user?t._e():a("div",{staticClass:"text-center"},[t._m(0)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("p",[t._v("Debes estar logueado para comentar")])])}],p=a("bc3a"),b=a.n(p),g=(b.a.create({baseURL:"http://localhost:8000/api"}),a("2f62")),v=a("1940"),f=a.n(v),h=i["default"].extend({components:{loading:d["a"]},data:function(){return{comentario:{user_id:"",post_id:"",comentario:""},bandera:0}},methods:Object(s["a"])(Object(s["a"])({},Object(g["b"])("comments",["saveComentarios","getComentarios"])),{},{guardarPost:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.bandera++,t.comentario.user_id=t.user.id,t.comentario.post_id=t.$router.history.current.params.id,e.prev=3,e.next=6,t.saveComentarios(t.comentario);case 6:return e.sent,t.comentario.comentario="",f()({title:"Comentario Guardado Correctamente",icon:"success"}),a={post_id:t.$router.history.current.params.id},e.next=12,t.getComentarios(a);case 12:t.bandera--,e.next=20;break;case 15:e.prev=15,e.t0=e["catch"](3),console.log(e.t0),f()({title:"El comentario no pudo ser procesado",icon:"danger"}),thisbandera--;case 20:case"end":return e.stop()}}),e,null,[[3,15]])})))()},recaptcha:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$recaptchaLoaded();case 2:return e.next=4,t.$recaptcha("login");case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))()}}),computed:Object(s["a"])({},Object(g["c"])(["user"]))}),_=h,C=a("2877"),x=Object(C["a"])(_,l,m,!1,null,null,null),k=x.exports,w=a("c1df"),y=a.n(w),j={components:{loading:d["a"],formulario:k},data:function(){return{bandera:0,comentario:0}},created:function(){},methods:Object(s["a"])(Object(s["a"])({},Object(g["b"])("comments",["getComentarios"])),{},{cargarComentarios:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.bandera++,a={post_id:t.$router.history.current.params.id},e.next=4,t.getComentarios(a);case 4:t.comentario++;case 5:case"end":return e.stop()}}),e)})))()},getDateFormated:function(t){return y.a.locale("es"),y()(t).format("DD/MM/YY hh:mm:ss")},changePage:function(t){var e={post_id:this.$router.history.current.params.id,page:t};this.pagination.current_page=t,this.getComentarios(e)},deleteComentario:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,f()({title:"¿Estas seguro de borrar este comentario?",text:"Una vez borrado, no podras recuperarlo!",icon:"warning",buttons:!0,dangerMode:!0});case 2:if(r=a.sent,1!=r){a.next=22;break}return a.prev=4,n=localStorage.getItem("token"),a.next=8,b.a.create({headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}}).delete("api/comentarioDelete/".concat(t));case 8:return a.sent,{id:e.user.id},o={post_id:e.$router.history.current.params.id},a.next=13,e.getComentarios(o);case 13:f()("Poof! tu comentario ha sido borrado!",{icon:"success"}),a.next=20;break;case 16:a.prev=16,a.t0=a["catch"](4),console.log(a.t0),f()("ha ocurrido un error!",{icon:"error"});case 20:a.next=23;break;case 22:f()("Tu POST esta seguro!",{icon:"success"});case 23:case"end":return a.stop()}}),a,null,[[4,16]])})))()}}),computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(g["c"])("comments",["comentarios","pagination","error"])),Object(g["c"])(["user"])),{},{paginated:function(){if(!this.pagination.to)return[];var t=this.pagination.current_page-2<=0?1:this.pagination.current_page-1,e=t+4>this.pagination.last_page?e=this.pagination.last_page:t+2,a=[];while(t<=e)a.push(t),t++;return a}})},O=j,D=Object(C["a"])(O,c,u,!1,null,null,null),$=D.exports,R=a("3ded"),P=i["default"].extend({components:{comments:$,buttonWait:R["a"]},data:function(){return{postData:"",bandera:0}},created:function(){this.buscarPost()},methods:Object(s["a"])(Object(s["a"])({},Object(g["b"])("post",["postId"])),{},{buscarPost:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.post&&(t.postData=t.post.find((function(e){if(e.id==t.$route.params.id)return e}))),""!=t.postData){e.next=5;break}return e.next=4,t.postId(t.$route.params.id);case 4:t.postData=t.postInfo;case 5:case"end":return e.stop()}}),e)})))()},volver:function(){this.$router.go(-1)},setLikes:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.bandera++,r={user_id:e.user.id,post_id:e.postData.id,tipo:t},n=localStorage.getItem("token"),a.prev=3,a.next=6,b.a.create({headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}}).put("api/likeDislike",r);case 6:return o=a.sent,a.next=9,e.postId(e.$route.params.id);case 9:swal({title:o.data.message,icon:"success"}),e.postData=e.postInfo,a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](3),swal({title:a.t0.message,icon:"error"});case 16:e.bandera--;case 17:case"end":return a.stop()}}),a,null,[[3,13]])})))()}}),computed:Object(s["a"])(Object(s["a"])({},Object(g["c"])("post",["postInfo","dataUrl","post","error"])),Object(g["c"])(["user"]))}),E=P,I=Object(C["a"])(E,r,n,!1,null,null,null);e["default"]=I.exports},"7db0":function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").find,o=a("44d2"),s=a("ae40"),i="find",c=!0,u=s(i);i in[]&&Array(1)[i]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)}}]);
//# sourceMappingURL=chunk-2debd2b6.96fbed61.js.map