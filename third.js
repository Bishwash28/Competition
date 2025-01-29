//Write a function which calculates the average of the numbers in a given array.
const array = [23, 34, 45, 65, 21];

function getAvg(arr){
// Your Code Here
let sum=0;
for(let i=0; i < arr.length;i++){
    sum=sum+arr[i];
}
return sum/arr.length;
}

console.log(getAvg(array));