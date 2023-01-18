// Question 1
const isUpperCase = str => {
  return str===str.toUpperCase()
  };
  
  
  // Question 2
  const removeVowels = arr => {
    const reg = /[aeiou]/gi;
    return arr.map(word => word.replace(reg, ""));
  };
  
  // Question 3
  const wordCap = string => {
    string = string.toLowerCase(); return string.split(' ').map((x, i) => (x.length >= 1 ? (x[0] = x[0].toUpperCase()) + x.substring(1) : x)).join(' ');
  };
  
  // Question 4
  const swapCase = string => string.split('').map(x => (x === x.toUpperCase() ? (x.toLowerCase()) : x.toUpperCase())).join("");
  
  // Question 5
  const staggeredCase = str => {
    let char = 0;
  
    return str.split('').map(element => {
      if ((/[a-z]/i).test(element)) {
        if (char === 0) {
          char = 1;
          return element.toUpperCase();
        }
        char = 0;
        return element.toLowerCase();
      }
      return element;
    }).join('');
  };
  
  // Question 6
  const wordLengths = str => {
    if (!str) { return []; }
    return str.split(" ").map(word => `${word} ${word.length}`);
  };
  
  // Question 7
  const searchWord = (word, text) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    return text.split(" ").filter(word => word.match(regex)).length;
  };


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
