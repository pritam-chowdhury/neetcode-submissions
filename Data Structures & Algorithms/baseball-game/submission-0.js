class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let result = 0;
        operations.forEach((item)=>{
            if(item == "+"){
                stack.push(stack[stack.length-1]+ stack[stack.length-2])
            }else if(item== "C"){
                stack.pop();
            }else if(item == "D"){
                stack.push(stack[stack.length-1] * 2)
            }else {
                stack.push(parseInt(item));
            }
        })
        stack.forEach((stk)=>{
            result += stk;
        })
        return result;
    }
}
