class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let res = 0;
        if (s.length === 0) return 0;
        let first = s.charCodeAt(0);
        for (let i = 1; i < s.length; i++) {
            let second = s.charCodeAt(i)
            res += Math.abs(first - second);
            first = s.charCodeAt(i);
        }

        return res;
    }
}
