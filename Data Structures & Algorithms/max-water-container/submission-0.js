class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        if (heights.length < 2) {
            return 0;
        }
        else if (heights.length < 3) {
            return Math.min(heights[0], heights[1]);
        }

        let left = 0;
        let right = heights.length - 1;

        let max = 0;

        while (left < right) {
            let height = Math.min(heights[left], heights[right]);
            let width = right - left;
            let area = height * width;

            max = Math.max(max, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
