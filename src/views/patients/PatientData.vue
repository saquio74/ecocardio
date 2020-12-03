<template>
    <div class="col-sm-12">
        
        <table class="table table-dark  table-striped table-hover">
            <tbody>
                <tr>
                    <td>
                        Nombre y Apellido
                    </td>
                    <td>
                        {{patient.nombre}} {{patient.apellido}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Tipo Documento
                    </td>
                    <td>
                        {{patient.tipo_dni}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Documento
                    </td>
                    <td>
                        {{patient.dni}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Fecha de Nacimiento
                    </td>
                    <td>
                        {{getDateFormated(patient.fecha_nacimiento)}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Edad
                    </td>
                    <td>
                        {{getYearsOld(patient.fecha_nacimiento)}} años
                    </td>
                </tr>
                <tr>
                    <td>
                        Provincia
                    </td>
                    <td>
                        {{patient.provincia}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Localidad
                    </td>
                    <td>
                        {{patient.localidad}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Direccion
                    </td>
                    <td>
                        {{patient.direccion}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Telefono
                    </td>
                    <td>
                        {{patient.telefono}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Celular
                    </td>
                    <td>
                        {{patient.celular}}
                    </td>
                </tr>
                <tr>
                    <td>
                        e-mail
                    </td>
                    <td>
                        {{patient.email}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Cobertura
                    </td>
                    <td>
                        {{patient.cobertura}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Tipo de Afiliado
                    </td>
                    <td>
                        {{patient.tipo_de_af}}
                    </td>
                </tr>
                <tr>
                    <td>
                        cuit o cuil
                    </td>
                    <td>
                        {{patient.cuit}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Numero de afiliado
                    </td>
                    <td>
                        {{patient.n_af}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
    methods:{
        getDateFormated(date){
            moment.locale('es');
            return moment(date).format('LL')
        },
        getYearsOld(date){
            return moment().diff(date, 'years');
        }
    },
    computed:{
        ...mapState('patients',['patient'])
    }    
}
</script>