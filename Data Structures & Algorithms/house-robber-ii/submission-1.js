class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        const n = nums.length;

        if (n === 0) return 0;
        if (n === 1) return nums[0];

        const robHelper = (s, e) => {
            let prev1 = 0;
            let prev2 = 0;

            for (let i = s; i <= e; i++) {
                let curr = Math.max(prev1, prev2 + nums[i]);
                prev2 = prev1;
                prev1 = curr;
            }

            return prev1;
        }

        return Math.max(robHelper(0, n - 2), robHelper(1, n - 1))
    }

}
