class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Description:
            1. nums = integers
            2. target = integer
            3. no dup addition
        
        Brutal Force approach - Thought Process:
            1. 0 - n (where n = length of nums)
            2. compare the i with j
            3. if found return
            4. if not, increase i

        Brutal Force approach - O(N^2)
        """
        
        n = len(nums)
        for i in range(n):
            for j in range(i+1, n):
                if target == nums[i] + nums[j]:
                    return [i, j]
        
        return [-1, -1]
