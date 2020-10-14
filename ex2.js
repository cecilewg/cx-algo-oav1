// 02 Panagram
// Create a function called IsAPangrams that will take one string, str as input.
// A pangram is a sentence that contains every letter of the alphabet.
// The goal of this function is to determine if the sentence given is a pangram or not.

function isAPangram (sentence) {
  const lowerSentence = sentence.toLowerCase()
  for (let char of 'abcdefghijklmnopqrstuvwxyz'){
    if (!lowerSentence.includes(char)){
         return false
       }
    }
  return true
}

console.log(isAPangram("The quick brown fox jumps over the lazy dog"))
console.log(isAPangram("Hello Efrei"))

// 2e solution
// const isPangram = (sentence) => {
//
//   const abc = 'abcdefghijklmnopqrstuvwxyz';
//   let lowerSentence = sentence.trim().toLowerCase();
//   for (let i = 0; i < abc.length; i++) {
//   if (lowerSentence.indexOf(abc[i]) === -1) {
//     return false;
//     }
//   }
//   return true;
// };

// return false d'abord car si on met return true en premier, la fonction va s'arreter et ne va pas continuer le code
