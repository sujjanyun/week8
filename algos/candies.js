// 2. CANDIES

// add extraCandies to each index of the array and then one at a time, we need to check and see if it made the number greater than or equal to each of the other numbers

// if greater > other number = true
// else = false

// candies = [2,3,5,1,3]
// extraCandies = 3
// expected output is t, t, t, f, t

// need var i for index at i
// need empty array to return boolean to

// need a way to test the max value of all the other items in array when for loop is on particular index

// LONG WAY
const extraCandies = 3;
let arr = [2,3,5,1,3]

function addCandies(arr) {
    let isBiggest = [];
    let bigNum = 0
    for (let i=0; i < arr.length; i++) {
        if (arr[i] >= bigNum) {
            bigNum = arr[i]
        }
    }
    for (j = 0; j < arr.length; j++) {
        let newCandies = arr[j] + extraCandies;
        if (newCandies >= bigNum) {
            isBiggest.push(true);
        }   else {
            isBiggest.push(false);
        }
    }
    return isBiggest;
}

console.log(addCandies(arr, extraCandies));