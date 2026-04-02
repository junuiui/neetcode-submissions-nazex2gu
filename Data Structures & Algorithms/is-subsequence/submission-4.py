# Order must be preserved

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        
        # Brutal 
        # Approach:
        # Check then move (Two pointer?)

        sLen, tLen = len(s), len(t)

        if (sLen == 0): return True
        if (tLen == 0): return False

        i = 0
        for j in range(tLen):
            if s[i] == t[j]:
                i += 1
            if i == sLen:
                return True
        
        return False