<template>
	<div>
		this is GrantChild
		<div>{{message}}</div>
		<button @click="dispatch">通知祖先</button>
		<div>{{msg}}</div>
	</div>
</template>
<script>
export default {
	inject: ['message'],
	methods: {
		dispatch(){
			this.$dispatch('dispatch', 'this is a message from grandchild.')
		}
	},
	data(){
		return{
			msg: ''
		}
	},
	mounted(){
		this.$on('dispatchChildren', msg=>{
			this.msg = msg
		}),
		this.$bus.$on('busRegist', function (msg) {
			console.log(`bus message: ${msg}`)
		})
	},
}
</script>
