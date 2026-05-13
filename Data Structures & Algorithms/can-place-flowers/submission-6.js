class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let count = 0;
        flowerbed = [0, ...flowerbed, 0];

        for (let i = 1; i < flowerbed.length - 1; i++) {
            const pastBed = flowerbed[i - 1];
            const currentBed = flowerbed[i];
            const nextBed = flowerbed[i + 1];

            if (pastBed === currentBed && currentBed === nextBed) {
                flowerbed[i] = 1
                count++;
            }
        }

        return n <= count;
    }
}
