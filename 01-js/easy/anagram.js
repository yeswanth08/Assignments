/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const one = String(str1).toLocaleLowerCase;
  const two = String(str2).toLocaleLowerCase;
  if (one.length !== two.length) return false;
  else{
    for (let a = 0; two.length>a; ++a){
      if (!(one.includes(two[a]))){
        return false;
      }
    }
  }
  return true;
}

console.log(isAnagram('School MASTER', 'The ClassROOM'));

module.exports = isAnagram;
