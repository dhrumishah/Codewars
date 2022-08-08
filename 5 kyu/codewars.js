// The Hashtag Generator

function generateHashtag(str) {
  if (str.trim() === "") return false;

  const strWithCameCase = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const strWithHash = "#" + strWithCameCase;

  return strWithHash.length > 140 ? false : strWithHash;
}

//Last digit of a large number

var lastDigit = function(str1, str2){  
   return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), (+str2.slice(-2) % 4 || 4)) % 10
}
 
// Moving Zeros To The End

function moveZeros(arr) {
  let zero = []
  let others = []
  let together = []
  
    for (let i =0; i <= arr.length-1; i++){
      if (arr[i] === 0){
        zero.push(arr[i])
        }
      else{ 
        others.push(arr[i])
      }
    }
  together = others.concat(zero)
  return together
}

// Number of trailing zeros of N!

function zeros (n) {
  let count=0
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);
  
  return count;
}

// String incrementer

function incrementString(str) {
  const body = str.slice(0, -1);
  const lastDigit = str.slice(-1).match(/[0-9]/);
  return lastDigit === null
    ? str + "1"
    : lastDigit != 9
    ? body + (+lastDigit + 1)
    : incrementString(body) + "0";
}

// Valid Parentheses

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
