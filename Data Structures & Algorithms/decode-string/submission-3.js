class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stk = [];
        for(let char of s){
            if(char !== "]"){
                stk.push(char);
            }else{
                let temp = "";
                while(stk.length && stk[stk.length-1] !== "["){
                    temp = stk.pop() + temp;
                }
                stk.pop();
                let digit = "";
                while(stk.length && !isNaN(stk[stk.length-1])){
                    digit = stk.pop() + digit;
                }
                digit = parseInt(digit);
                stk.push(temp.repeat(digit));
            }
        }
        return stk.join("");
    }
}
