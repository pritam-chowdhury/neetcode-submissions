class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0;
        for(let i=1;i<prices.length;i++){
            if(prices[i-1]<prices[i]){
                let profit = prices[i] - prices[i-1];
                result += profit;
            }
        }
        return  result;
    }
}
