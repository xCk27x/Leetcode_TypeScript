"use strict";
function plusOne(digits) {
    let addNum = 1;
    let re = digits.reverse().map((num) => {
        let newNum = num + addNum;
        if (newNum == 10) {
            return 0;
        }
        else {
            addNum = 0;
            return newNum;
        }
    });
    if (addNum == 1)
        re.push(1);
    return re.reverse();
}
;
function plusOne2(digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(Number);
}
;
// let testlist1 = [1,2,3];
// let testlist2 = [0];
// let testlist3 = [9];
// let testlist4 = [9,9,9];
// console.log(plusOne(testlist1));
// console.log(plusOne(testlist2));
// console.log(plusOne(testlist3));
// console.log(plusOne(testlist4));
let testlist1 = [1, 2, 3];
let testlist2 = [0];
let testlist3 = [9];
let testlist4 = [9, 9, 9];
console.log(plusOne2(testlist1));
console.log(plusOne2(testlist2));
console.log(plusOne2(testlist3));
console.log(plusOne2(testlist4));
