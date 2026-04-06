class Solution:
    def maxArea(self, heights: List[int]) -> int:
        """
        Thought Process:
            0. Area = min(heights[i], heights[j]) * (j - i) 
            1. keep updating the max area
        """

        maxArea = -1

        left, right = 0, len(heights) - 1

        while left < right:
            width = right - left
            area = width * min(heights[left], heights[right])

            maxArea = max(maxArea, area)

            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1
        
        return maxArea