class Node{
    constructor(){
        this.child = {};
        this.endOfWord = false;
    }
}
class PrefixTree {

    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(let char of word){
            if(!curr.child[char]){
                curr.child[char] = new Node();
            }
            curr = curr.child[char];
        }
        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for(let char of word){
            if(!curr.child[char]) return false;
            curr = curr.child[char];
        }
        return curr.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for(let char of prefix){
            if(!curr.child[char]) return false;
            curr = curr.child[char];
        }
        return true;
    }
}
