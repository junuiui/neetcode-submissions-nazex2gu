class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        int numsLength = nums.size();

        if (numsLength == 0) return false;
        
        // sort? O(NlogN)
        sort(nums.begin(), nums.end());

        int target = nums[0];
        int k;
        for (int i = 1; i < numsLength; i++) {
            k = nums[i];
            if (target == k) return true;
            else target = k;
        }
        return false;
    }
};

