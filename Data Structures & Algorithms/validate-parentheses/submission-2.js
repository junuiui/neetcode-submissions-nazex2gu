class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length < 2) {
            return false;
        }
        const stack = [];

        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (const c of s) {
            if (closeToOpen[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
            else {
                stack.push(c);
            }
        }

        if (stack.length === 0) {
            return true;
        }

        return false;


    }
}
