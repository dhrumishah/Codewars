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

// Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2) 
}

// Returning Strings

function greet(name){
  let n= name
  return `Hello, ${n} how are you doing today?`
}

//  Convert number to reversed array of digits

function digitize(n) {
  return n.toString().split('').reverse().map(str => Number(str))
}

// Beginner - Lost Without a Map

function maps(x){
  return x.map(el=>el*2)
}

// Sum of odd numbers

function rowSumOddNumbers(n) {
	return n**3
}
//Century From Year

function century(year) {
  return Math.floor(year/100) + ((year%100) ? 1 : 0);
}

// Convert a Boolean to a String

function booleanToString(b){
  return b.toString()
}

// You Can't Code Under Pressure #1

function doubleInteger(i) {
  return i*2;
}

// Abbreviate a Two Word Name

function abbrevName(name){
  return name.split(" ").map(el => el[0].toUpperCase()).join(".")
}

// Count by X

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n ; i++){
   z.push(x*i) 
  }
  
  return z;
}

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
    return this.split("").map(arr => arr === arr.toUpperCase()? arr.toLowerCase(): arr.toUpperCase()).join('');
}

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
    let positiveNum = 0;
    let negativeNum = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNum++ : negativeNum += num);
    }
    return [positiveNum , negativeNum];
}

//Beginner Series #2 Clock

function past(h, m, s){
  let hour= h*3600000;
  let min=m*60000;
  let sec=s*1000;
  let miliseconds= hour+min+sec;
  return miliseconds
}

// A Needle in the Haystack

function findNeedle(haystack) {
   let needle= (element)=> element=="needle"
   return `found the needle at position ${haystack.findIndex(needle)}`
}

// MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase()
}

// Beginner Series #1 School Paperwork

function paperwork(n, m) {
  if(m<0 || n<0){
    return 0;
  }else{
    return m*n;
  }
}

// Invert values

function invert(array) {
   return array.map(x=>x*-1)
}

// Opposites Attract

function lovefunc(flower1, flower2){
  if(flower1%2==0&&flower2%2!==0 || flower2%2==0&&flower1%2!==0 ){
    return true
  }else
    return false
}
