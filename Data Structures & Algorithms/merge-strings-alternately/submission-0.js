class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let current = 0;
        let resultStr = "";
        while(current < word1.length && current<word2.length){
            resultStr += word1[current] + word2[current];
            current++;
        }
        resultStr += current>= word1.length? word2.substring(current): word1.substring(current);
        return resultStr;
    }
}
