/* 
上：maze[entrance[0] - 1][entrance[1]]
右：maze[entrance[0]][entrance[1] + 1]
下：maze[entrance[0] + 1][entrance[1]]
左：maze[entrance[0]][entrance[1] - 1]
*/

function nearestExit(maze: string[][], entrance: number[], firstStep: number = 2): number {
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
  let newMaze = maze;
  let newEntrance = entrance;
  newMaze[newEntrance[0]][newEntrance[1]] = '+';
  
  let goDown = nearestExit(newMaze, [newEntrance[0] + 1, newEntrance[1]], firstStep);
  newMaze = maze;
  newEntrance = entrance;
  let goRight = nearestExit(newMaze, [newEntrance[0], newEntrance[1] + 1], firstStep);
  newMaze = maze;
  newEntrance = entrance;
  let goTop = nearestExit(newMaze, [newEntrance[0] - 1, newEntrance[1]], firstStep);
  newMaze = maze;
  newEntrance = entrance;
  let goleft = nearestExit(newMaze, [newEntrance[0], newEntrance[1] - 1], firstStep);

  console.log([goTop, goDown, goleft, goRight]);
  let dList = Math.min(...[goTop, goDown, goleft, goRight].filter((v) => v !== -1), Infinity);

  if (dList === Infinity) {
    return -1;
  } else if (dList === -2) {
    return 0;
  } else{
    return dList + 1;
  }
};

// console.log(nearestExit([["+",".","+","+","+","+","+"],["+",".","+",".",".",".","+"],["+",".","+",".","+",".","+"],["+",".",".",".",".",".","+"],["+","+","+","+",".","+","."]], [1,0])); // 1