function isPalindrome(word) {
  let characters = word.split("")
  let reverse = []
  
  for (let i = characters.length - 1; i >= 0; i--) {
    const element = characters[i];
    reverse.push(element)
  }

  if (characters.join("") == reverse.join("")) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome("max"))
/* 
  function must first separate the passed 'word' into each individual character of the 'word', stored in a new array
  then iterate through that array but backwards
  and only return true if backwards === forwards
*/

/*
  used built-in .split() method to separate each character of passed in word and stored that to its own array
  used a for loop to iterate through the characters array from the last index, backward, and end at the first index
  created an empty array to store each element from the for loop
  used the built-in .push() method to automatically store each individual element into the reverse array, as it was being iterated over
  lastly, created a conditional that stated if the original array matched the reversed array to return true & false if not; however, I had to re-join all of the individual characters in each of those arrays so i could compare each array as strings, so i used the .join() method inside of the conditional
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
