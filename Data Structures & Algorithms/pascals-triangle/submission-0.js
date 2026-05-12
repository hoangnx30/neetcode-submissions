class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const result = [[1], [1, 1]];

        if (numRows === 1) {
            return [[1]];
        }

        if (numRows === 2) {
            return [[1], [1, 1]];
        }

        for (let i = 2; i < numRows; i++) {
            const subResult = [1];

            for (let j = 0; j <= i - 2; j++) {
                console.log(result[i - 1]);
                subResult.push(result[i - 1][j] + result[i - 1][j + 1]);
            }

            subResult.push(1);
            result.push(subResult);
        }

        return result.slice(0);
    }
}
