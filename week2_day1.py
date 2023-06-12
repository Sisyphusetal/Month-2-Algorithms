arr1 = ["a", "a", "a"]
arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
arr3 = []

# def makeFrequencyTable(arr):
#     freqTable = {}
#     for element in arr:
#         if freqTable[element] > 0:
#             freqTable[element] += 1
#         else:
#             freqTable[element] = 0
#     return freqTable

# print(makeFrequencyTable(arr1))

def makeFrequencyTable(array):
    freqTable = {}
    for idx, val in enumerate(array):
        if val in freqTable:
            freqTable[val] += 1
        else:
            freqTable[val] = 1
    return freqTable

print(makeFrequencyTable(arr2))