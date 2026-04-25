class Node{
    constructor(){
        this.child = {};
        this.endOfword = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for(let c of word){
            if(!curr.child[c]){
                curr.child[c] = new Node();
            }
            curr = curr.child[c];
        }
        curr.endOfword = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
  search(word) {
        function dfs(idx,str,root){
          let curr = root; 
          for(let i=idx;i<str.length;i++){
            let c = str[i];
            if(c =='.'){
                for(let ch in curr.child){
                  if(ch!= null && dfs(i+1,word,curr.child[ch])) return true;
                }
                 return false;
            }else{
              if(!curr.child[c]){
                return false
              }
            }
            curr = curr.child[c];
          } 
          return curr.endOfword;
        }
       return dfs(0,word,this.root);
    }
    
}
