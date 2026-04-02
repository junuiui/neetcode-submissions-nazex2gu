class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // set approach 

        // 1. Store nums into Set
        const set = new Set(nums);
        let longest = 0;

        // 2. Look up each number and compare ...
        for (const num of set) {
            
            // 
            if (!set.has(num - 1)) {
                let length = 1;
                while (set.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }

        return longest

    }
}
