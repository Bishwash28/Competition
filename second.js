//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.

const array = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

function getSum(array){
// Your Code Here
let sum=0;
for(let i=0;i<array.length;i++){
    sum=sum+Number(array[i]);
}
return sum;
}

console.log(getSum(array));