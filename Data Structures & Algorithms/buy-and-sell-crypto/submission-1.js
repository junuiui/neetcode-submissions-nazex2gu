class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // brutal force
        let max = 0;
        // for (let i = 0; i < prices.length - 1; i++) {
        //     for (let j = i + 1; j < prices.length; j++){
        //         if (prices[i] < prices[j]) {
        //             max = Math.max(max, prices[j] - prices[i]);
        //         }
        //     }
        // }

        // dp
        let min = prices[0];

        for (let sell of prices) {
            max = Math.max(max, sell - min);
            min = Math.min(min, sell)
        }


        return max;
    }
}
