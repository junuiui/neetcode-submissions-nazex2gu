class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Maybe use hash?

        // Use of O(n^2)
        return new Set(nums).size !== nums.length;
    }
}
