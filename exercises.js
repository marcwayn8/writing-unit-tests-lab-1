const isUpperCase = (string) => {
  return string.split('').every((char) => char === char.toUpperCase() && /[a-zA-Z]/.test(char));
};

const removeVowels = (array) => {
  return array.map((string) => string.replace(/[aeiouAEIOU]/g, ''));
};

const wordCap = (string) => {
  return string.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

const swapCase = (string) => {
  return string.split('').map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
};

const staggeredCase = (string) => {
  let isUpper = true;
  return string.split('').map((char) => {
      if(/[a-zA-Z]/.test(char)) {
          isUpper = !isUpper;
          return isUpper ? char.toUpperCase() : char.toLowerCase();
      } else {
          return char;
      }
  }).join('');
};

const wordLengths = (string) => {
  return string.split(' ').map((word) => word + ' ' + word.length);
};



const searchWord = (word, text) => {
  let count = 0;
  let lowerText = text.toLowerCase();
  let lowerWord = word.toLowerCase();
  let startIndex = 0;
  while (startIndex !== -1) {
    startIndex = lowerText.indexOf(lowerWord, startIndex);
    if (startIndex !== -1) {
      count++;
      startIndex += word.length;
    }
  }
  return count;
}



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
