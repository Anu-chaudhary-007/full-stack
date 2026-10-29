let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

let newArr = arr.map((n) => {
    return n**2;
});
console.log(newArr);

nArr = arr.filter(n=>n>3);
console.log(nArr);

nArr = arr.find(n=>n>1);
console.log(nArr);

nArr = arr.reduce((sum,n)=>sum+=n,0);
console.log(nArr);