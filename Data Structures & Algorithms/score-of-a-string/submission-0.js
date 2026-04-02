class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let res = 0;
        for (let i = 0; i < s.length-1; i++) {
            let first = s.charCodeAt(i);
            let second = s.charCodeAt(i+1);
            res += Math.abs(first - second);
        }

        return res;
    }
}
