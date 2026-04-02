class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {

        let index = 0;

        for (let i = 0; i < s.length; i++) {

            if (s.charAt(i) === t.charAt(index)) index++;

        }

        return t.length - index;
    }
}
