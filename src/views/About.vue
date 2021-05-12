<template>
  <div class="about">
    <h1>This is an about page</h1>
	<Child @test="sayHi"  title="this is message from father">
		<GrantChild /> 
	</Child>
	<div>{{msg}}</div>
	<button @click='postChildren'>通知子元素</button>
	<button @click='bus'>busss</button>
  </div>
</template>
<script>
import Child from "../components/Child";
import GrantChild from "../components/GrantChild";
export default {
	data(){
		return {
			msg: ''
		}
	},
	mounted(){
		this.$on('dispatch',function(msg){
			console.log(msg)
			this.msg = msg
		})
	},
	provide: {
		message:'this is a message from provide api.'
	},
	components:{
		Child,
		GrantChild
	},
	methods:{
		sayHi(message){
			console.log(message)
		},
		postChildren(){
			this.$boardcast('dispatchChildren', 'this is a message from grandfather.')
		},
		bus(){
			this.$bus.$emit('busRegist', 'bussssss')
		}
	}
}

</script>
<style>

</style>