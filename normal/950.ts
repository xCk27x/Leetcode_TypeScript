function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => a - b);
  
  let re: number[] = new Array(deck.length);
  let drawSeq: number[] = Array.from({length: deck.length}, (_, i) => i);

  for (let i = 0; i < deck.length; i++) {
    re[drawSeq.shift()!] = deck[i];
    if (drawSeq.length) {
      drawSeq.push(drawSeq.shift()!);
    }
  }

  return re;
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7])); // [2,13,3,11,5,17,7]