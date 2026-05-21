class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minSell = prices[0]
        let result = 0
        for (const price of prices) {
            result = Math.max(price - minSell, result)
            minSell = Math.min(minSell, price)
    
        }

        return result
    }
}
