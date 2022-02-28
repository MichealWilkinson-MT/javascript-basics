function negate(a) {
  return !a
};

function both(a, b) {
  return a && b
};

function either(a, b) {
  return a || b
};

function none(a, b) {
  return (a || b) == false
};

function one(a, b) {
  if (a && b) {
    return false
  };
  return a || b 
};

function truthiness(a) {
  if (a) {
    return true;
  }else{
    return false;
  }
};

function isEqual(a, b) {
  return a === b
};

function isGreaterThan(a, b) {
  return a > b
};

function isLessThanOrEqualTo(a, b) {
  return a <= b
};

function isOdd(a) {
  if (a % 2 === 0 ){
    return false;
  } else {
    return true;
  }
};

function isEven(a) {
  if (a%2 === 0){
    return true 
} else {
  return false 
}
};

function isSquare(a) {
  if(Math.sqrt(a) % 1 == 0){
    return true 
  }else {
    return false 
  }
};

function startsWith(char, string) {
  if(string.charAt(0) == char){
    return true
    } else {
      return false 
    }
};

function containsVowels(string) {
  const checker = ["a", "e", "i", "o", "u" ]
  string = string.toLowerCase()
  for ( i = 0; i < checker.length; i ++) {
    const letter  = checker[i]
    if (string.includes(letter)){
       return true 
    }
  }
  return false 
};

function isLowerCase(string) {
  if (string === string.toLowerCase()){
    return true
  } else {
    return false
  }
  
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
