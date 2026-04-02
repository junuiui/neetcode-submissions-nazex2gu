class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // brutal force
        let max = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            let temp = 0;
            for (let j = i + 1; j < prices.length; j++){
                if (prices[i] < prices[j]) {
                    temp = Math.max(temp, prices[j] - prices[i])
                }
            }
            max = Math.max(max, temp);
        }


        return max;
    }
}
