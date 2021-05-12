<template>
  <div class="test">
    <h1>This is an test page</h1>
	
  </div>
</template>
<script>

export default {
	data(){
		return {
			arr:[12,4,52,3,6,2653,5,]
		}
	},
	mounted(){
		// console.log(`buble sort ${this.bubleSort(this.arr)}`)
		console.log(`quick sort ${this.quickSort(this.arr)}`)
	},
	methods:{
		bubleSort(arr){
			for (let j = 0; j < arr.length; j++) {
				let complete = true;
				for (let i = 0; i < arr.length - 1 - j; i++) {
					if(arr[i] > arr [i + 1]){
						[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
						complete = false
					}
				}
				if(complete){
					break
				}
				
			}
			return arr
		},
		quickSort(arr){
			return _quickSort(arr)
		}
	}
}
function _quickSort(array) {
	if(array.length < 2){
		return array
	}
	let target = array[0]
	let left =  []
	let right  = []
	for (let index = 1; index < array.length; index++) {
		if(array[index] < target){
			left.push(array[index])
		}else{
			right.push(array[index])
		}
	}
	return _quickSort(left).concat([target], _quickSort(right))
}
</script>
<style>

</style>