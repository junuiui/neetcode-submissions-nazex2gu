class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        let length = s.length;
        let max = 0;
        let maxFreq = 0;
        let left = 0;
        const freq = new Array(26).fill(0);

        for (let right = 0; right < length; right++){
            const charCode = s.charCodeAt(right) - 65;
            freq[charCode]++;

            maxFreq = Math.max(maxFreq, freq[charCode]);

            if ( (right - left + 1) - maxFreq > k ) {
                freq[s.charCodeAt(left) - 65]--;
                left++;
            }

            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}
