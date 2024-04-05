function canVisitAllRooms(rooms: number[][]): boolean {
  let stack: number[] = [0];
  let visited = new Set();  

  while (stack.length > 0) {
    let num = stack.pop()
    if (!visited.has(num)) {
      visited.add(num);
      stack.push(...rooms[num!]);
    }    
  }
  return visited.size === rooms.length;
};