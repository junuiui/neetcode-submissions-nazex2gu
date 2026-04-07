class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_length = 0
        window = []

        for i in range(0, len(s)):
            if s[i] in window:
                index = window.index(s[i])
                window = window[index + 1:]
            
            window.append(s[i])
            max_length = max(max_length, len(window))

        print(window)
        
        return max_length