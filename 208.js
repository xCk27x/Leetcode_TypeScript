class Trie {
    constructor(word = '') {
        this.trie = new Map();
        if (word.length === 0)
            return;
        this.insert(word);
    }
    insert(word) {
        let c = word.charAt(0);
        word = word.slice(1);
        console.log(c, word);
        this.trie.get(c) === undefined ? this.trie.set(c, [new Trie(word)]) : this.trie.get(c)?.push(new Trie(word));
        return;
    }
    search(word) {
        let c = word.charAt(0);
        word = word.slice(1);
        if (this.trie.get(c) === undefined) {
            return false;
        }
        else if (word.length === 0) {
            for (let t of this.trie.get(c)) {
                if (t.trie.size === 0)
                    return true;
            }
            return false;
        }
        else {
            for (let t of this.trie.get(c)) {
                if (t.search(word))
                    return true;
            }
            return false;
        }
    }
    startsWith(prefix) {
        let c = prefix.charAt(0);
        prefix = prefix.slice(1);
        if (this.trie.get(c) === undefined) {
            return false;
        }
        else if (prefix.length === 0) {
            return true;
        }
        else {
            for (let t of this.trie.get(c)) {
                if (t.startsWith(prefix)) {
                    return true;
                }
            }
            return false;
        }
    }
}
//Your Trie object will be instantiated and called as such:
let trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'));
console.log(trie.search('app'));
console.log(trie.startsWith('apple'));
console.log(trie.startsWith('app'));
console.log(trie.startsWith('apb'));
// var param_2 = obj.search(word)
// var param_3 = obj.startsWith(prefix)
