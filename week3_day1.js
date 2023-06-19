const nums1 = [-2, 5, 7, 0, 1, 2];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1,2,5,5,7,2,1,3,6,-134,24,75,24,57,65,75,10,55,35,46,56,4,1,1,0,3,4,5,8]
const expected3 = 16;

function balanceIndex(nums) {
    // check if nums length is valid
    if (nums.length < 3){
        // return -1 if length is too short
        return -1
    }
    // set empty check variables.
    let leftSum = 0, rightSum = 0;
    // iterate through whole array
    for (let i = 1; i < nums.length-1; i++){
        // iterate through left side of array
        for (let j = 0; j < i; j++){
            leftSum += nums[j];
        }
        // iterate through right side of array
        for (let k = i+1; k < nums.length; k++){
            rightSum += nums[k];
        }
        // check if left/right sides match
        if (leftSum == rightSum){
            return i
        }
        // reset counters
        leftSum = 0;
        rightSum = 0;
    }
    return -1
}
console.log(balanceIndex(nums1)) // expected 2
console.log(balanceIndex(nums2)) // expected -1
console.log(balanceIndex(nums3)) // expected 16