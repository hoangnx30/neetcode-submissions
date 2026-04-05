class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0])
        console.log(pairs)

        const stack = []
        for (const [position, speed] of pairs) {
            const time = (target - position) / speed
            stack.push(time)

            if (stack.length >= 2 && stack[stack.length - 2] >= stack[stack.length - 1]) {
                stack.pop()
            }
        }

        return stack.length
    }
}
