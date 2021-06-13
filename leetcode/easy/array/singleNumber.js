/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	if (nums.length === 1) {
		return nums[0]
	}
	
	// Counts per number
	let c = new Map()
	
	for (let i = 0; i < nums.length; i++) {
		if (c[nums[i]])
			c[nums[i]] += 1
		else
			c[nums[i]] = 1
	}
	
	for (let k of nums) {
		if (c[k] === 1)
			return k
	}
	
    return undefined
};

function runTests() {
	let data = [4,1,2,1,2]
	let expected = 4
	
	let ret = singleNumber(data)
	
	console.log(ret)
	
	if (ret === expected) {
		console.log("Pass: singleNumber")
	}
	else {
		console.log("Fail: singleNumber")
	}
}

runTests()


