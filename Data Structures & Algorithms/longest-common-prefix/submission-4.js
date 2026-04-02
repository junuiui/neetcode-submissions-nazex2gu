class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        if (strs.length === 0) return '';
        let res = '';
        let curr = '';

        for (let i = 1; i <= strs[0].length; i++) {

            curr = strs[0].substring(0, i);

            for (const word of strs) {
                if (word.substring(0, i) !== curr) {
                    return res;
                }
            }

            res = curr;
        }


        return res;
    }
}
