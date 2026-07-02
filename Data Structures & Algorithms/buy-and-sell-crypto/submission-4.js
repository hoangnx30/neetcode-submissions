class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0
        for (let i = 0; i < prices.length; i++) {
            const buy = prices[i]

            for (let j = i + 1; j < prices.length; j++) {
                res = Math.max(prices[j] - buy, res)
            }
        }


        return res
    }
}
