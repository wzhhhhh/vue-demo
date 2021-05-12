import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


class Bus{
	constructor(){
		this.callbacks = {}
	}
	$on(eventName, cb){
		this.callbacks[eventName] = this.callbacks[eventName] || [];
		this.callbacks[eventName].push(cb)
	}
	$emit(eventName, args){
		if(this.callbacks[eventName]){
			this.callbacks[eventName].forEach(cb=>{
				cb(args)
			})
		}
	}
}

Vue.prototype.$bus = new Bus();


Vue.prototype.$dispatch = function (eventName, data) {
	let parent = this.$parent;
	while (parent) {
		parent.$emit(eventName, data)
		parent = parent.$parent
	}
}
Vue.prototype.$boardcast = function (eventName, data) {
	boardcast.call(this, eventName, data)
}

function boardcast(eventName, data) {
	this.$children.forEach(child => {
		child.$emit(eventName, data)
		if(child.$children.length){
			boardcast.call(child, eventName, data)
		}
	});
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
