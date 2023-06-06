function reverseString(str) {
    let reversedString = "";
    for(let i=str.length-1; i>=0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(reverseString("Happy"));


function forwardReverse(str) {
    let reversedString = ""
    for(let i=0; i<str.length; i++) {
        reversedString = str[i] + reversedString;
    }
    return reversedString;
}

console.log(forwardReverse("Sorrow"));