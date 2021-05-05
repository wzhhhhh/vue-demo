import { defineProperty } from "./utils.js";
import defineReactive from "./defineReactive.js";
import observe from "./observe.js";
import { arrayMethods } from "./array.js";
import Dep from './Dep'

export default class Observer{
	constructor(value){
		console.log('this is Observer constructor')
		defineProperty(value, '__ob__', this, false)
		this.dep = new Dep()
		if(Array.isArray(value)){
			Object.setPrototypeOf(value, arrayMethods)
			this.observeArray(value)
		}else{
			this.walk(value)
		}
	}
	walk(obj){
		for (const key in obj) {
			defineReactive(obj, key, obj[key])
		}
	}
	observeArray(array){
		for (let index = 0; index < array.length; index++) {
			observe(array[index])
		}
	}
}