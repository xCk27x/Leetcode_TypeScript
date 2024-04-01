let s = [[1 ,0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];

let r: number[][] = new Array(s.length).fill(Array(s.length).fill(0));

function lsc(): number {


}

// D[i][j] = max{ D[i-1][j-1] + s[i][j],
//                D[i-1][j] + s[-][j],
//                D[i][j-1] + s[i][-]
//             }