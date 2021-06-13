/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // carry over
    let c = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            c = 1
            digits[i] = 0
        }
        else {
            c = 0
            digits[i] += 1
            break;
        }
    }
    if (c) {
        digits.unshift(1)
    }
    return digits
};