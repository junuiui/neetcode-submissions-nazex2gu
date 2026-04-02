class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const dp = [0, 1, 1];

        for (let i = 3; i <= n; i++){
            dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
        }

        return dp[n];

        // if (n == 0) return 0;
        // if (n <= 2) return 1; 

        // return this.tribonacci(n-1) + this.tribonacci(n-2) + this.tribonacci(n-3);
    }
}
