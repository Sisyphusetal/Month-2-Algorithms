def acronymMaker(string):
    stringArr = string.split()
    acronym = ""
    if len(stringArr) == 0:
        return "EZ acronym"
    for element in stringArr:
        acronym += element[0]

    return acronym.upper()

print(acronymMaker("Behold My Glory"))
print(acronymMaker("what is life?"))
print(acronymMaker("   Woah   those spaces  "))
print(acronymMaker(""))
