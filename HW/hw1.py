import time
import random
import numpy as np
import matplotlib.pyplot as plt

def random_int_list(start, stop, length):
    start, stop = (int(start), int(stop)) if start <= stop else (int(stop), int(start))
    length = int(abs(length)) if length else 0
    random_list = []
    for i in range(length):
        random_list.append(random.randint(start, stop))
    return random_list

def inversions_merge(n, arr):
    if len(arr) <= 1:
        return arr, 0
    
    mid = len(arr) // 2
    left, inv_left = inversions_merge(n, arr[:mid])
    right, inv_right = inversions_merge(n, arr[mid:])
    
    merged, inv_split = merge(left, right)
    
    return merged, inv_left + inv_right + inv_split

def merge(left, right):
    merged = []
    inver_num = 0
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
            inver_num += len(left) - i
    
    merged.extend(left[i:])
    merged.extend(right[j:])
    
    return merged, inver_num

def inversions_insert(n, arr2):
    re = 0
    for i in range(1, n):
        j = i - 1
        while j >= 0 and arr2[j] > arr2[j + 1]:
            arr2[j + 1], arr2[j] = arr2[j], arr2[j + 1]
            j -= 1
            re += 1
    return re

x = []
y_merge = []
y_insert = []

for i in range(500):
    numArray = random_int_list(0, 1000, i)

    start_merge = time.time()
    _, count_merge = inversions_merge(i, numArray)
    end_merge = time.time()

    start_insert = time.time()
    count_insert = inversions_insert(i, numArray)
    end_insert = time.time()

    x.append(i)
    y_merge.append(end_merge - start_merge)
    y_insert.append(end_insert - start_insert)

plt.plot(x, y_merge, 'r')   # red line without marker
plt.show()
# plt.plot(x, y_insert, 'r')   # red line without marker
# plt.show()
