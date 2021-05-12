<template>
  <div class="data">
    <h1>This is an data page</h1>
  </div>
</template>
<script>
import defineReactive from "../js/defineReactive.js";
import observe from "../js/observe.js";
import Watcher from "../js/Watcher.js";
let obj= {
	a: {
		m: {
			n:33
		}
	},
	b:60,
	c:[1,2,3,4]
}
observe(obj)
new Watcher(obj, 'a.m.n', (val, oldVal)=>{
	console.log('⭐️⭐️⭐️⭐️⭐️⭐️',val,oldVal)
})
// obj.a.m.n++
// obj.a.m.n++
// obj.a.m.n++
// obj.a.m.n++
// obj.b++  
// obj.a.m.n++
// obj.c.splice(2,1,{a: 777})
export default{

}
</script>
