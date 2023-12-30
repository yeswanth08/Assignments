/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const size = str.length;
  const value =   str.toLowerCase();;
  for (let a = 0;size/2>a; ++a){
    if (value[a] !== value[size-a-1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
