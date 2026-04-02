class Solution {
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const tMap = new Map();
        for (let char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        // need: 필요한 고유 문자의 개수
        // have: 현재 윈도우에서 조건을 만족한 고유 문자의 개수
        let need = tMap.size;
        let have = 0;
        
        let window = new Map();
        let res = [-1, -1]; // [start, end] 저장용
        let minLen = Infinity;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            window.set(char, (window.get(char) || 0) + 1);

            // 현재 문자가 t에 있고, 개수까지 딱 맞춰졌다면 have 증가
            if (tMap.has(char) && window.get(char) === tMap.get(char)) {
                have++;
            }

            // 모든 문자가 포함된 상태라면 (Condition Met)
            while (have === need) {
                // 1. 최소 길이 갱신
                if ((right - left + 1) < minLen) {
                    minLen = right - left + 1;
                    res = [left, right];
                }

                // 2. 왼쪽 포인터 이동해서 윈도우 줄이기
                let leftChar = s[left];
                window.set(leftChar, window.get(leftChar) - 1);
                
                // 만약 필요한 문자가 빠져서 조건이 깨진다면 have 감소
                if (tMap.has(leftChar) && window.get(leftChar) < tMap.get(leftChar)) {
                    have--;
                }
                left++;
            }
        }

        return minLen === Infinity ? "" : s.substring(res[0], res[1] + 1);
    }
}