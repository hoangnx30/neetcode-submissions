class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0) {
            return true;
        }

        const map = { ")": "(", "}": "{", "]": "[" };

        const stack = [];
        stack.push(s[0]);

        for (let i = 1; i < s.length; i++) {
            if (map[s[i]] === stack[stack.length - 1] && map[s[i]]) {
                stack.pop();
                continue;
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length == 0;
    }
}
