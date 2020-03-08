class Parent{
    constructor(){
        this.fatherName = "Dey";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name ;
    }
    getFullName(){
        return this.name + " " +this.fatherName;
    }
}

const baby = new Child ("Emon");
const baby2 = new Child ("Rajan");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName()); //baby full name with father's name
console.log(baby2.getFullName()); //baby2 full name with father's name
