const negate = a => {
return (!a)
};

const both = (a, b) => {
return a && b
};

const either = (a, b) => {
return ((a == true) || (b == true))
};

const none = (a, b) => {
return (!a == true && !b == true)
};

const one = (a, b) => {
if ((a == true && b == false) || (a == false && b == true))
return true
else return false
};

const truthiness = a => {
return !!a;
};

const isEqual = (a, b) => {
if (a == b)
return true
else return false
};

const isGreaterThan = (a, b) => {
return (a > b == true)
};

const isLessThanOrEqualTo = (a, b) => {
return (a <= b == true)
};

const isOdd = a => {
if (a % 2 ===1)
return true
else return false
};

const isEven = a => {
if (a % 2 ===0)
return true
else return false
};

const isSquare = a => {
Math.sqrt(a) % 1 === 0

};

const startsWith = (char, string) => {
if (string[0] === char)
return true
else return false
};

const containsVowels = string => {
if (string == "a" , "A" , "E" , "e" , "I" , "i" , "O" , "o" , "U" , "u")
{return true}
else {return false}
};

const isLowerCase = string => {
if (string === string.toLowerCase())
{return true}
else {return false}
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
  isLowerCase,
};