class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = -100000000
        let min = prices[0]
        for (const sell of prices) {
            maxProfit = Math.max(maxProfit, sell - min)
            min = Math.min(min, sell)
        }
        return maxProfit <= 0 ? 0 : maxProfit
    }
}
