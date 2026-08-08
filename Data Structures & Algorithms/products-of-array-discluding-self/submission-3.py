class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        """
        Description:
            output where output[i] = product of all the elements in nums except nums[i]
        
        Approach 1: Without caring time complexity
            Iterate (n) * (n-1) 
            Time Complexity: n * (n-1) = O(n^2)
        """

        # # Approach 1
        # # Too slow
        # output = []
        # output_i = 0
        # length = len(nums)
        # for i in range(length):
        #     output.append(1)
        #     for j in range(length):
        #         if i == j:
        #             continue
        #         output[output_i] *= nums[j]
            
        #     output_i += 1
        
        # return output

        # Approach 2
        length = len(nums)
        output = [1] * length
    
        prefix = 1
        for i in range(length):
            output[i] = prefix
            prefix *= nums[i]
            
        suffix = 1
        for i in range(length - 1, -1, -1):
            output[i] *= suffix
            suffix *= nums[i]
            
        return output






