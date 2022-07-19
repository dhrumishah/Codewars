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

//Find the smallest integer in the array 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    const sortedArray =  args.sort(function(a, b){return a - b})
    return sortedArray[0];
    }
}

//Remove String Spaces

function noSpace(x){
 let newStr= x.split(' ').join('')
 return newStr
}

//Square(n) Sum

function squareSum(numbers){
  const newArr= numbers.map(x => x**2)
  let sum=0;
  for (let i = 0; i < newArr.length; i++) {
    sum+=newArr[i];  
  }
  return sum;
}

//Grasshopper - Summation

var summation = function (num) {
  const number= num;
   let res = 0;
   for(let i = 1; i <= number; i++){
      res += i;
   };
   return res;
};

// Counting sheep...

function countSheeps(arrayOfSheep) {
  let count = 0;
  for( let i = 0; i < arrayOfSheep.length; i ++) {
    if(arrayOfSheep [i]) count += 1
  }
  return  count
  }

// Function 1 - hello world

greet = function() {
  return "hello world!";
}

// Convert a String to a Number!

const stringToNumber = function(str){
   num= Number(str)
  return num;
}

// Keep Hydrated!

function litres(time) {
  let val= time*0.5;
  return Math.trunc(val)
}
