class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stk = [];
        for(let i=0;i<temperatures.length;i++){
            const t = temperatures[i];
            while(stk.length>0 && t > stk[stk.length-1].t){
                let p = stk.pop();
                result[p.i] = i - p.i;
            }
            stk.push({t,i});
        }
        return result;
    }
}
