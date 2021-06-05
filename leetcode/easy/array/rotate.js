/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 */

/**
 * Rotate to the right
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	if (nums.length == k || k == 0)
		return
	
	let prev = 0, swap = 0
	for (; k > 0; k--) {
		prev = nums[0]
		for (let i = 1; i < nums.length; i++) {
			swap = nums[i]
			nums[i] = prev
			prev = swap
		}
		nums[0] = prev
	}
};

function runTests() {
	let data = [1, 2, 3, 4, 5, 6, 7]
	let k = 3
	let expected = [5, 6, 7, 1, 2, 3, 4]
	
	let ret = rotate(data, k)
	
	if (true === data.every((v, i) => v == expected[i])) {
		console.log("Pass: rotate: array")
	}
	else {
		console.log("Fail: rotate: array")
	}
}

runTests()

/*import { rotateTestData as bigTestData } from './rotateTestData.js'

console.log(bigTestData.length)
rotate(bigTestData, 65535)
console.log("done")*/
