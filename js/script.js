console.log("linked to my html");

//fn that checks numbers with the random numbers
function higherOrLower(guessedNum, randomNumber) {
  if (guessedNum < randomNumber) {
    alert("guess higher")
  } else if (guessedNum > randomNum) {
    alert("guess lower")
    } else {
    alert("correct")
  }

  }

// fn that generates randomNum
// min and max always a whole number
// random number bewteen min and max (exclusive)

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

//alert randomNumber
