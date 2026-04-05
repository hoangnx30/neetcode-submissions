class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let result = 1;

        while (true) {
            let time = 0
            for (const pile of piles) {
                time += Math.ceil(pile / result)
            }

            if (time <= h) {
                break;
            }

            result++
        }

        return result
    }
}
