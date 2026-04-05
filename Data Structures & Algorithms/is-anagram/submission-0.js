class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const map = new Map()

        for (let i = 0; i < s.length; i++) {
            map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1)
            map.set(t[i], map.get(t[i]) ? map.get(t[i]) - 1 : -1)
        }

        for (const item of  Array.from(map.values())){
            if (item !== 0) {
                return false
            }
        }
        return true
    }
}
