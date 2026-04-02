class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        
        let index = 0;

        for (const i in nums) {
            if (nums[i] !== val) {
                nums[index] = nums[i];
                index++;
            }
        }
        return index;
    }
}
