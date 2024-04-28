function compress(chars: string[]): number {
  const newChars = [...chars, ''];
  let i = 0;
  let count = 1;
  let times = 0;
  
  newChars.reduce((acc, char, index) => {
    if (acc === char) {
      count++;
    } else {
      chars.splice(i, count, acc + (count > 1 ? count : ''));
      i = index - count + 1 - times;
      times += count - 1;
      count = 1;
    }
    return char;
  })

  let n = chars.length;
  for (let i = 0; i < n; i++) {
    chars.push(...chars.shift()!.split(''));
  }

  return chars.length;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
