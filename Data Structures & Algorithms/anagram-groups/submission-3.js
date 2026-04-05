class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {}

        for (const str of strs) {
            const keys = new Array(26).fill(0)
            for (const c of str) {
                const idx = c.charCodeAt(0) - 'a'.charCodeAt(0)
                keys[idx]++
            }
            const key = keys.join(',')
            
            if (!result[key]) {
                result[key] = [str]
            } else {
                result[key].push(str)
            }
        }

        return Object.values(result)

    }
}
