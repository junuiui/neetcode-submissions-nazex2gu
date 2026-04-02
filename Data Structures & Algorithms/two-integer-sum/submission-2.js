class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // brutal appoach
        // let firstNumberIndex = 0;
        // let secondNumberIndex = 0;

        // for (let i = 0; i < nums.length - 1; i++) {
        //     for (let j = i + 1; j < nums.length ; j++) {
        //         if (nums[i] + nums[j] === target) {
        //             firstNumberIndex = i;
        //             secondNumberIndex = j;
        //         }
        //     }
        // }

        // return [firstNumberIndex, secondNumberIndex];

        // Using hash map
        const map = new Map();

        for (let i = 0; i < nums.length; i++){
          const diff = target - nums[i];
          if (map.has(diff)) {
            return [map.get(diff), i];
          }
          
          map.set(nums[i], i);
        }


    }
}
