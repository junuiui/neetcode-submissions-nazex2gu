class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map();

        for (const word of strs) {

            const sortedWord = word.split('').sort().join('');

            if (!map.has(sortedWord)) {
                map.set(sortedWord, []);
            }

            map.get(sortedWord).push(word);
        }
        return Array.from(map.values());
    }
}
