def isPalindrome(string):
    string = string.lower()
    return string == string[::-1]

print(isPalindrome("pizza"))
print(isPalindrome("Racecar"))