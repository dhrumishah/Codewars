//Who likes it?

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//Bit Counting

var countBits = function(n) {
  var binary = n.toString(2).match(/1/g) != null ? n.toString(2).match(/1/g).length : 0;
  return binary;
}

// Find the odd int

function findOdd(A) {
    var dict = {};
    A.forEach(e => {
        dict[e] = dict[e]+1 || 1 
    })

    for(k in dict)
        if(dict[k]%2) return +k 
}

// Array.diff

function arrayDiff(a, b) {
  return a.filter(el => !b.includes(el));
}
