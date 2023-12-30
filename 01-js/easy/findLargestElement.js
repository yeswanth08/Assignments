/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length == 0){
        return null;
    }
    let ans = numbers[0];
    for (let a = 1; numbers.length>a; ++a){
        ans = Math.max(numbers[a],ans);
    }
    return ans;
}

console.log(findLargestElement(Array(2,3,45)));

module.exports = findLargestElement;