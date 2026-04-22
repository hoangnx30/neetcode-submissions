class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxStone = 0;
        for (const stone of stones) {
            maxStone = Math.max(stone, maxStone);
        }

        const bucket = Array(maxStone + 1).fill(0);

        for (const stone of stones) {
            bucket[stone]++;
        }

        let first = maxStone;
        let second = maxStone;

        while (first > 0) {
            if (bucket[first] % 2 === 0) {
                first--;
                continue;
            }

            let j = Math.min(first - 1, second);

            while (j > 0 && bucket[j] === 0) {
                j--;
            }

            if (j === 0) {
                return first;
            }

            second = j;
            bucket[first - second]++;
            bucket[first]--;
            bucket[second]--;
            first = Math.max(first - second, second);
        }

        return first;
    }
}
