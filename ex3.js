// Create a function called marsos that will take in one string str as input.
// A spaceship is sent to Mars but crashes.
// It sends a series of “SOS” messages to Earth for help.
// Due to cosmic radiation, some of the “SOS” messages were altered during transmission.
//
// The goal of the function is to determine how many letters were altered during transmission.

const message = "SOS"

function marsos (str) {
  const splitStr = str.match(/.{1,3}/g)
  // =>  ["SOF", "SOS", "SIS", "SOW"]
  var count = 0

  for (i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== message) {
      count += 1
    }
  }
  return count
}

console.log(marsos("SOFSOSSISSOW"))
// SOFSOSSISSOW => 3
