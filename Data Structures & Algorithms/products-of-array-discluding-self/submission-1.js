class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // // brutal 
        // const result = Array.from({ length: nums.length }, () => 1);
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = 0; j < nums.length; j++) {
        //         if (i === j) continue;
        //         result[i] *= nums[j]
        //         console.log(i, j)
        //     }
        // }
        // return result;

        const n = nums.length;
        const result = new Array(n).fill(1);

        let left = 1;
        for (let i = 0; i < n; i++) {
            result[i] = left;
            left *= nums[i];
        }

        let right = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }

        return result;


    }
}
