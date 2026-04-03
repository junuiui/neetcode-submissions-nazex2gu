class Solution:
    def countSeniors(self, details: List[str]) -> int:
        """
        Thought Process:
            1. Array is always string length of 15
            2. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
            3. N N N N N N N N N N G A A S S
            4. map through array and extract the age (index 11, 12) into new array
        """
        
        return len(list(filter(lambda d: int(d[11:13]) > 60, details)))