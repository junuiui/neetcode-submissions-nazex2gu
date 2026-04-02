class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brutal 
        const result = Array.from({ length: nums.length }, () => 1);
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;
                result[i] *= nums[j]
                console.log(i, j)
            }
        }
        return result;


    }
}
