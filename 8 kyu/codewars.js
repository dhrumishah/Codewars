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
