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
 
