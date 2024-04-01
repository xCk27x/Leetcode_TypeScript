function minimumLevels(possible) {
    let sum = 0;
    for (let i of possible) {
        sum += i === 1 ? 1 : -1;
    }
    let temp = 0;
    let i = 0;
    for (let p of possible.slice(0, possible.length - 1)) {
        i++;
        temp += p === 1 ? 1 : -1;
        if (temp > sum - temp)
            return i;
    }
    return -1;
}
;
console.log(minimumLevels([1, 0, 1, 0])); // 1
console.log(minimumLevels([1, 1, 1, 1, 1])); // 1
console.log(minimumLevels([0, 0])); // 1
console.log(minimumLevels([1, 1])); // 1
