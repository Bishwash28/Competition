//Write a function which calculates the average of the numbers in a given array.
const array = [23, 34, 45, 65, 21];

function getAvg(arr){
// Your Code Here
let arrasum=0;
for(let i=0;i<=array.length;i++){
    arrasum= arrasum+array[i];
}
return arrasum;
}
console.log(getAvg(array));