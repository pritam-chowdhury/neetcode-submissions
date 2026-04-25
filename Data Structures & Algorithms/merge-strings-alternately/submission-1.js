class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let s = ""
        let i = 0;
        let j = 0;

        while (i < word1.length || j < word2.length) {
            if (i < word1.length) {
                s += word1[i];
                i++;
            }
            if (j < word2.length) {
                 s += word2[j];
                 j++;
            }
           
        }
        return s;

    }
}
