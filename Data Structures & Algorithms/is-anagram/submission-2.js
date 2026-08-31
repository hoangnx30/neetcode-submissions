class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1;
            map[t[i]] = (map[t[i]] || 0) - 1;
        }

        console.log(map)

        for (const key in map) {
            if (map[key] !== 0) return false;
        }

        return true;
    }
}
