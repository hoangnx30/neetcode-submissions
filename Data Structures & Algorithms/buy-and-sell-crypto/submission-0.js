class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = -100000000
        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i])
            }
        }

        return maxProfit <= 0 ? 0 : maxProfit
    }
}
