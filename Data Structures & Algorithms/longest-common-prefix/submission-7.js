class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        if (strs.length === 0) return '';
        let res = '';
        let curr = '';

        for (let i = 0; i <= strs[0].length; i++) {

            curr = strs[0].at(i)

            for (const word of strs) {
                if ( i >= word.length || word.at(i) !== curr) {
                    return strs[0].slice(0, i);
                }
            }
        }

        return res;
    }
}
