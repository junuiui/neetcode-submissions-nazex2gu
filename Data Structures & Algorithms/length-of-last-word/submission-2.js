class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let res = 0;
        s = s.trim();
        let i = s.length - 1;

        while (s.charAt(i) !== ' ' && i >= 0) {
            res++;
            i--;
        }

        return res;
    }
}
