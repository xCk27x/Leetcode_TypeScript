/*
上：maze[entrance[0] - 1][entrance[1]]
右：maze[entrance[0]][entrance[1] + 1]
下：maze[entrance[0] + 1][entrance[1]]
左：maze[entrance[0]][entrance[1] - 1]
*/
function nearestExit(maze, entrance, firstStep = 2) {
    if (maze[entrance[0]] === undefined || maze[entrance[0]][entrance[1]] === undefined) {
        if (firstStep > 0) {
            return -1;
        }
        else {
            return -2;
        }
    }
    else if (maze[entrance[0]][entrance[1]] === '+') {
        return -1;
    }
    firstStep -= 1;
    maze[entrance[0]][entrance[1]] = '+';
    let goTop = nearestExit(maze, [entrance[0] - 1, entrance[1]], firstStep);
    let goDown = nearestExit(maze, [entrance[0] + 1, entrance[1]], firstStep);
    let goleft = nearestExit(maze, [entrance[0], entrance[1] - 1], firstStep);
    let goRight = nearestExit(maze, [entrance[0], entrance[1] + 1], firstStep);
    console.log([goTop, goDown, goleft, goRight].filter((v) => v !== -1));
    let dList = Math.min(...[goTop, goDown, goleft, goRight].filter((v) => v !== -1), Infinity);
    if (dList === Infinity) {
        return -1;
    }
    else if (dList === -2) {
        return 0;
    }
    else {
        return dList + 1;
    }
}
;
console.log(nearestExit([["+", ".", "+", "+", "+", "+", "+"], ["+", ".", "+", ".", ".", ".", "+"], ["+", ".", "+", ".", "+", ".", "+"], ["+", ".", ".", ".", ".", ".", "+"], ["+", "+", "+", "+", ".", "+", "."]], [1, 0])); // 1
