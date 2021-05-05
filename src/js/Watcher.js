import Dep from "./Dep";

export default class Watcher{
	constructor(target, expression, callback){
		this.target = target;
		this.expression = expression;
		this.callback = callback;
		this.getter = parsePath(expression)
		this.value = this.get()
	}
	get(){
		/**
		 * 每个watcher实例的时候将自己放入一个全局唯一的变量中，
		 * 然后读取一次数据，在读取数据时通过全局唯一变量添加到对应数据的wtachers中，
		 * 在每一次改变这个数据时，通知所有添加的watcher实例更新
		 * 
		 * 全局唯一变量作用
		 * 1. 区分是watcher要添加依赖还是普通的读取
		 * 2. 添加依赖
		 */
		Dep.target = this;

		const obj = this.target;
		var value;
		try{
			value = this.getter(obj)
		}finally{
			Dep.target = null;
		}
		return value
	}
	update(){
		this.run()
	}
	run(){
		this.getAndInvoke(this.callback)
	}
	getAndInvoke(cb){
		const value = this.get();
		if(value !== this.value || typeof value == 'object'){
			const oldValue = this.value;
			this.value = value;
			cb.call(this.target, value, oldValue)
		}
	}
}


function parsePath(str) {
	let segements = str.split('.')
	return (obj) => {
		for (let index = 0; index < segements.length; index++) {
			obj = obj[segements[index]];
		}
		return obj
	}
}