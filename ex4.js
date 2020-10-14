// 04 Hello, Array
// 4.1 Count
// Create a function that take an array as an input and calculate the number of occurrences of a given element in an array.

function getOccurence (array, char) {
  count = 0
  for (i = 0; i < array.length; i++) {
    if (array[i] == char) {
      count += 1
    }
  }
  return count
}
// console.log(getOcurence(['apple', 'apple', 'apple', 'orange', 'pear'], 'apple'))
// => 3



// 4.2 Average
// Create a function that calculate the average of the elements of an array.

function getAverage (array) {
  return array.reduce((a, b) => a + b, 0) / array.length
}
// console.log(getAverage([12, 15, 20, 10])) => 14,25



// 4.3 Min
// Create a function that calculate the minimum of the elements of an array.

function getMin (array) {
  var num = array[0]

  for (i = 0; i < array.length; i++) {
    if (array[i] < num) {
      num = array[i]
    }
  }
  return num
}
// console.log(getMin([15, 12, 20, 10])) => 10

// 2e solution raccourci
// function getMin (array) {
//   return Math.min.apply(Math, array)
// }



// 4.4 Max
// Create a function that calculate the maximum of the elements of an array.

function getMax (array) {
  var num = array[0]

  for (i = 0; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i]
    }
  }
  return num
}
// console.log(getMax([12, 15, 20, 10])) => 20

// 2e solution raccourci
// function getMax (array) {
//   return Math.max.apply(Math, array)
// }



// 4.6 Shift
// Create a function that shift the elements of an array.
// function getShift (array) {
//   array.shift()
//   return array
// }

function getShift (array) {
  var newArray = []
  for (i = 1; i < array.length; i++) {
    newArray.push(array[i])
  }
  return newArray
}
 // console.log(getShift([1, 2, 3])) => [2, 3]



// 4.7 Diff
// Create a function that calculates the largest deviation in an array (the deviation is the absolute value of the difference of two elements)
function getDiff (array) {
  var difference = getMax(array) - getMin(array)
  return Math.abs(difference)
}
// console.log(getDiff([1, 2, 3, 4])) => 3
