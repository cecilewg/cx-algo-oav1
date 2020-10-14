// 01 HowManyCamelCase
// Create a function called howManyCamelCase that will take one string input str.
// We are given a sequence of words that are sandwiched together with no space.
// With the exception of the first word, in all of the subsequent words, the first letter of each word is capitalized.

// The goal of the function is to output the number of words that are in the camelcase string

function isUpperCase (character) {
  if (character.match(/^[A-Z]/)) {
    return true
  } else {
    return false
  }
}

function howManyCamelCase (str) {
  if(!str) {
    return 0
  }

  var words = 1  //apple

  for (i = 0; i < str.length; i++) {
    if(isUpperCase(str[i])) {
      words += 1
    }
  }
  return words
}

// console.log(howManyCamelCase('appleOrangePearGrapes')) => 4
