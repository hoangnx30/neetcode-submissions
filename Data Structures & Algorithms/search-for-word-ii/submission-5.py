class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        
        # 1. Init Trie
        root = TrieNode()
        for word in words:
            cur = root
            for char in word:
                if char not in cur.children:
                    cur.children[char] = TrieNode()
                cur = cur.children[char]
            cur.word = word

        ROWS, COLS = len(board), len(board[0])
        ans = []

        def dfs(row, col, node):
            char = board[row][col]

            if char not in node.children:
                return 

            next_node = node.children[char]

            if next_node.word:
                ans.append(next_node.word)
                next_node.word = None

            board[row][col] = '*'
            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nr, nc = row + dr, col + dc
                
                if 0 <= nr < ROWS and 0 <= nc < COLS and board[nr][nc] != '*':
                    dfs(nr, nc, next_node)
            
            board[row][col] = char
            if not next_node.children:
                del node.children[char]

        for r in range(ROWS):
            for c in range(COLS):
                dfs(r, c, root)
        

        return ans

