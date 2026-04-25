class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    
    encode(strs) {
         let encodedStr = '';
        for(let i=0;i<strs.length;i++){
          let encoded = `${strs[i].length}#${strs[i]}`;
          encodedStr += encoded;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

  let result = [];
  for(let i=0;i<str.length;i++){
    let j = i;
    while(str[j] !== "#"){
      j++;
    }
    let count = parseInt(str.slice(i,j));
    i=count+j;
    result.push(str.slice(j+1,i+1))
  }
  return result;
    }
}
