def reverseString(string):
    return string[::-1]

print(reverseString("Sorrow"))

def forwardString(string):
    reversedString = ""
    for letter in string:
        reversedString = letter + reversedString
    return reversedString

print(forwardString("Happy"))


