class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for(let i=0;i<strs.length;i++){
            encodedStr += `${strs[i].length}#${strs[i]}`
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
            let i = 0;
let result = [];

while (i < str.length) {
  let j = i;
  while (str[j] !== "#") {
    j++;
  }

  let len = parseInt(str.substring(i, j));
  let char = str.substring(j + 1, j + 1 + len);

  result.push(char);

  i = j + 1 + len;
}
return result;
    }
}
