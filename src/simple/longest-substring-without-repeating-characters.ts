function lengthOfLongestSubstring(s: string): number {
    if (!s) return 0;
    if (s.length == 1) return 1;
    let longestString = s[0];
    for (let i=0; i<s.length-1; i++) {
        let currentLoopLongestString = s[i];
        for (let j=i+1; j<s.length; j++) {
            //check if a character exists in longestString
            if (currentLoopLongestString.includes(s[j])) {
                break;
            }
            currentLoopLongestString += s[j];
            //check if current length is greater than over all length
            if (longestString.length < currentLoopLongestString.length) {
                longestString = currentLoopLongestString;
            }
        }
    }

    return longestString.length;
};

//******************************** BEST solution ********************************
//
// function lengthOfLongestSubstring(s: string): number {
//     let start = 0;
//     let max = 0;
//     let set: Set<string> = new Set();
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         while (set.has(char)) {
//             set.delete(s[start]);
//             start++;
//         }
//         set.add(char);
//         max = Math.max(max, set.size);
//     }
//
//     return max;
// };
