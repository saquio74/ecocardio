<template>
    <div>
        <postCreate></postCreate>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import postCreate from '../post/PostCreate.vue'
export default Vue.extend({
    components:{
        postCreate
    }
})
</script>