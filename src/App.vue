<template>
	<div>
		
		
			<header-component></header-component>
		<b-container>
			<router-view />
			<notifications group="foo" />
		</b-container>

	</div>
</template>
<script >

import Vue from 'vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import headerComponent from '../src/views/Header'
export default Vue.extend({
	
	components:{
		headerComponent,
	},
	methods:{
		...mapActions(['logout']),
	},
	computed:{
		...mapState([ 'user'])
	}
})
</script>

