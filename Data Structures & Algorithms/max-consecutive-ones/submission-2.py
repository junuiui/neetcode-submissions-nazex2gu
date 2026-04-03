class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        result = 0
        curr = 0
        for b in nums:
            if b == 1:
                curr += 1
            else:
                curr = 0
            result = max(result, curr)
        return result