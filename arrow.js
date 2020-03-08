// function doubleIt (num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result);

console.log("---");

const addIt = (x,y) => x + y;
const sum = addIt(20,30);
console.log(sum); 

console.log("----");
const give5 = () => 5;
const result2 = give5();
console.log(result2);


console.log("----");
const doMath = (x,y) =>{
    const sum = x + y ;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath (7,5);
console.log(result3);