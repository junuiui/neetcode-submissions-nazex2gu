class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        for (let i = 0; i < nums.length; i++){
            let remain = target - nums[i];
            if (map.has(remain)) {
                let index = map.get(remain);
                if (index !== i) return [index, i];
            }
        }
    }
}
