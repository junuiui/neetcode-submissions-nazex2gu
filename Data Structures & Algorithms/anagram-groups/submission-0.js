class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // first approach 
        /**
         * sort the string
         * compare 
         */
        const map = new Map();

        for (const str of strs) {
            // 1. split to array
            // 2. sort the array
            // 3. re-join the array to string
            const key = str.split("").sort().join("");

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
