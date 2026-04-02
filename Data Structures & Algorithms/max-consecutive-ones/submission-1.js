class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0, currCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                max = Math.max(max, currCount);
                currCount = 0;
            }
            else {
                currCount++;
            }


        }

        return Math.max(max, currCount);
    }
}
