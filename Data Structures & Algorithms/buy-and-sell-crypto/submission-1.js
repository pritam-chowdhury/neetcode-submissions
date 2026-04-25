class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = -Infinity;
        let l = 0;
        let r =1;
        while(r<prices.length){
            if(prices[r]> prices[l]){
                let profit = prices[r] -prices[l];
                max = Math.max(profit,max)
            }else {
                l=r
            }
            r++;
        }
        return max <= 0 ? 0 : max;
    }
}
