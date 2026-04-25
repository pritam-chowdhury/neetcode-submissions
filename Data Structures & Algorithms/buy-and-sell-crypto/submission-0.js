class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = -Infinity;
        for(let i=0;i<prices.length;i++){
            let buy = prices[i];
            for(let j=i+1;j<prices.length;j++){
                let profit = prices[j] - buy;
                max = Math.max(max,profit)
            }
        }
        return max <= 0 ? 0 : max;
    }
}
