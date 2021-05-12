<template>
	<div>
		<div>this is child</div>
		<div>{{title}}</div>
		<button @click="postMessage">click me</button>
		<input type="text" v-model="text" @change="changeHandler"  />
		<slot></slot>
	</div>
</template>
<script>

function debodance() {
	
}
export default {
	data: function (params) {
		return	{
			text: ''
		}	
	},
	props:{
		title: String
	},
	mounted(){
		this.$bus.$on('busRegist', function (msg) {
			console.log(`bus message: ${msg}`)
		})
	},
	methods: {
		postMessage: function(){
			this.$emit('test', 'this is a message from child.')
		},
		changeHandler: function (params) {
			console.log(2222)
		}
	},
}
</script>
