class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freq = new Map();

        // s의 문자 개수 증가
        for (const ch of s) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
        }

        // t의 문자 개수 감소
        for (const ch of t) {
            if (!freq.has(ch)) return false;

            freq.set(ch, freq.get(ch) - 1);
            if (freq.get(ch) === 0) {
                freq.delete(ch);
            }
        }

        return freq.size === 0;
    }
}
