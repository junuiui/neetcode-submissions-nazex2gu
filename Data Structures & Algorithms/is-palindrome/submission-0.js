class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let frontIndex = 0;
        let lastIndex = s.length - 1;
        s = s.toLowerCase();

        while (frontIndex < lastIndex) {
            // skip non letters, numbers
            const regex = /^[a-z0-9]+$/i;
            
            if (!regex.test(s[frontIndex])) {
                frontIndex++;
                continue;
            }

            if (!regex.test(s[lastIndex])) {
                lastIndex--;
                continue;
            }

            if (s.at(frontIndex++) != s.at(lastIndex--)){
                return false;
            }
        }
        return true;
    }
}
