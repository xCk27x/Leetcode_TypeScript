class Trie {
  nextChars: (Trie | null)[];
  isEnd = false;

  constructor(str: string) {
    this.nextChars = new Array(26).fill(null);
    this.addStr(str);
  }

  addStr(str: string): void{
    if (str === '') {
      this.isEnd = true;
      return;
    }
    
    const index = str.charCodeAt(0) - 97;
    if (this.nextChars[index] === null) {
      this.nextChars[index] = new Trie(str.slice(1));
    } else {
      this.nextChars[index].addStr(str.slice(1));
    }
  }

  findStr(str: string, begin: number = 0): string {
    if (this.isEnd) return str.slice(0, begin);
    if (begin === str.length) return str;
   
    const next = this.nextChars[str.charCodeAt(begin) - 97];
    if (next === null) return str;
    return next.findStr(str, begin + 1);
  }
}

function replaceWords(dictionary: string[], sentence: string): string {
  const root = new Trie('');
  root.isEnd = false;

  dictionary.forEach(word => {
    root.addStr(word);
  });
  console.log(root);

  const splited = sentence.split(' ');  
  const resultList =  splited.map(word => { 
    return root.findStr(word);
  });

  return resultList.join(' ');
};