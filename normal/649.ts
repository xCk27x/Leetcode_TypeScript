function predictPartyVictory(senate: string): string {
  let radiant = 0;
  let dire = 0;
  for (let c of senate) {
    c === 'R' ? radiant++ : dire++;
  }

  while (radiant > 0 && dire > 0) {
    if (senate[0] === 'R') {
      senate = senate.slice(1).replace('D', '') + senate[0];
      dire--;
    } else {
      senate = senate.slice(1).replace('R', '') + senate[0];
      radiant--;
    }
  }
    
  return radiant > 0 ? 'Radiant' : 'Dire';
};

function predictPartyVictory2(senate: string): string {
  const senateArr = senate.split('');

  let radiant = 0, dire = 0;
  senateArr.forEach(c => c === 'R' ? radiant++ : dire++);

  while (radiant > 0 && dire > 0) {
    let exerciser = senateArr.shift();
    if (exerciser === 'R') {
      senateArr[senateArr.indexOf('D')] = '';
      senateArr.push(exerciser);
      dire--;
    } else if (exerciser === 'D') {
      senateArr[senateArr.indexOf('R')] = '';
      senateArr.push(exerciser);
      radiant--;
    }
  }
  while (senateArr[0] === '') {
    senateArr.shift();
  }
  
  return senateArr[0] === 'R' ? 'Radiant' : 'Dire';
}

console.log(predictPartyVictory2('RD')); // Radiant