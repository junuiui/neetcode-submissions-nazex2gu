class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // use dp

        if (n == 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 2;

        const dp = [0, 1, 2];

        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
        
    }
}
