let arr =[1,2,3,4,5];
let newArr = arr.map(n=>n*n);
console.log(newArr);

let filteredArr = arr.filter(n=>n%2===0);
console.log(filteredArr);

let foundArr = arr.find(n=>n>3);
console.log(foundArr);

let redArr = arr.reduce((sum,n)=>sum+n,0);
console.log(redArr);

const sum = ((a,b)=>a+b);
console.log(sum(51,10));





    