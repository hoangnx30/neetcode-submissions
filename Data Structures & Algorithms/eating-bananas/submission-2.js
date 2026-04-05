class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 0
        let right = Math.max(...piles)
        let result = Infinity
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            let avgTime = 0

            for (const pile of piles) {
                avgTime += Math.ceil(pile / mid)
            }

            if (avgTime > h) {
                left = mid + 1
            } else {
                right = mid - 1
                result = Math.min(mid, result)
            }
        }
        return result
    }
}
