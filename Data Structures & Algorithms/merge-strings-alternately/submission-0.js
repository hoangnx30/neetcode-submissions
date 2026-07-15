class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";

        let i=0,j=0

        while (i < word1.length || j < word2.length) {
            const char1 = word1[i] || ''
            const char2 = word2[i] || ''

            result+= (char1 + char2)
            i++
            j++
        }

        return result
    }
}
