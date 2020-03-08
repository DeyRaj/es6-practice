class Student {
    constructor(sID , sName){
        this.id = sID;
        this.name = sName;
        this.school = "BAF Shaheen";
    }
}
const student1 = new Student(12, "Rajan");
const student2 = new Student(22, "Dey");
console.log(student1,student2);
console.log("----");
console.log(student1.id,student2.name); //property access
