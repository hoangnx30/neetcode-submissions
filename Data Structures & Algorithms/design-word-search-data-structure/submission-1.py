class TrieNode: 
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        cur = self.root

        for ch in word:
            if ch not in cur.children:
                cur.children[ch] = TrieNode()
            cur = cur.children[ch]

        cur.is_end_of_word = True

    def search(self, word: str) -> bool:
        def dfs(start, root):
            cur = root
            for i in range(start, len(word)):
                if word[i] == '.':
                    for child in cur.children.values():
                        if dfs(i+1, child):
                            return True
                    return False
                        
                else:
                    if word[i] not in cur.children:
                        return False
                cur = cur.children[word[i]]
            
            return cur.is_end_of_word == True

        return dfs(0, self.root)
                    

        


            


        
