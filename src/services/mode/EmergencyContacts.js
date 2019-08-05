class People {
	constructor(option={}) {
	    this.callUp = true;
		this.name = '';
		this.relation = '';
		this.companyName = '';
		this.addressArea = '请选择';
		this.phone = '';
		Object.assign(this,option)
	}
}

export default class EmergencyContacts extends Array {
	constructor(option=[]){
		super();
		if(!option) option = [];
		option.forEach(el=>{
			this.addPeople(el);
		})
	}
	addPeople(option={}){
		let people = new People(option);
		// return people;
		this.push(people);
	}
}