class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        
        seen = set()
        for k in nums:
            if k in seen:
                return True
            else:
                seen.add(k)

        return False