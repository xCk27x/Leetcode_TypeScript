function removeStars(s: string): string {
    let stack: string[] = [];
    for (let c of s) 
      c === '*' ? stack.pop() : stack.push(c);
    return stack.join('');    
};