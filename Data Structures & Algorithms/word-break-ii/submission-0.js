class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        let wordSet = new Set(wordDict);
  let result = [];
  function bt(i,str,curr){  
    if(i>=str.length) {
      result.push(curr.join(" "));
      return;      
    };
    for(let j=i;j<str.length;j++){
      if(wordSet.has(str.substring(i,j+1))){
        curr.push(str.substring(i,j+1));
        bt(j+1,str,[...curr]);
        curr.pop();
      }
    }
  }
  bt(0,s,[]);
  return result;
    }
}
