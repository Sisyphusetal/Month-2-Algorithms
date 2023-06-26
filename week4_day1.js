/* 
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */

// num == 5
function recursiveSigma(num) {

    // Decrease the value of num for each itteration.
    // End condition is when num is 0?

    let int = parseInt(num);

    if (int < 1) {
        return 0;
    }
    return int + recursiveSigma(int - 1)

}


console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))


/*****************************************************************************/

recursiveSigma(num1)

/* 
    Recursively sum an arr of ints    
*/

const nums1 = [1, 2, 3];
const expected1_1 = 6;

const nums2 = [1];
const expected2_1 = 1;

const nums3 = [];
const expected3_1 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i, sum) {
    if(i == nums.length) {
        return sum;
    }
    
    let spot = nums[i];
    sum += spot;

    return sumArr(nums, i+1, sum)
}

console.log(sumArr(nums1,0,0))
console.log(sumArr(nums2,0,0))
console.log(sumArr(nums3,0,0))