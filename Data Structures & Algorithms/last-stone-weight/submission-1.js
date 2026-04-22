class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            stones.sort((a, b) => a - b);
            const x = stones.pop();
            const y = stones.pop();

            stones.push(x - y);
        }

        return stones[0]
    }
}
