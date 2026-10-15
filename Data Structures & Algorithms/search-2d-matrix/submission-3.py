class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row = 0
        col = len(matrix[0]) - 1

        while row < len(matrix) and col >= 0:
            val = matrix[row][col]

            if val < target:
                row += 1
            elif val > target:
                col -= 1
            elif target == val:
                return True

        return False