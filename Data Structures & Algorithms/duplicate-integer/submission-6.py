class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # Option 1: checking 
        # O(n)
        # checked = []
        # checked = [ 1 ]
        # checked = [ 1 2 ]
        # checked = [ 1 2 3]
        checked = []

        for n in nums:
            if n not in checked:
                checked.append(n)
            else:
                return True
        return False
        

        # Option 2
        # o(n^2)
        # [1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 3]