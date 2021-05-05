export default class Dep{
	constructor(){
		this.subs = [];
	}
	addSub(sub){
		this.subs.push(sub)
	}
	depend(){
		if(Dep.target){
			this.addSub(Dep.target)
		}
	}
	notify(){
		console.log(this.subs)
		this.subs.forEach((sub)=>{
			console.log('sswwwww')
			sub.update();
		})
	}
}