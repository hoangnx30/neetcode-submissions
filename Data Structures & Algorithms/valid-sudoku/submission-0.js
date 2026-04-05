class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0; row < 9; row++) {
            const seen = new Set()
            for (let i = 0; i < 9; i++) {
                const val = board[row][i];
                if (seen.has(val)) return false
                if (val === '.') continue
                seen.add(val)
            }
        }

        for (let col = 0; col < 9; col++) {
            const seen = new Set()
            for (let i = 0; i < 9; i++) {
                const val = board[i][col]
                if (seen.has(val)) return false
                if (val === '.') continue 
                seen.add(val)
            }
        }

        for (let square = 0; square < 9; square++) {
            const seen = new Set()
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const row = Math.floor(square / 3) * 3 + i 
                    const col = (square % 3) * 3 + j
                    const val = board[row][col]
                    if (seen.has(val)) return false
                    if (val === '.') continue
                    seen.add(val)

                }
            }
        }

        return true
    }
}
