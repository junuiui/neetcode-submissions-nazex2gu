class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const length = words.length;
        const result = [];

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++){
                if (i == j) continue;

                if (words[j].includes(words[i])) {
                    result.push(words[i]);
                    break;
                }
            }
        }

        return result;
    }
}
