class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        nums.sort((a, b) => a - b);

        let min = nums.at(0);

        return min;
    }
}
