/*
    Recursive Binary Search

    Input: SORTED array of ints, int value
    Output: bool representing if value is found

    Recursively search to find if the value exists, do not loop over every element.

    Approach:
    Take the middle item and compare it to the given value.
    Based on that comparison, narrow your search to a particular section of the array
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

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
    //edge case - if searchNum isn't found
    if (sortedNums.length == 0){
        return false;
    }

    //find the middle index
    let midNum = Math.floor(sortedNums.length / 2);

    //edge case - if searchNum found at the middle index
    if (sortedNums[midNum] == searchNum){
        return true;
    }

    //search left or right half of the array recursively
    if (sortedNums[midNum] > searchNum) {
        //searching the left half (using slice to help us sort through a new array )
        return binarySearch(sortedNums.slice(0, midNum), searchNum);
    } else {
        //search the right half (creating right side array starts at midNum - adding 1 to include all of right side)
        return binarySearch(sortedNums.slice(midNum + 1), searchNum)
    }
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))

/*****************************************************************************/


// Solution Given by Aaron
function aaron_binarySearch(sortedNums, searchNum) {
    let leftIndx = 0, rightIndx = sortedNums.length;
    let searchIndx = Math.floor(sortedNums.length / 2);

    while (failCounter < 9) {
        if (sortedNums[searchIndx] == searchNum) {
            return true
        }
        else if (sortedNums[searchIndx] < searchNum) {
            leftIndx = searchIndx;
            searchIndx = Math.floor((rightIndx + leftIndx) / 2);
        }
        else if (sortedNums[searchIndx] > searchNum) {
            rightIndx = searchIndx;
            searchIndx = Math.floor((rightIndx + leftIndx) / 2);
        }
    }
    return false
}