class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0

        let left = 0, right = 1;

        while (left < prices.length) {
            if (prices[left] < prices[right]) {
                result = Math.max(result, prices[right] - prices[left])
                right ++
            } else {
                left = right
                right++
            }
        }


        return result
    }
}
