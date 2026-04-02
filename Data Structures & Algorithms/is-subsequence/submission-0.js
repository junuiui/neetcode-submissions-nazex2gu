class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let index = 0;
        for (let i = 0; i < t.length; i++){
            if (t.charAt(i) === s.charAt(index)) index++;
        }

        console.log(index)

        if (s.length === index) return true;
        return false;
    }
}
