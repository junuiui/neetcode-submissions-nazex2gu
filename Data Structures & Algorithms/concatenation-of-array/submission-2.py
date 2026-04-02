# nums = integer array (length = n)
# ans = integer array (length 2n)

# [1] ==> [1, 1]
# [1, 2] ==> [1, 2, 1, 2]

class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums