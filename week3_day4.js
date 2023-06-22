/* 
    Array: Binary Search (non recursive)

    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’ (Continually split in half!),
    taking advantage of the fact that the array is sorted .

    Bonus (alumni interview): 
        first complete it without the bonus, because they ask for additions
        after the initial algo is complete

        return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */

// Note: The values in the array are assumed to be SORTED from least to greatest.
function binarySearch(sortedNums, searchNum) {
    //starting number
    let firstNum = 0;
    //last number of array
    let lastNum = sortedNums.length-1;

    //while firstNum is less than or = to lastNum we complete the following...
    while (firstNum <= lastNum) {
        //identify mid number 
        let midNum = Math.floor((firstNum + lastNum) / 2);
        //if statement to see if mid number = targeted searchNum
        if (sortedNums[midNum] == searchNum) {
            //number matches, return true
            return true;
        //if midNum is < target, then...
        } else if (sortedNums[midNum] < searchNum) {
            //firstNum becomes midNum+1
            firstNum = midNum + 1;
            //firstNum becomes midNum-1
        } else {
            lastNum = midNum - 1;
    }
}
    //then return false
    return false;
    
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))
// console.log(binarySearch(nums4, searchNum4))


// Working on bonus answer
// function binarySearch(sortedNums, searchNum) {
//     //starting number
//     let firstNum = 0;
//     //last number of array
//     let lastNum = sortedNums.length-1;
//     let midNum = Math.floor((firstNum + lastNum) / 2);


//     while (firstNum <= lastNum) {
//         if (midNum > searchNum) {
//             midNum = Math.floor(lastNum/midNum)
//         } 

//         else if (midNum < searchNum) {
//             midNum = Math.floor(midNum/firstNum)
//         } 

//         else {
//             let count =
//     }
// }
//     return false;
// }