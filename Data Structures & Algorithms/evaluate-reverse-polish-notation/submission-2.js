class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stk = [];

        tokens.forEach((item) => {
            if (item === '+') {
                let b = stk.pop();
                let a = stk.pop();
                stk.push(a + b);
            } else if (item === '-') {
                let b = stk.pop();
                let a = stk.pop();
                stk.push(a - b);
            } else if (item === '*') {
                let b = stk.pop();
                let a = stk.pop();
                stk.push(a * b);
            } else if (item === '/') {
                let b = stk.pop();
                let a = stk.pop();
                let result = a / b;
                result = result > 0 ? Math.floor(result) : Math.ceil(result);
                stk.push(result);
            } else {
                stk.push(parseInt(item));
            }
        });

        return stk.pop();
    }
}