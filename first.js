//Find the sum of all the elements of the provided arrays.

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

function getSumOfArrays(arrayOne, arrayTwo) {
  // Your Code Here
  let sum = 0;
  for (let i = 0; i < arrayOne.length; i++) {
    sum = sum + arrayOne[i];
  }

  for (let i = 0; i < arrayTwo.length; i++) {
    sum = sum + arrayTwo[i];
  }

  return sum;
}

console.log(getSumOfArrays(arrayOne, arrayTwo));
