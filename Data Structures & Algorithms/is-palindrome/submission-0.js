class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.replace(/[^a-zA-Z0-9]/g, "");
        let i=0;
        let j= clean.length -1;

        while(i<=j){
            if(clean[i].toLowerCase() !== clean[j].toLowerCase()) return false;

            i++;
            j--;
        }
        return true
    }
}
