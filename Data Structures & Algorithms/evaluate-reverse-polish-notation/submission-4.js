class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for (const token of tokens) {
            if (Number.isSafeInteger(Number.parseInt(token))) {
                stack.push(Number.parseInt(token))
            } else {
                console.log(stack)
                const secondNumber = stack.pop()
                const firstNumber = stack.pop()

                let val = 0
                if (token === "+") {
                    val = firstNumber + secondNumber
                } else if (token === "-") {
                    val = firstNumber - secondNumber
                }
                else if (token === "*") {
                    val = firstNumber * secondNumber
                }
                else if (token === "/") {
                    val = Math.trunc(firstNumber / secondNumber)
                }
                stack.push(val)
            }
        }

        return stack[0]
    }


}
