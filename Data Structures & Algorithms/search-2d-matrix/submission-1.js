class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let currentRow = 0
        let currentCol = matrix[0].length - 1

        while(currentRow < matrix.length && currentCol >= 0) {
            const val = matrix[currentRow][currentCol]
            console.log(val)
            if (val < target) {
                currentRow++
            }

            if (val > target) {
                currentCol--
            }

            if (val === target) {
                return true
            }
        }

        return false
    }
}
