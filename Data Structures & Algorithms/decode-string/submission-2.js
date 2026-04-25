class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        let result = "";
        for(let i=0;i<s.length;i++){
            let char = s[i];
            if(char !== "]"){
                stack.push(char)
            }else{
                let res = "";
                let top = stack.pop();
                while(top !== "["){
                    res = top + res;
                    top = stack.pop();
                }
                let number = "";
while (stack.length > 0 && this.isDigit(stack[stack.length - 1])) {
    number = stack.pop() + number;
}
                stack.push(res.repeat(parseInt(number)))
            }
        }
        
        for(let i=0;i<stack.length;i++){
            result += stack[i];
        }
        return result;
    }

    isDigit(ch) {
  return /^[0-9]$/.test(ch);
}
   
}
