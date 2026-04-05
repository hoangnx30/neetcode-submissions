class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = -100000000
        let left = 0, right = 1
        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                maxProfit = Math.max(maxProfit, prices[right] - prices[left])
            } else {
                left = right
            }
            right++
        }

        return maxProfit <= 0 ? 0 : maxProfit
    }
}
