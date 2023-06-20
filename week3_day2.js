/* 
    Given a SORTED array of integers, dedupe the array 
    Because array elements are already in order, all duplicate values will be grouped together.

    Ok to use a new array

    Bonus: (no nested loops, new array ok)
    Bonus: Do it in-place (no new array)

*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */

function dedupeSorted(nums) {
    let arr = [];
    for (let i=0; i<nums.length; i++) {
        arr.push(nums[i]);
        if (nums[i] == nums[i+1]) {
            arr.pop(nums[i]);
        }
    } return arr;
}

console.log(dedupeSorted(nums1));
console.log(dedupeSorted(nums2));
console.log(dedupeSorted(nums3));
console.log(dedupeSorted(nums4));