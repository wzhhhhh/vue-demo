import observe from "./observe.js";
import Dep from "./Dep";

export default function defineReactive(obj, key, value) {

	let childOb = observe(value)

	let dep = new Dep()

	Object.defineProperty(obj, key, {
		// writable: true,
		configurable: true,
		enumerable: true, 
		// value,
		get(){
			console.log(`正在试图访问${obj}的${key}属性`)
			if(Dep.target){
				dep.depend()
			}
			return value
		},
		set(newValue){
			if(value != newValue){
				console.log(`正在试图修改${obj}的${key}属性`)
				value = newValue
				childOb = observe(value)
				dep.notify();
			}
		}
	})
}