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
	if (k > nums.length) {
		k = k % nums.length
	}
	
	if (nums.length == 1 || nums.length == k || k == 0)
		return
	
	// Buffer
	let b = []
	// Current position
	let c = 0
	
	let divisible = false
	
	/*if (nums.length % k == 0) {
		divisible = true
	}
	else */if (nums.length % 2 == 0 && k % 2 == 0) {
		divisible = true
	}
	else if (nums.length % 3 == 0 && k % 3 == 0) {
		divisible = true
	}
	
	//console.log(`divisible: ${divisible}`)
	
	let looped = false
	
	b.push(nums[0])
	for (let i = 0; i < nums.length; i++) {
		// Offset current position by rotation
		c += k
		
		// Overflow check
		if (c >= nums.length) {
			c -= nums.length
			if (divisible && i > 0) {
				looped = true
			}
		}
		
		// Swap
		b.push(nums[c])
		nums[c] = b.shift()
		
		if (divisible && looped && i > 0) {
			c++
			b = [nums[c]]
			looped = false
		}
		
		//console.log(`step (${i}): c: ${c}, b: ${b}, nums: ${nums}`)
	}
};

function slowStableRotate(nums, k) {
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

function runTestSuite() {
	let n_max = 128
	let k = 0
	
	let generate_data = function(n) {
		let data = []
		for (let i = 0; i < n; i++)
				data[i] = i + 1
		return data
	}
	
	main_loop:
	for (let n = 0; n <= n_max; n++) {
		for (let k = 0; k < n_max; k++) {
			
			let data = generate_data(n)
			let expected = data.slice()
			
			slowStableRotate(expected, k)
			
			rotate(data, k)
			
			if (false === data.every((v, i) => v == expected[i])) {
				console.log(`fail: rotate: array(${n}, ${k})`)
				console.log(`expected: ${expected}, ret: ${data}`)
				break main_loop
			}
		}
	}
}

runTestSuite()

function runTests2() {
	let k = 4
	let n = 6
	let data = []
	for (let i = 0; i < n; i++)
		data[i] = i + 1
	
	console.log(data)
	
	rotate(data, k)
	
	console.log(data)
}

// runTests2()

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

// runTests()

/*import { rotateTestData as bigTestData } from './rotateTestData.js'

console.log(bigTestData.length)
rotate(bigTestData, 65535)
console.log("done")*/
