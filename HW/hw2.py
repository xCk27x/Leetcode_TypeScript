import time
import random
import string

def generate_random_string(length):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for _ in range(length))

def LCS(text1: str, text2: str) -> int:
  text2D = [[0] * (len(text2) + 1) for _ in range(len(text1) + 1)]

  for i in range(1, len(text1) + 1):
    for j in range(1, len(text2) + 1):
      if text1[i - 1] == text2[j - 1]:
        text2D[i][j] = text2D[i - 1][j - 1] + 1
      else:
        text2D[i][j] = max(text2D[i - 1][j], text2D[i][j - 1])

  return text2D[len(text1)][len(text2)]

def LCS2(text1, text2):
  if not text1 or not text2:
    return 0
  
  if text1[-1] == text2[-1]:
    return LCS2(text1[:-1], text2[:-1]) + 1
  else:
    return max(LCS2(text1[:-1], text2), LCS2(text1, text2[:-1]))

s1List = []
for i in range(100):
  s1List.append(generate_random_string(10))

s2 = generate_random_string(3)

print ('s1長度為 10, s2長度為 3\n計算執行100次的時間\n')

start = time.time()
for i in s1List:
  LCS(i, s2)
end = time.time()
print('DP:執行時間：%f 秒' % (end - start))


start = time.time()
for i in s1List:
  LCS2(i, s2)
end = time.time()
print('Recursive: 執行時間：%f 秒' % (end - start))