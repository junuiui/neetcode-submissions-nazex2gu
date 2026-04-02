class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        // slow
        // nums.sort((a, b) => a - b);
        // let min = nums.at(0);
        // return min;

        let min = nums.at(0);
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            
            if (nums.at(left) <= nums.at(right)) {
                min = Math.min(nums.at(left), min);
                break;
            }
            
            let mid = left + Math.floor((right - left) / 2);
            min = Math.min(nums.at(mid), min);

            if (nums.at(mid) >= nums.at(left)) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        } 
        return min;
    }
}
