const getNthElement = (index, array) => {
array.indexOf[index, 0];
};

const arrayToCSVString = array => {
return array.toString()
};

const csvStringToArray = string => {
return string.split(",");

};

const addToArray = (element, array) => {
array.push(element)
};

const addToArray2 = (element, array) => {
  // your code here
};

const removeNthElement = (index, array) => {
return array.splice(index, 1)

};

const numbersToStrings = numbers => {
return numbers.toString().split(",")
};

const uppercaseWordsInArray = strings => {
return strings.map(a => a.toUpperCase())
};

const reverseWordsInArray = strings => {
return strings.map(a => a.split("").reverse().join(""))
};

const onlyEven = numbers => {
return numbers.filter(num % 2 === 0)
};

const removeNthElement2 = (index, array) => {
return array.filter(e => e!== array [index])
};

const elementsStartingWithAVowel = strings => {
strings.map(a => a.startsWith("a", "e", "i", "o", "u"))
return strings
};

const removeSpaces = string => {
return string.replace(/\s/g, "")
};

const sumNumbers = numbers => {

};

const sortByLastLetter = strings => {
return strings.map (a => a.sortByLastLetter)

};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
