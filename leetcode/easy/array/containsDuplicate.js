/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	
	// Is this a cheat?
	nums.sort()
	
	for (let i = 0; i < (nums.length - 1); i++) {
		if (nums[i] === nums[i + 1]) {
			return true;
		}
	}

	return false
};

function runTests() {
	let data = [1,1,1,3,3,4,3,2,4,2]
	let expected = true
	
	let ret = containsDuplicate(data)
	
	if (ret === expected) {
		console.log("Pass: containsDuplicate: price")
	}
	else {
		console.log("Fail: containsDuplicate: price")
	}
}

runTests()
