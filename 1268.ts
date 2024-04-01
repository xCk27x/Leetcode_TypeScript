function threeLexiMinProducts(products: string[], searchWord: string): string[] {
  if (products.length <= 3) {
    return products;
  }

  let re: string[] = [];
  let temp = products;
  let i = 0;

  while (re.length < 3 && i < searchWord.length) {
    temp.filter(p => {
      if (p.charAt(i) !== searchWord.charAt(i)) {
        console.log(p);
        re.push(p);
        return false;
      }
      return true;
    });
    i++;
  }

  return re.slice(0, 3);
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
  let re: string[][] = [];
  let temp = products;

  for (let i = 0; i < searchWord.length; i++) {
    products = products.filter(p => p.charAt(i) === searchWord[i]);
    temp = products;
    re.push(temp.sort().slice(0, 3));
  }

  return re;
};

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse")); // [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]