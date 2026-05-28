class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const map = new Map();

        let duplicatedNum = 0;
        let missingNum = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                const num = grid[i][j];
                map.set(num, (map.get(num) || 0) + 1);
            }
        }

        console.log(map)

        for (let i = 1; i <= Math.pow(grid.length, 2); i++) {
            if (map.get(i) > 1) {
                duplicatedNum = i
            }

            if (!map.has(i)) {
                missingNum = i
            }
        }

        return [duplicatedNum, missingNum];
    }
}
