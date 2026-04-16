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

        Faster Approach - Hash Map
            1. Hash look up time is O(1)
            2. Hash Store time is O(1)
        
        Faster Approach - Hash Map - Thought Process:
            1. Iterate the array starting from 0
            2. compare the diff between target with index
            3. look for hash map whether it has the diff = current index value
        
        array=[3,4,5,6] target=10, [1, 3]

        Hash Map
            0: 7 skip
            1: 6 skip <-- 
            2: 5 skip
            3: 4 return the hash key with indexed value
        """
        # n = len(nums)
        # for i in range(n):
        #     for j in range(i+1, n):
        #         if target == nums[i] + nums[j]:
        #             return [i, j]
        
        # return [-1, -1]

        diff = dict()

        for i in range(len(nums)):
            curr = target - nums[i]
            if curr in diff:
                return [diff[curr], i]
            
            diff[nums[i]] = i

        
