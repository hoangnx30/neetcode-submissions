class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set()
        let l = 0
        let result = 0
        
        for (let r = 0; r < s.length; r++) {
            while(set.has(s[r])) {
                console.log(set)
                set.delete(s[l])
                l++
            }
            set.add(s[r])
            result = Math.max(result, r-l +1)
        }

        return result
    }
}
