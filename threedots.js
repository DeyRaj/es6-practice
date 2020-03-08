const age = [22, 23, 24];
const ages2 = [15, 16, 17];
const ages3 = [35, 36, 37];
const allAges = age.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);
console.log("----");
const allAges2 = [...age, ...ages2, 5, ...ages3]; //smart style "three dots"
console.log(allAges2);

console.log("----");
console.log("Finding Maximum");
const a = 43;
const b = 53;
const c = 23;
const maximum = Math.max(a,b,c);
console.log(maximum);
const maxArray = [43, 53, 23];
const maximum1 = Math.max(...maxArray); // Three dot Magic
console.log(maximum1);


