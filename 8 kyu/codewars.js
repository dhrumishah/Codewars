//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}

//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
  let counter = -1;
  let oppositeNumber = counter * number;
  return oppositeNumber;
}

// We need a function that can transform a number into a string.
//What ways of achieving this do you know?

function numberToString(num) {
  let str = num.toString();
  return str;
}

//Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
  return bool === true ? "Yes" : "No";
}


//Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('');  
}

//Return Negative

function makeNegative(num) {
  return num > 0 ? num * -1 : num;
}

//Sum of positive

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      }
  }
  return sum;
}


//String repeat

function repeatStr (n, s) {
  let t = s;
  for(let i=0; i<n-1; i++ ){
    t = t + s;
  }
  return t;
}

//Remove First and Last Character

function removeChar(str){
  return str.slice(1, str.length-1)
};
