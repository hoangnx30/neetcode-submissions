class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pattern = {
            ']': '[',
            '}': '{',
            ')': '('
        }

        const stack = []

        for (const c of s) {
            if (stack[stack.length - 1] === pattern[c] && pattern[c]) {
                stack.pop()
                continue
            }
            stack.push(c)

        }

        console.log(stack)

        return stack.length === 0
    }
}
