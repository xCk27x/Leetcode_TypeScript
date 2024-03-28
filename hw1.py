def inversions(arr):
    if len(arr) <= 1:
        return arr, 0
    
    mid = len(arr) // 2
    left, inv_left = inversions(arr[:mid])
    right, inv_right = inversions(arr[mid:])
    
    merged, inv_split = merge(left, right)
    
    return merged, inv_left + inv_right + inv_split

def merge(left, right):
    merged = []
    inversions = 0
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
            inversions += len(left) - i
    
    merged.extend(left[i:])
    merged.extend(right[j:])
    
    return merged, inversions

n = int(input())
numArray = list(map(int, input().split()))

_, count = inversions(numArray)
print(count)