class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in range(9):
            seen = set()
            for i in range(9):
                val = board[row][i]
                if val == ".":
                    continue
                if val in seen:
                    return False

                seen.add(val)

        for col in range(9):
            seen = set()
            for i in range(9):
                val = board[i][col]
                if val == ".":
                    continue
                if val in seen:
                    return False

                seen.add(val)

        for square in range(9):
            seen = set()
            for row in range(3):
                for col in range(3):
                    current_row = (square // 3) * 3 + row
                    current_col = (square % 3) * 3 + col
                    val = board[current_row][current_col]

                    if val == ".":
                        continue
                    if val in seen:
                        return False

                    seen.add(val)
                    print(seen)

        return True
