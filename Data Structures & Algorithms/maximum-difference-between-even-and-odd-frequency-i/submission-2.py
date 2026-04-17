class Solution:
    def maxDifference(self, s: str) -> int:
        # 1. Initialize odd to smallest possible and even to largest possible
        max_odd = 0
        min_even = float('inf')

        counts = Counter(s)
        
        for char in counts:
            freq = counts[char]
            if freq % 2 != 0:
                # 2. Find the LARGEST odd frequency
                max_odd = max(max_odd, freq)
            else:
                # 3. Find the SMALLEST even frequency
                min_even = min(min_even, freq)

        # 4. The result is max odd - min even
        return max_odd - min_even