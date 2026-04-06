class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        Thought Process:
            1. sort nums => O(NlogN)
            2. select the pivot point (left to right)
            3. select i (0 -> ) and j (<- n-1) 
            4. sum of value at i, j, pivot = 0 ? then extract 
            5. move on to next pivot

        Example:
            ARR: [-1, 0, 1, 2, -1, -4]
            SAR: [-4, -1, -1, 0, 1, 2]
            
            1. pivot = -4, i = -1, j = 2
            2. -4 + -1 + 2 = -3 < 0, so move i to right
            3. pivot = -4, i = -1, j = 2
            4. -4 + -1 + 2 = -3 < 0, so move i to right
            5. pivot = -4, i = 0, j = 2
            6. -4 + 0 + 2 = -2 < 0, so move i to right
            7. pivot = -4, i = 1, j = 2
            8. -4 + 1 + 2 = -1 < 0, move i to right
            9. i == j, move pivot
        """
        
        nums.sort()
        result = []
        # Select the pivot 
        for pivot in range(len(nums) - 2):

            if pivot > 0 and nums[pivot] == nums[pivot - 1]:
                continue

            i, j = pivot + 1, len(nums) - 1
            
            while i < j:

                sumValue = nums[pivot] + nums[i] + nums[j]

                if sumValue == 0:
                    result.append([nums[pivot], nums[i], nums[j]])
                    while i < j and nums[i] == nums[i + 1]:
                        i += 1
                    while i < j and nums[j] == nums[j - 1]:
                        j -= 1
                    
                    i += 1
                    j -= 1
                elif sumValue < 0:
                    i += 1
                elif sumValue > 0:
                    j -= 1

        return result














