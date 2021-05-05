import { defineProperty } from "./utils";

const arrayPrototype = Array.prototype;

//以数组的prototype 为原型创建对象
export const arrayMethods = Object.create(arrayPrototype)


const arrayNeedChange = [
	'push',
	'pop',
	'shift',
	'unshift',
	'splice',
	'sort',
	'reverse'
]

arrayNeedChange.forEach(methodName => {
	//备份原数组方法
	let original = arrayMethods[methodName];

	defineProperty(arrayMethods, methodName, function () {
		console.log(this)
		let ob = this.__ob__;
		let inserted = [];
		let args = [...arguments]
		switch (methodName) {
			case 'push':
			case 'unshift':
				inserted = args;
				break;
			case 'splice':
				inserted = args.slice(2);
		}
		if(inserted.length != 0){
			ob.observeArray(inserted)
		}
		console.log('array update')
		ob.dep.notify();
		return original.apply(this, arguments)
	},false)
})

