//Vowel Count

function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    )
      count++;
  }
  return count;
}

//Disemvowel Trolls

function disemvowel(str) {
  const newStr= str.replace(/a|e|i|o|u/gi, "");
  return newStr;
}

//Square Every Digit

function squareDigits(num){
  let res = "";
  num = num.toString();
  for (let i = 0; i < num.length; i++)
  {
    res = res + (num[i] * num[i]).toString();
  }
  return Number(res);
}

//Highest and Lowest

function highAndLow(numbers){
  let arr = '[' + numbers.split(" ").join(',') + ']'
  arr = JSON.parse(arr).sort((a,b) => a-b)
  return arr[arr.length-1] + " " +arr[0]
  
}
//Get the Middle Character

function getMiddle(s)
{
  const i = Math.floor(s.length / 2);
  let result = s[i];  
  if(s.length % 2 === 0 && i > 0) {
    result = s[i-1] + result;
  }
  return result;
}
