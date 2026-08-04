class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        """
            nums = [1, 2, 2, 3, 3, 3], k = 2
        """

        # Approach 1: list: 2001 elements => not ideal

        # Approach 2: Hash map
        #   { number : frequency }
        #   { 1: 1, 2: 2, 3: 3 }

        frequency = {}
        for num in nums:
            if num in frequency:
                frequency[num] = frequency[num] + 1
            else:
                frequency[num] = 1

        # sort dict

        sorted_freq = sorted(frequency.items(), key=lambda frequency: frequency[1] , reverse=True)
        print(sorted_freq)
        
        result = []
        for i in range(k):
            result.append(sorted_freq[i][0])


        return result
