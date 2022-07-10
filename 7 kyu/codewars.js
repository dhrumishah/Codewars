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
