class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let length = nums.length;

        if (length < 3) {
            return [];
        }

        if (length < 4) {
            if (nums[0] + nums[1] + nums[2] === 0) {
                return [[nums[0], nums[1], nums[2]]];
            }
            else {
                return [];
            }
        }

        let result = new Array();

        // sort the array
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]])
                    left++;
                    right--;

                    // skip duplicate left
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // skip duplicate right
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
                else if (sum < 0) {
                    left++;
                }
                else {
                    right--;
                }
            }
        }
        return result;

    }
}
