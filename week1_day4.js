function isPalindrome(string) {
    // Convert the string to lowercase for that a=a, instead of a!=A
    string = string.toLowerCase();
    // Reverse the string and then
    return string === string.split("").reverse().join("");
}


function containsPalindrome(string) {
    // Convert the string to lowercase
    string = string.toLowerCase();
    longestPalindrome = " ";
    // Iterate over string, this for loop is start character
    for (let i = 0; i < string.length; i++) {
        // loop over remaining characters for end characters
        for (let j = i + 1; j <= string.length; j++) {
            // Get the substring between i and j
            let substring = string.slice(i, j);
            // Check if the substring is a palindrome
            if (isPalindrome(substring)) {
                substring.length > longestPalindrome.length;
                longestPalindrome = substring;
            }
        }
    }
    if(longestPalindrome.length > 0) {
        return longestPalindrome;
    }
    else {
        return false;
    }
}

console.log(isPalindrome("pizza"));
console.log(containsPalindrome("pizza"))
console.log(isPalindrome("racecar"))
console.log(containsPalindrome("racecar"))