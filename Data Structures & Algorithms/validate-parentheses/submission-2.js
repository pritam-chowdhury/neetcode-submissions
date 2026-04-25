class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let braceObj = {
            '}': '{',
            ']' : '[',
            ')' : '('
        }
        let stk = [];
        for (let char of s) {
        if (char === '{' || char === '(' || char === '[') {
            stk.push(char);
        } else {
            if (!stk.length) return false;
            const last = stk.pop();
            if (last !== braceObj[char]) return false;
        }
    }
        return stk.length == 0;
    }
}
