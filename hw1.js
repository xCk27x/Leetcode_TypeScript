function inversions(n, list) {
    if (n <= 1)
        return 0;
    let re = 0;
    for (let i = 1; i < n; i++) {
        let j = i - 1;
        while (list[j] > list[j + 1] && j >= 0) {
            [list[j], list[j + 1]] = [list[j + 1], list[j]];
            re++;
            j--;
        }
    }
    return re;
}
// 2 3 8 6 1
console.log(inversions(5, [2, 3, 8, 6, 1]));
console.log(inversions(5, [6, 3, 8, 2, 1]));
console.log(inversions(2, [1, 0]));
console.log(inversions(2, [0, 1]));
console.log(inversions(1, [1]));
