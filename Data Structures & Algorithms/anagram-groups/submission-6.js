class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (const str of strs) {
            const hashArr = new Array(26).fill(0);
            for(const char of str) {
                const position = char.charCodeAt(0) - "a".charCodeAt(0)
                hashArr[position]++
            }
            const hash = hashArr.join('-')
            if (!result[hash]) {
                result[hash] = []
            }
            result[hash].push(str)
        }

        return Object.values(result)
    }
}
