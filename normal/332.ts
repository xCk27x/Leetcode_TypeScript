// function findItinerary(tickets: string[][]): string[] {
//   // start from JFK
//   const ticketMap =new Map<string, string[]>();
//   for (const ticket of tickets) {
//     if (ticketMap.has(ticket[0])) {
//       ticketMap.get(ticket[0])!.push(ticket[1]);
//     } else {
//       ticketMap.set(ticket[0], [ticket[1]]);
//     }
//   }
//   console.log(ticketMap);

//   function removeElementOnce(arr: string[], value: string) {
//     const index = arr.indexOf(value);
//     return arr.slice(0, index).concat(arr.slice(index + 1));
//   }

//   function backtrace(location: string, remain: number): string[] {
//     if (remain === 0) return [location];

//     const targetList = ticketMap.get(location);
//     if (!targetList || targetList.length === 0) return [];
//     targetList.sort();
//     console.log(location, targetList);

//     for (let i = 0; i < targetList.length; i++) {
//       ticketMap.set(location, removeElementOnce(targetList, targetList[i]));
//       const result = backtrace(targetList[i], remain - 1);
//       ticketMap.set(location, targetList);
//       if (result.length === remain) {
//         result.unshift(location);
//         return result;
//       }
//     }
//     return [];
//   }

//   return backtrace('JFK', tickets.length);
// };

function findItinerary(tickets: string[][]): string[] {
  // build map
  const ticketMap = new Map<string, string[]>();
  
  for (const ticket of tickets) {
    if (ticketMap.has(ticket[0])) {
      ticketMap.get(ticket[0])!.push(ticket[1]);
    } else {
      ticketMap.set(ticket[0], [ticket[1]]);
    }
  }
  ticketMap.forEach(value => value.sort());
  
  // DFS
  const result: string[] = [];
  function dfs(position: string) {
    const targets = ticketMap.get(position) ?? [];
    while (targets.length > 0) {
      dfs(targets.shift()!);
    }
    result.unshift(position);
  }
  
  // start from JFK
  dfs('JFK');
  return result;
}
