class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];
        for(let i=0;i<temperatures.length;i++){
            let r =0;
            for(let j=i;j<temperatures.length;j++){
                if(temperatures[j] > temperatures[i]){
                    r = j-i;
                    break;
                }
            }
            result.push(r);
        }
        return result;
    }
}
