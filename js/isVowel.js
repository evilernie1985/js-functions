// isCharacterAVowel(num)

// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

// input = string
// output = boolean
// if input === a,e,i,o,u, return true
// else return false

function isVowel(x) {
  var result;
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
    result = true
  } else {
    result = false
  }
  console.log(result)
}

isVowel("a")

//always returns true. why?!
//fixed. Why (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") and not (x === "a", "e", "i", "o", "u")
