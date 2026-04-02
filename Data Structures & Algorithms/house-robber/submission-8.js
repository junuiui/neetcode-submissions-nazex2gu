class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // using dp?
        // 2 9 8 3 6
        // 2 9 10 12 16

        /**
         * index: 0 1 2 3  4  5  6  7  8  9 
         * value: 5 1 2 10 6  2  7  9  3  1
         * app1 : 5 1 7 15 13 
         * 
         * --> add the max value of i-2, i-3 ? ...  
         * i = 0 --> base case
         * i = 1 --> base case
         */

        const n = nums.length;

        if (n == 0) return 0;
        if (n == 1) return nums[0]
        
        nums[1] = Math.max(nums[0], nums[1])

        for (let i = 2; i < n; i++) {
            nums[i] = Math.max(nums[i-2] + nums[i], nums[i-1]);
        }

        return nums[n-1];
    }

}
