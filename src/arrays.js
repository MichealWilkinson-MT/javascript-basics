const getNthElement = (index, array) => {
  while (index >= array.length) {
    index=index-array.length;
  }
  return array[index]
};

const arrayToCSVString = array => {
  return array.join(",")
};

const csvStringToArray = string => {
  return string.split(",")
};

const addToArray = (element, array) => {   
  array.push(element)
};

const addToArray2 = (element, array) => {   
  let array2 = [...array];
  array2.push(element)
    return array2;
};

const removeNthElement = (index, array) => {   
  array.splice(index, 1)
  return array;
};

const numbersToStrings = numbers => {
  let output = []
  for (i = 0; i < numbers.length; i++){
    const number = numbers[i]
    output.push(number.toString())
  }
  return output;
};

const uppercaseWordsInArray = strings => {
  let output = []
  for (i = 0; i < strings.length; i++){
    const letters = strings[i]
    output.push(letters.toUpperCase())
  }
  return output;
};

const reverseWordsInArray = strings => {
  return
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  const array2 = [...array]
  array2.splice(index, 1)
  return array2;
};

const elementsStartingWithAVowel = strings => {
  let reg = /^[aeiou]/i
  return strings.filter(str => reg.test(str))
};

const removeSpaces = string => {
  return string.replace(/\s/g,'')
  
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
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
