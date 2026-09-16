class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0; row < board.length; row++) {
            const seen = new Set();
            for (let col = 0; col < board.length; col++) {
                const val = board[row][col];
                if (val === ".") continue;
                if (seen.has(val)) {
                    return false;
                }
                seen.add(val);
            }
        }

        for (let col = 0; col < board.length; col++) {
            const seen = new Set();
            for (let row = 0; row < board.length; row++) {
                const val = board[row][col];

                if (val === ".") continue;
                if (seen.has(val)) {
                    console.log("false");
                    return false;
                }
                seen.add(val);
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const row = Math.floor(square / 3) * 3 + i;
                    const col = (square % 3) * 3 + j;
                    const val = board[row][col];

                    if (val === ".") continue;
                    if (seen.has(val)) {
                        return false;
                    }
                    seen.add(val);
                }
            }
        }

        return true;
    }
}
