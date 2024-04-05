// function maxDepth(s: string): number {
//   if (s.length <= 1) {
//     if (s !== '(' && s !== ')') return 0;
//   }
//   for 
//   return 1 + maxDepth(s.slice(s.indexOf('('), s.indexOf(')') + 1));  
// };
function maxDepth(s) {
    let depth = 0;
    let max = 0;
    for (let c of s) {
        if (c === '(') {
            depth++;
            max = Math.max(max, depth);
        }
        else if (c === ')') {
            depth--;
            max = Math.max(max, depth);
        }
    }
    return max;
}
;
console.log(maxDepth('(1+(2*3)+((8)/4))+1')); // 3
console.log(maxDepth('(1)+((2))+(((3)))')); // 3
console.log(maxDepth('1+(2*3)/(2-1)')); // 1
